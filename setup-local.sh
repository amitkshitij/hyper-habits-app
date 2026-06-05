#!/bin/bash
# Setup & run HyperHabits locally
set -e

echo "📦 Installing PHP dependencies..."
composer update --with-all-dependencies

echo "🔑 Generating app key..."
php artisan key:generate

echo "⚡ Clearing caches..."
php artisan config:clear
php artisan cache:clear

echo "📦 Installing JS dependencies..."
npm install

echo "🏗️  Building frontend assets..."
export NODE_OPTIONS=--openssl-legacy-provider
npm run dev

echo "🚀 Starting Laravel dev server on http://localhost:8000"
php artisan serve
