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
ssh -i "$SSH_KEY" -p "$DEPLOY_PORT" -o StrictHostKeyChecking=no "$DEPLOY_USER@$DEPLOY_HOST" "
  set -e
  cd $APP_DIR

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
"

echo "=== 🎉 Deployment to app.hyper-habits.com completed successfully! ==="
