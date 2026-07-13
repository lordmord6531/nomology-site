#!/usr/bin/env bash
# promote-to-root.sh — promote the redesigned homepage from the staging area to the site root.
#
# The shippable build lives at redesign/production/ and uses root-absolute paths
# (/images/..., https://nomology.food/...) precisely so it can move to the repo root
# unchanged. This script performs that move + a pre-flight asset check.
#
# ⚠️  DO NOT run until the "Ask Nom" feature has shipped — the new homepage releases
#     together with it (see redesign/README.md).
#
# Usage (run from the nomology-site repo ROOT):
#   ./redesign/promote-to-root.sh            # dry run: list the moves + verify /images assets
#   ./redesign/promote-to-root.sh --apply    # actually copy the files into the repo root
#
# After --apply: review `git status`, stage by EXPLICIT path, commit, open the release PR to main.

set -euo pipefail

SRC="redesign/production"
FILES=(index.html robots.txt sitemap.xml)
APPLY=0
[[ "${1:-}" == "--apply" ]] && APPLY=1

# Guard: must be at the repo root (where the live index.html + the redesign/ staging area live).
if [[ ! -d "$SRC" || ! -f "index.html" ]]; then
  echo "ERROR: run from the nomology-site repo root (expected $SRC/ and ./index.html)." >&2
  exit 1
fi

echo "== Promote homepage:  $SRC  ->  repo root =="
for f in "${FILES[@]}"; do
  [[ -f "$SRC/$f" ]] || { echo "ERROR: missing $SRC/$f" >&2; exit 1; }
  echo "  $SRC/$f  ->  ./$f"
done

# Pre-flight: every root-absolute /images/... asset the build references must exist at the root,
# otherwise the promoted page would 404 its own images.
echo "== Verifying referenced /images assets exist at root =="
missing=0
while IFS= read -r asset; do
  if [[ -f ".${asset}" ]]; then
    echo "  ok   $asset"
  else
    echo "  MISS $asset"
    missing=$((missing + 1))
  fi
done < <(grep -hoE '/images/[A-Za-z0-9._/-]+' "$SRC/index.html" | sort -u)
[[ "$missing" -eq 0 ]] || echo "WARNING: $missing referenced /images asset(s) missing at root — fix before release."

if [[ "$APPLY" -eq 0 ]]; then
  echo
  echo "Dry run only. Re-run with --apply to copy the files into the repo root."
  exit 0
fi

echo "== Applying =="
for f in "${FILES[@]}"; do
  cp "$SRC/$f" "./$f"
  echo "  copied ./$f"
done

echo
echo "Done. Next:"
echo "  1. git add index.html robots.txt sitemap.xml   # explicit paths only"
echo "  2. git commit -m 'Promote redesigned homepage to root'"
echo "  3. Open the release PR to main (this is the go-live)."
