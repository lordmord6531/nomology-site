# Homepage redesign — staging area (DO NOT MERGE yet)

The approved new homepage (v3). **Not live**; this PR is **not to be merged** until the
**"Ask Nom"** feature ships — the new site releases together with it.

## What's here

**`production/index.html`** — the build that will actually ship. A faithful, **static,
self-contained** reproduction of the design: semantic HTML/CSS + vanilla JS, **no
Design Composer / `_ds` runtime dependency**. Verified pixel-identical to the design
reference (headless render diff). At release it promotes to the repo root `index.html`
(it already uses root-absolute `/images/…` paths, so the move is clean).

What the production build carries:
- The wheel generator, match badges, founder code-typer and the whole scroll engine
  **ported 1:1** to vanilla JS; the Circle radar reproduced from its real values.
- **No-regression items** from the live site: the auth-redirect **error modal**, the
  exact live **CSP**, `lang="en-GB"`, favicons, footer → `/privacy` `/terms` `/support`.
- **Production additions** (no visual change): real `<title>` + meta + **OpenGraph/
  Twitter**, `<main>`/semantic landmarks, skip-link, ARIA on the modal, full
  `prefers-reduced-motion` support.

**Design reference (not shipped):** `nomology-home-v3.dc.html` + `support.js` +
`image-slot.js` + `_ds/…` + `assets/` — the original Claude Design Composer export.
Kept as the visual source of truth to diff against; renders only via its JS runtime.

## How to view

```bash
cd /path/to/nomology-site && python3 -m http.server 8000
# production build : http://localhost:8000/redesign/production/index.html
# design reference : http://localhost:8000/redesign/nomology-home-v3.dc.html
```

## Status / next steps

- ✅ Faithful static rebuild complete and visually verified.
- ✅ Production-readiness gauntlet done: **0 blockers**, 29 design-safe fixes confirmed.
- ✅ **v4 design refinements accepted & folded in** — WCAG-AA small-label contrast
  (eyebrows `#E45F3A`, "MOST LOVED" `#8B3219`, loop label brighter), the hero headline paints
  immediately (best LCP — entrance fade dropped), and footer legal links hit the 44px iOS
  tap-target minimum on mobile. (v3 baseline retained in git history.)
- ⏳ **Next: apply the 29 queued design-safe fixes** (canonical, JSON-LD, aria-hidden the demo,
  rAF idle-on-hidden, font slimming, decode guard, dead-code removal, etc.) to this build.
- 🅿️ Parked: home `og:image` + the share-image pipeline re-eval; apple-touch-icon asset.
- 🚫 Do not merge / promote to root until **Ask Nom** ships.

## Known issue to fix separately (pre-existing, not introduced here)

The share-link redirect in `../404.html` and `../s/index.html` points iOS users at
`apps.apple.com/app/id6736435209`, but the live app is **`id6757445966`**. Looks like a
stale ID mis-routing share links. Out of scope for the homepage rebuild (those files are
preserved as-is) — flag for a separate fix.

## References

Internal working docs, kept with the project (intentionally **not** committed to this
public site repo): the design brief (`WEBSITE_REDESIGN_BRIEF.md`) and the flavour-wheel
construction spec (`FLAVOR_WHEEL_SPEC.md`).
