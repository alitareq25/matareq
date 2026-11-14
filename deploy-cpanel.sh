#!/bin/bash
set -euo pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
document_root="${MATAREQ_DOCUMENT_ROOT:-$HOME/public_html}"
test -d "$document_root"
test -d assets

# Preserve any existing Apache configuration and publish the homepage last.
if [[ ! -e "$document_root/.htaccess" && ! -L "$document_root/.htaccess" ]]; then
  /bin/cp -- .htaccess "$document_root/.htaccess"
fi
/bin/mkdir -p -- "$document_root/assets"
/bin/cp -R -- assets/. "$document_root/assets/"
for page in research publications teaching profile contact; do
  /bin/mkdir -p -- "$document_root/$page"
  /bin/cp -- "$page/index.html" "$document_root/$page/index.html"
done
for file in 404.html robots.txt sitemap.xml index.html; do
  /bin/cp -- "$file" "$document_root/$file"
done
