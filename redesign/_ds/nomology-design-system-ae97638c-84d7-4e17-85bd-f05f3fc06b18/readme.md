# Nomology — Design System

> **Stop scrolling, start cooking.** Nomology learns your taste from a few swipes, then recommends recipes you'll actually want to cook — plus weekly meal plans for the whole household.

This project is the brand + product design system for **Nomology**, a UK-built recipe-discovery and meal-planning iOS/Android app. It packages the brand's color, type, spacing, iconography, reusable UI primitives, and a high-fidelity UI kit recreating the real app surfaces, so design agents can produce on-brand interfaces and assets.

---

## Sources

Everything here is distilled from a verified inventory of the production Flutter app:

- **Codebase:** `nomology-flutter` (Flutter) — working tree at `/Users/davemaude/nomology/nomology-flutter/` as of 2026-06-14.
- **Inventory doc:** `Design System Inventory/nomology-design-system-inventory.md` (attached) — verifies every hex value and file path against `lib/core/theme/app_theme.dart`, `lib/core/constants/flavor_colors.dart`, the button system, and the AI flow screens.
- **Logo:** `uploads/nomology_logo.svg` → copied to `assets/nomology_logo.svg`.

No Figma file was provided. If one exists, link it here for future contributors.

### Key framing fact
The app **ships light-mode-first** (`main.dart:424` forces `ThemeMode.light`). A set of feature flows — the **AI recipe builder, Discover swipe feed, cooking sessions, rating flow** — opt into a hand-rolled **"crafted dark"** look (warm near-black `#181818`). This design system tokenises *both* families: a warm light theme (the default) and a crafted-dark surface set (for AI/Discover flows). There is **one product**, two surface moods.

---

## Products represented

1. **Nomology mobile app** (iOS + Android, Flutter) — the only product. Core surfaces: Cookbook, Discover (swipe feed), Recipe detail, the AI "Describe with AI" recipe builder, Meal Plan, Circles (households), Flavour profile. The UI kit in `ui_kits/nomology_app/` recreates the load-bearing screens.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry point (consumers link this). `@import`s only.
- `tokens/colors.css` — brand, crafted-dark, flavor, AI-shimmer, semantic aliases.
- `tokens/typography.css` — Judson + Nunito Sans scale.
- `tokens/spacing.css` — spacing, radius, elevation, motion.
- `tokens/fonts.css` — webfont + Material Symbols loading.

**Specimen cards** (Design System tab) — `cards/*.html`, grouped Type / Colors / Spacing / Brand.

**Components** — `components/<group>/`, exposed at `window.NomologyDesignSystem_ae9763` after compile:
- `forms/` — `Button`, `IconButton`, `Input`, `SegmentedControl`
- `display/` — `Badge`, `Tag`, `FlavorChip`, `MatchBadge`, `Avatar`, `SectionHeader`, `FlavorRadarChart`, `FlavorWheel`
- `surfaces/` — `Card`, `RecipeCard`, `BottomSheet`
- `feedback/` — `EmptyState`, `Toast`

**UI kit** — `ui_kits/nomology_app/` — interactive click-through recreation of the iOS app (Cookbook, Discover, Describe-with-AI, Plan, Circle, Recipe detail).

**Assets** — `assets/` — logo + brand marks.

**Skill** — `SKILL.md` — makes this downloadable as a Claude Agent Skill.

---

## CONTENT FUNDAMENTALS

How Nomology writes. The voice is **warm, plain-spoken, confident, and a little cheeky** — a knowledgeable friend who cooks, not a corporate app.

**Person & address.** Second person, direct: *"learns what you love and what you don't"*, *"recipes you'll actually want to cook."* The product refers to itself by name ("Nomology builds a 158-point flavour profile") or as "we" for the team ("we'll save it neatly to your cookbook", "No ads, ever — we make money only when you subscribe"). Never "I".

**Tone.** Empathetic to the real frustration ("Tired of scrolling through recipes that all look the same?"), then reassuring. Confident about competence without bragging — it proves expertise with *specifics* rather than adjectives: *"it knows that Spanish sofrito isn't Puerto Rican sofrito, that filé gumbo can't be boiled, that doubling a recipe doesn't double the salt, and that miso goes in off the heat."* That concrete, slightly nerdy specificity **is** the brand voice. Lean on it.

**Casing.** Sentence case everywhere in UI and body. **ALL-CAPS eyebrows** are used as section headers (NunitoSans 11px, `letter-spacing: 1px`) — e.g. "HOW IT WORKS", "WHAT'S INCLUDED: FREE", "BUILT FOR REAL LIFE". Headlines in marketing copy are occasionally set in caps for punch ("RECIPES THAT FIT YOUR TASTE, NOT EVERYONE ELSE'S"). Feature names are Title Case (AI Recipe Builder, Surprise Me, Recipe Import).

**Spelling.** **British English.** "flavour", "personalised", "flatmates", "cancelled". Prices in **£**. Keep it.

**Punctuation & rhythm.** Em-dashes and colons to add a beat: *"love dark chocolate, hate coriander?"* Short, punchy sentences mixed with one longer specific one. Rhetorical questions to open sections. Lists are scannable, benefit-led, and start with a verb or the feature name.

**Numbers as proof.** Concrete figures build trust: *158-point flavour profile, 4,000+ recipes, 35+ world cuisines, 20 AI actions/month.* Use real specifics, never vague "lots of recipes". (But don't manufacture stats — see content guidelines: no data slop.)

**Honesty / values copy.** Plain and principled: *"We don't sell your data."*, *"No ads, ever."*, *"Subscriptions support the whole product."* No hedging.

**Emoji.** **Not used** in product copy or UI. Don't add them. Iconography is Material Symbols, not emoji.

**Examples to imitate**
- Hero: *"Stop scrolling, start cooking."*
- Benefit: *"Nomology learns what you love and what you don't, then recommends meals you'll actually want to cook."*
- Feature: *"Paste any recipe URL and we'll save it neatly to your cookbook."*
- Reassurance: *"Excluded ingredients are honoured across recommendations and meal plans."*

---

## VISUAL FOUNDATIONS

**Overall mood.** Warm, appetising, editorial-but-friendly. A cream paper background, burnt-terracotta red accent, brown ink text, and serif display type give it a cookbook-meets-modern-app feel. Imagery (food photography) carries the warmth; the chrome stays quiet so dishes pop.

**Color.**
- **Primary brand red `#BD4527`** — a burnt terracotta / paprika. CTAs, match indicators, the "Add Recipe" pill, accents. Pressed/gradient end is a deeper `#9A3620`.
- **Ink `#33281C`** (warm near-black brown) for headings/primary text; **brown `#633C37`** for secondary text and outline strokes.
- **Cream `#F5F1F1`** is the app surface; **white** and **warm-grey `#E8DFDE`** are the two card fills.
- **Blue `#276DBD`** is the secondary accent; **beige `#E5C5C0`** a soft fill; **teal `#007E89`** is the Circles/household family.
- **Crafted-dark family** for AI/Discover/Cooking: scaffold `#181818`, raised fill `#222222`, border `#302E2E`, near-black card `#0F0E0E`. On dark, text uses a **named opacity ramp**: white 100 / 70 / 50 / 30, fills at 6–10%.
- **Flavor accent palette** (radar charts, flavor chips): red `#DC2626`, orange `#EA580C`, amber `#D97706`, lime `#65A30D`, cyan `#0891B2`.
- **AI shimmer palette** signals AI-powered surfaces: gold `#FEB712` → orange `#FB6B35` → hot-pink `#F70157` → pink `#EC4E8F` → purple `#AC52FC` → blue `#299BFE`, as a rotating sweep gradient. This is a deliberate sub-language adjacent to (but distinct from) the warm brand — reserve it for AI affordances only.

**Type.** **Judson** (serif) for display + all screen titles (24px bold, `letter-spacing: -0.5`); recommendation-card names at 20px with tighter `-0.75`. **Nunito Sans** for everything else — body 14–15px regular, button labels 14–16px `w600`, ALL-CAPS eyebrows 11px `w600` `letter-spacing: 1`, flavor chips 10px. No third font.

**Spacing.** 4 / 8 / 12 / 16 / 24 / 32 / 40 cadence. Screen horizontal padding is **24px**; between-section gap **24px**; form-row gap **16px**.

**Corner radii.** 12px is the default surface + button radius. 8px small inputs / pills, 10px cards & chips, 16px tag chips & Material card default, 20px bottom-sheet tops, 100px fully-rounded flavor chips. Nothing is sharp-cornered; nothing is aggressively pill-rounded except chips.

**Cards.** Mostly **flat** — `elevation: 0` with either a white or warm-grey `#E8DFDE` fill and a 10–12px radius. A subtle outline (`outlineVariant`, ink @ 10%) sometimes replaces shadow. High-craft cards (recommendation card) layer a clipped food image with a **gradient fade to the card fill** at the bottom, an overhanging bookmark button (top-left, peeks ~4px above), an overhanging **match badge** (top-right) — a faceted **hexagon** (great/perfect, with 3 stars + a MATCH bar at 90+), **shield** (good) or **octagon** (fair) carrying a white score — and an inline flavor radar chart with chip tags. That card is the polish ceiling.

**Backgrounds.** Solid warm fills, not gradients or textures, for chrome. Gradients appear only in two places: the **image fade-to-card** overlay on recipe cards, and the **AI shimmer** sweep. No repeating patterns, no noise/grain on chrome (food photos carry their own warmth/grain).

**Imagery.** Warm, appetising food photography, full-bleed within cards, top-aligned with a bottom gradient protection fade so text sits legibly. Generally warm-toned, natural light.

**Shadows.** Light surfaces use soft warm-tinted shadows (`rgba(51,40,28,·)`), kept very subtle — a 1–3px card shadow, a slightly larger pop shadow for floating elements, a faint upward shadow on the bottom nav bar. Dark surfaces drop shadows entirely (use the `#302E2E` border for separation instead).

**Borders.** On light: `ink @ 30%` for outlines, `ink @ 10%` for subtle dividers. On dark: solid `#302E2E`, or white @ 8% for subtle.

**Motion.** Restrained. `AnimatedContainer` / `AnimatedScale` / `AnimatedOpacity`, 100–300ms, `Curves.easeOut` (≈ `cubic-bezier(0.2,0,0,1)`). Selection chips animate fill/border over 200ms. No bounce, no spring, no decorative loops — except the **AI shimmer** which rotates on a 3s loop while AI works. Haptics are treated as part of design (selection/confirm/navigation pulses).

**Hover / press.** Mobile-first, so **press** is the primary state: scale to **0.98** on tap; disabled drops opacity to **0.4**. On hover-capable surfaces use a slight darken (toward `--brand-pressed`) or a subtle fill tint — never a glow.

**Transparency & blur.** Used sparingly: low-opacity brand tints for selected chips (`red @ 15–20%`), the dark opacity ramp for text hierarchy, and image protection gradients. No heavy glassmorphism.

**Layout rules.** Fixed bottom navigation bar with a faint top shadow. Screen content scrolls beneath fixed headers. Bottom sheets slide up from the bottom with a 20px top radius and a 4×40 handle bar.

---

## ICONOGRAPHY

- **Canonical family: Material Symbols (Rounded).** The app uses `material_symbols_icons` (`Symbols.*`) everywhere — `Symbols.auto_awesome` (AI), `Symbols.bookmark_add`, `Symbols.skip_next`, etc. A handful of ubiquitous glyphs fall back to Material `Icons.*` (`close`, `add`, `chevron_right`) because they have identical native equivalents.
- **In this design system**, Material Symbols Rounded is loaded from the Google Fonts CDN in `tokens/fonts.css`. Use `<span class="material-symbols-rounded">auto_awesome</span>`; add the `.fill` class for the filled variant. Match the app's rounded, optical-size-24 default. **This is a CDN substitution of the same Material Symbols set the app ships** — visually identical; flag if you need self-hosted binaries.
- **No emoji, ever.** No custom unicode glyphs as icons. No third-party icon set (no Lucide/Heroicons).
- **No bespoke SVG icons** beyond the logo. The only brand SVG asset is the app-icon logo (`assets/nomology_logo.svg`) — a burnt-red `#BD4527` rounded square with a cream negative-space mark.
- **Sizing.** 18–20px inline with text; 24px standard; 48px for empty-state hero icons (drawn at 50% opacity).

---

## Notes & substitutions

- **Aligned to source.** Token values, the 7 button variants (incl. `primaryGradient` end `#8B3219` and the brown-15% `secondary` fill), the inset-pill `SegmentedControl`, the solid-colour `FlavorChip` (cream text), the faceted `MatchBadge` (hexagon/shield/octagon by score band), and the blurred AI-shimmer border were all verified and matched against `lordmord6531/nomology@dev` — `lib/core/theme/app_theme.dart`, `lib/core/constants/flavor_colors.dart`, `lib/core/widgets/buttons/nomology_button_style.dart`, `nomology_segmented_control.dart`, `flavor_chip.dart`, `match_badge.dart`, `ai_shimmer_border.dart`.
- **Fonts** are loaded from Google Fonts CDN (Judson, Nunito Sans) — the same families the app loads at runtime via the `google_fonts` package. CDN confirmed acceptable by the team.
- **Material Symbols** is CDN-loaded (same set as the app). Substitution noted above.
- **Semantic success/warning/info** colors were *missing* in the codebase (raw `Colors.green/.amber` were used). This system adds warm-tuned tokens (`--nom-success`, `--nom-warning`, `--nom-info`) to fill that documented gap.
