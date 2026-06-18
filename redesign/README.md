# Homepage redesign — staging area (DO NOT MERGE yet)

This folder holds the **approved new homepage design (v3)**. It is **not live**, and
this PR is **not to be merged** until the **"Ask Nom"** feature ships — the new site
releases together with it.

## What's here

A **Claude Design Composer export** (multi-file, not the old self-contained bundle):

- **`nomology-home-v3.dc.html`** — the page (Design Composer document using custom
  `<x-dc>` elements).
- **`support.js`**, **`image-slot.js`** — the runtime scripts the page loads.
- **`_ds/nomology-design-system-…/`** — the design-system tokens + styles + bundle
  (fonts, colours, typography, spacing, themes). ~196 KB.
- **`assets/nomology_logo.svg`** — the logo.
- Photos are **not duplicated** here — image refs point at the repo's existing
  `../images/*.webp` (hero, founder, for-the-family/circle/cook/explorer).

It includes the **Ask Nom** section and uses the correct `/gb/` App Store link.

## How to view

It needs its JS runtime + relative paths, so serve the repo (don't just double-click):

```bash
cd /path/to/nomology-site && python3 -m http.server 8000
# then open http://localhost:8000/redesign/nomology-home-v3.dc.html
```

## One change from the raw export

Image paths were rewritten from `images/…` → `../images/…` so the preview uses the
repo's existing photos instead of duplicating them. (A fresh Design Composer
re-export will use `images/…` again — just re-apply if you re-export.)

## Before release — refinement checklist

This is a Design Composer document (renders via JS); the rest of `nomology-site` is
hand-built **semantic static HTML/CSS** — fast, crawlable, no JS dependency. Ship the
*design*, not the tool format:

1. **Produce production static HTML/CSS** matching this design (or a final static
   export) — don't ship the JS-runtime Design Composer doc as the live homepage.
2. **Real SEO/meta:** proper `<title>`, meta description, **OpenGraph tags** (the
   export has none; the site's link-preview pipeline depends on them).
3. **Restore behaviour the live `index.html` has:** the auth-redirect **error modal**
   (`#error-modal` script) and footer links to **Privacy / Terms / Support**.
4. **Accessibility:** real `alt` text, contrast, keyboard nav, honour
   `prefers-reduced-motion`.
5. **Confirm the Ask Nom section** is final — this release is gated on that feature.
6. **Image optimisation** — confirm `images/` assets are sized/WebP/lazy-loaded
   (the current site already does this).

## References

Internal working docs, kept with the project (intentionally **not** committed to this
public site repo): the design brief (`WEBSITE_REDESIGN_BRIEF.md`) and the flavour-wheel
construction spec (`FLAVOR_WHEEL_SPEC.md`).
