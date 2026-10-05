#!/usr/bin/env bash
# Publish this site to the Potato's Core Manager website "cappyworld" (replaces Cloudflare Pages).
#   tools/deploy-potato.sh                 # uses POTATO=root@100.88.76.25
#   POTATO=root@debian-12-aml-s905x-cc tools/deploy-potato.sh
# Needs SSH as root over Tailscale, and the website created once in Core Manager > Websites.
set -euo pipefail
cd "$(dirname "$0")/.."
POTATO="${POTATO:-root@100.88.76.25}"
STAGE=/tmp/cappyworld-deploy

echo "== copying to $POTATO:$STAGE"
ssh "$POTATO" "mkdir -p $STAGE/site $STAGE/server"
rsync -az --delete --stats \
    --exclude .git --exclude .wrangler --exclude .nojekyll --exclude functions \
    --exclude server --exclude tools --exclude wrangler.toml --exclude README.md --exclude .DS_Store \
    ./ "$POTATO:$STAGE/site/"
rsync -az --delete server/ "$POTATO:$STAGE/server/"

echo "== installing"
ssh "$POTATO" "bash $STAGE/server/install-on-potato.sh $STAGE"
