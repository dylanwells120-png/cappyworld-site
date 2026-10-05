#!/usr/bin/env bash
# Run as root on the Potato (tools/deploy-potato.sh does this for you).
# Installs the site files into the Core Manager website "cappyworld" and the park lobby behind /mp/.
set -euo pipefail
NAME="${SITE_NAME:-cappyworld}"
STAGE="${1:?usage: install-on-potato.sh <staging dir>}"
WEBROOT="/srv/web/$NAME"
TEMPLATE=/opt/core-manager/templates/site.conf.tmpl
EXTRAS_LINE="    include /etc/nginx/core-site-extras/@@NAME@@/*.conf;"

[[ $EUID -eq 0 ]] || { echo "run as root" >&2; exit 1; }
[[ -d $WEBROOT ]] || { echo "No website '$NAME' yet. Create it in Core Manager > Websites first." >&2; exit 1; }

echo "== site files -> $WEBROOT"
rsync -a --delete "$STAGE/site/" "$WEBROOT/"
chown -R coremgr:storage "$WEBROOT"
find "$WEBROOT" -type d -exec chmod 2775 {} +
find "$WEBROOT" -type f -exec chmod 0664 {} +

echo "== park lobby service"
install -d -m 0755 /opt/cappy-park
install -m 0644 "$STAGE/server/park.py" /opt/cappy-park/park.py
install -m 0644 "$STAGE/server/cappy-park.service" /etc/systemd/system/cappy-park.service
systemctl daemon-reload
systemctl enable cappy-park >/dev/null
systemctl restart cappy-park

echo "== nginx route /mp/"
install -d -m 0755 "/etc/nginx/core-site-extras/$NAME"
install -m 0644 "$STAGE/server/mp.nginx.conf" "/etc/nginx/core-site-extras/$NAME/mp.conf"
# Let Core Manager site vhosts pull in per-site extras (no-op for sites without any).
if ! grep -q "core-site-extras" "$TEMPLATE"; then
    sed -i "s|^    location / { try_files|$EXTRAS_LINE\n    location / { try_files|" "$TEMPLATE"
fi
/opt/core-manager/libexec/site_manage.sh enable "$NAME"   # re-renders the vhost, checks nginx, reloads

PORT="$(awk -F'|' -v n="$NAME" '$1==n {print $2}' /var/lib/core-manager/sites.tsv)"
sleep 1
echo "== checks (site port $PORT)"
curl -fsS "http://127.0.0.1:$PORT/" -o /dev/null && echo "home page: ok"
curl -fsS "http://127.0.0.1:$PORT/mp/status" && echo "  <- park lobby: ok"
