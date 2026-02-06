#!/bin/bash
# Initial SSL setup script for fulcrux.ai
# Run this ONCE on the VPS after first deployment

DOMAIN="fulcrux.ai"
EMAIL="admin@fulcrux.ai"

echo "=== Step 1: Creating temporary Nginx config (HTTP only) ==="

# Backup the full config
cp nginx/conf.d/default.conf nginx/conf.d/default.conf.bak

# Write HTTP-only config for initial cert generation
cat > nginx/conf.d/default.conf << 'NGINX'
server {
    listen 80;
    server_name fulcrux.ai www.fulcrux.ai;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 200 'Setting up SSL...';
        add_header Content-Type text/plain;
    }
}
NGINX

echo "=== Step 2: Starting Nginx (HTTP only) ==="
docker compose up -d nginx

echo "=== Step 3: Requesting SSL certificate ==="
docker compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email "$EMAIL" \
    --agree-tos \
    --no-eff-email \
    -d "$DOMAIN" \
    -d "www.$DOMAIN"

echo "=== Step 4: Restoring full Nginx config (with SSL) ==="
cp nginx/conf.d/default.conf.bak nginx/conf.d/default.conf

echo "=== Step 5: Restarting all services ==="
docker compose down
docker compose up -d

echo "=== Done! ==="
echo "Visit https://$DOMAIN to verify."
echo ""
echo "To set up auto-renewal, add this cron job:"
echo "0 3 * * * cd $(pwd) && docker compose run --rm certbot renew && docker compose exec nginx nginx -s reload"
