#!/bin/bash
set -e

# Configuration
APP_DIR="/home/kisvps/public_html/app.hyper-habits.com"
DEPLOY_USER="kisvps"
DEPLOY_HOST="app.hyper-habits.com"
DEPLOY_PORT="22"
SSH_KEY="/Users/amitsinha/.ssh/hyperhabits-deploy"

echo "=== 🏗️  Building frontend assets locally ==="
export NODE_OPTIONS=--openssl-legacy-provider
npm run production

echo "=== 🚀 Syncing files to server via rsync ==="
rsync -avz --delete \
  --exclude='.env' \
  --exclude='node_modules' \
  --exclude='vendor' \
  --exclude='.git' \
  --exclude='storage/logs/*.log' \
  -e "ssh -i $SSH_KEY -p $DEPLOY_PORT -o StrictHostKeyChecking=no" \
  ./ "$DEPLOY_USER@$DEPLOY_HOST:$APP_DIR/"

echo "=== ⚡ Running post-deployment tasks on server ==="
set -a
. ./.env
set +a

DB_CONNECTION_ESCAPED=$(printf '%q' "$DB_CONNECTION")
DB_HOST_ESCAPED=$(printf '%q' "$DB_HOST")
DB_PORT_ESCAPED=$(printf '%q' "$DB_PORT")
DB_DATABASE_ESCAPED=$(printf '%q' "$DB_DATABASE")
DB_USERNAME_ESCAPED=$(printf '%q' "$DB_USERNAME")
DB_PASSWORD_ESCAPED=$(printf '%q' "$DB_PASSWORD")

ssh -i "$SSH_KEY" -p "$DEPLOY_PORT" -o StrictHostKeyChecking=no \
  "$DEPLOY_USER@$DEPLOY_HOST" \
  "DB_CONNECTION=$DB_CONNECTION_ESCAPED DB_HOST=$DB_HOST_ESCAPED DB_PORT=$DB_PORT_ESCAPED DB_DATABASE=$DB_DATABASE_ESCAPED DB_USERNAME=$DB_USERNAME_ESCAPED DB_PASSWORD=$DB_PASSWORD_ESCAPED APP_DIR=$APP_DIR bash -s" <<'REMOTE'
set -e
cd "$APP_DIR"

echo '=== Syncing DB env values into server .env ==='
php -r '
$path = ".env";
$values = [
    "DB_CONNECTION" => getenv("DB_CONNECTION"),
    "DB_HOST" => getenv("DB_HOST"),
    "DB_PORT" => getenv("DB_PORT"),
    "DB_DATABASE" => getenv("DB_DATABASE"),
    "DB_USERNAME" => getenv("DB_USERNAME"),
    "DB_PASSWORD" => getenv("DB_PASSWORD"),
];

$lines = file_exists($path) ? file($path, FILE_IGNORE_NEW_LINES) : [];
$updated = [];

foreach ($lines as &$line) {
    foreach ($values as $key => $value) {
        if (strpos($line, $key . "=") === 0) {
            $line = $key . '="' . addcslashes($value, "\\\"") . '"';
            $updated[$key] = true;
            break;
        }
    }
}
unset($line);

foreach ($values as $key => $value) {
    if (!isset($updated[$key])) {
        $lines[] = $key . '="' . addcslashes($value, "\\\"") . '"';
    }
}

file_put_contents($path, implode(PHP_EOL, $lines) . PHP_EOL);
'

echo '=== Clearing stale Laravel caches before install/migrate ==='
php artisan optimize:clear

echo '=== Installing PHP dependencies ==='
composer install --no-dev --optimize-autoloader

echo '=== Running Migrations ==='
php artisan migrate --force

echo '=== Clearing Caches ==='
php artisan config:clear
php artisan cache:clear
php artisan route:clear

echo '=== Installing JS dependencies ==='
npm install --no-audit --no-fund

echo '=== Compiling assets on server ==='
export NODE_OPTIONS=--openssl-legacy-provider
npm run production

echo '=== Setting public folder permissions ==='
chmod -R 755 public
REMOTE

echo "=== 🎉 Deployment to app.hyper-habits.com completed successfully! ==="
