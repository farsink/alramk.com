# Al-Ramk Multipage Website Redesign — Implementation Plan

## Context

Al-Ramk is a Qatar-based endurance horse-racing technology company. It sells timing hardware (Ubidium, Active Transponder 3D), heart-rate and GPS monitoring, real-time reporting, and the Al-Ramk mobile app. The current `alramk.com` is a dark, single-page, gradient-heavy site. The goal is to replace the Astro starter at `/` with a five-page, static marketing site that looks and reads like a premium endurance-racing brand.

The visual direction is adapted from the authorized Horsera HTML template: cream and espresso surfaces, muted gold accents, oversized Cinzel display type, DM Sans body copy, a circular image motif, cut-corner cards, hairline grids, thin equestrian icons, and dark image-led bands. No Horsera code, logo, or photography will be shipped. Its layout language is the reference; Al-Ramk owns the content, imagery, and brand.

Content has been researched from:

- `https://alramk.com/` — company description, services, story, mission, vision, team, contact details.
- `https://play.google.com/store/apps/details?id=com.bytecraft.al_ramk` — app description, screenshots, platform status.
- `https://apps.apple.com/us/app/al-ramk/id6739287783` — App Store listing.
- The app screenshots themselves — Races, Final standings, Summary, Results, Entries.
- `aspnet-site/wwwroot/images/` — existing Al-Ramk product and race photography in this repo.
- Endurance-racing domain sources (FEI/EIEV/RACE RESULT/AERC/equipe material) — used only to make the race-day workflow credible, not to claim Al-Ramk certifications or rule compliance.

**Current repo state:** Astro 7.4.2, static output, one starter page, no layout/components/styles, no Git repository. `aspnet-site/` is a separate published ASP.NET copy of the current site and must not be modified. `sharp` is already available through Astro.

## Approach

Build a static Astro site with one shared layout, a small component set, and a single data module for repeated content. Use CSS custom properties for the Horsera-derived cream/espresso/gold system, self-hosted variable fonts, and native HTML interactions. Use Al-Ramk's existing product photography and real app screenshots instead of Horsera assets. Keep the scope to five routes, zero client JavaScript, and a mailto conversion so the whole site can be built and verified locally without a backend.

## Approved Scope

- Five root routes: `/`, `/features/`, `/how-it-works/`, `/about/`, `/contact/`.
- Replace the Astro starter at `/`.
- English-only, static, local-only. No deploy, tunnel, analytics, embeds, backend, or remote form submission.
- The only outbound links are the two app-store links. They are plain links, opened by the user; no scripts or tracking.
- No contact form in this phase. The conversion is a prefilled `mailto:` link. A real form needs an approved backend and privacy handling; a dead form is worse than an honest email CTA.
- **Zero client JavaScript.** Mobile navigation and FAQ use native `<details>/<summary>`. Hover/focus and reveal/route motion use CSS only; no JS libraries.
- Use only Al-Ramk-owned product/race imagery and published app-store screenshots. No Horsera photography, logo, or code is shipped; use Horsera only as a visual reference.
- `aspnet-site/` remains untouched.

## Route Map

| Route | Page | Primary job |
|---|---|---|
| `/` | Home | Position Al-Ramk, show the six capabilities, explain the race day, showcase the app, convert to a demo request |
| `/features/` | Features | Prove each capability with detail and real app screens |
| `/how-it-works/` | How It Works | Explain the endurance race-day workflow from entries to official results |
| `/about/` | About | Build trust with the company story, mission, and team; no invented proof |
| `/contact/` | Contact & Download | Give contact details, a prefilled demo email, app links, and working hours |

Trailing-slash canonicals (`https://alramk.com/features/`). All internal links use the same form.

## Information Architecture

### Global chrome

**Utility bar (desktop, 40px):**
- Left (espresso block): small gold horse mark + “Endurance race management · Qatar”.
- Right (gold/cream block, diagonal clip): `alnaimij@alramk.com` and `+974 7062 9029`.
- On mobile the bar collapses to a single centered line or is hidden; contact details remain in the footer and on `/contact/`.

**Header (sticky, 84px desktop / 64px mobile):**
- Brand: 40px app-icon tile (gold clock/horse mark on white) + `AL-RAMK` in Cinzel, letter-spaced.
- Nav: Home · Features · How It Works · About · Contact.
- Persistent CTA: “Request a Demo” → `/contact/`.
- Mobile: native `<details>` disclosure with a hamburger summary, full-width cream panel, large Cinzel links, CTA at the bottom. No JS.
- Current page gets `aria-current="page"` and a gold underline.

**Footer (espresso + subtle topographic line texture):**
- Brand column: wordmark, one-line positioning, app badges.
- Explore: the five routes.
- Capabilities: six anchor links into `/features/`.
- Contact: email, phone, working hours, Qatar.
- Bottom row: `© <year> Al-Ramk. All rights reserved.` and a small “Endurance race timing & management” line. No developer credit, social icons, or unverified legal links.

### 1. Home

1. **Hero** — two columns.
   - Eyebrow: “Endurance Race Management”.
   - H1: “Horse race management, engineered for precision.”
   - Lead: “From Ubidium timing hardware to live results and veterinary insight, Al-Ramk gives organizers one connected system for every gate, loop, and finish.”
   - CTAs: “Request a Demo” (primary) and “Explore the System” (secondary → `/features/`).
   - Image: desert endurance horse (`home-bg.jpg`) in a tall cut-corner frame over a large espresso circle with a thin gold orbit line. Cream background.
   - Below the copy: three inline proof points separated by hairlines — `120 km/h` max tracked speed, `Real-time` results and standings, `GPS + HR` on-course insight. No invented metrics.
   - Small chip row: “Ubidium timing · Active Transponder 3D · Heart-rate monitoring · Live mobile results”.

2. **Role strip** — “One race day. Every team connected.”
   - Organizers: set up the race, follow every loop, publish results as they happen.
   - Veterinarians: heart-rate readings, recovery, and gate status in one workflow.
   - Riders, owners & fans: positions, times, and final standings in the Al-Ramk app.
   - Three columns, hairline dividers, small gold line icons.

3. **Capabilities grid** — eyebrow “What We Deliver”; H2 “A complete stack for modern endurance racing”; lead from the current site.
   - Six cards, each linked to its `/features/#anchor`:
     1. Ubidium Timing — accurate, reliable race results from the Ubidium timing device.
     2. Active Transponder 3D — high-frequency transponder tracking at speeds up to 120 km/h.
     3. Heart-Rate Monitoring — certified, programmable monitors designed for international standards.
     4. GPS Tracking — precise horse positioning and accurate speed determination.
     5. Real-Time Reporting — live standings plus printed reports with speed, recovery, heart rate, and vet checks.
     6. Al-Ramk Mobile App — upcoming races, live tracking, and finished results in your pocket.
   - Cut-corner cards, 3 → 2 → 1 columns.

4. **How It Works teaser** — eyebrow “From Start to Finish”; H2 “Built around the endurance race day”; four numbered steps:
   - 01 Set up the race — entries, loops, gates.
   - 02 Time every pass — Ubidium and Active Transponder.
   - 03 Run the vet gate — heart rate, recovery, hold, status.
   - 04 Publish the result — live standings, printed reports, app.
   - CTA: “See the full race-day workflow” → `/how-it-works/`.

5. **App showcase** — dark espresso band with topographic texture; centered heading.
   - H2: “Follow every loop, wherever you are.”
   - Copy: “The Al-Ramk app brings upcoming races, live rider positions, gate-by-gate performance, and final standings to riders, owners, and fans.”
   - Three phone-framed screenshots: Races list, Final standings, Summary.
   - Store badges; no ratings, download counts, or testimonials.

6. **Why Al-Ramk** — split section, image left (GPS/phone product shot), list right.
   - Eyebrow “Why Al-Ramk”; H2 “One team behind the timing, the software, and the results.”
   - Copy: “Al-Ramk builds the hardware and the software, so organizers work with one partner from gate setup to official results.”
   - Three items: endurance-specific workflow (loops, vet gates, holds); one connected system (timing, HR, GPS, results); results officials and riders can see.
   - CTA: “Meet Al-Ramk” → `/about/`.

7. **FAQ** — four questions answered only from verified sources:
   - What does Al-Ramk manage?
   - How fast can a horse be timed?
   - What can riders see in the app?
   - Can results be printed at the venue?
   - Native `<details>` accordion with gold plus/minus.

8. **CTA band** — “Let's talk about your next event.” + “We usually respond within one business day.” + “Request a Demo”.

### 2. Features

1. **Page hero** — eyebrow “The Platform”; H1 “Every gate. Every loop. Every result.”; lead “Timing, tracking, veterinary insight, and live results — designed as one system.”; CTA.
2. **Anchor nav** — six pill links with hairline borders; sticky under the header on desktop only.
3. **Six capability sections**, each with an anchor, eyebrow number, Cinzel H2, 2–3 sentence body, three bullets, and a product image or app screen. Alternating image side.
   - `#ubidium` — “The timing core.” Precision timing hardware; venue-ready; feeds Al-Ramk software.
   - `#transponder` — “Built for speed.” Horse-mounted transponder; high-frequency reads; speeds up to 120 km/h.
   - `#heart-rate` — “Welfare data at the gate.” Certified/programmable monitors; heart-rate and recovery data; supports vet checks.
   - `#gps` — “See the race as it unfolds.” Horse positioning; accurate speed; course visibility.
   - `#reporting` — “Results the moment they happen.” Live standings; on-demand printed reports; gate-by-gate data.
   - `#app` — “The race in every pocket.” Upcoming races; live positions/times/progress; rankings and performance summaries.
4. **App gallery** — “Inside the Al-Ramk app”; four captioned screens:
   - Races — finished/upcoming list with search and filter.
   - Final — position, loop, rider & horse, status, arrival, average speed.
   - Summary — eliminated/finished/ready/on-loop counts and charts.
   - Results — per-gate recovery time, heart rate, speed, average speed.
   - Caption each as “Screen from the Al-Ramk app”; do not re-create or fake live data.
5. **“Inside the results” band** — four data types (status, arrival, average speed, recovery & heart rate) in a hairline grid, drawn from the app.
6. **FAQ** — reuse the four Home answers.
7. **CTA band**.

### 3. How It Works

1. **Page hero** — eyebrow “Race-Day Workflow”; H1 “From the first entry to the official result.”; lead “A race-day workflow built for loops, vet gates, and the people who keep them moving.”
2. **Six-step timeline** — vertical, numbered 01–06, with a sticky illustration column on desktop:
   - Entries & race setup — define the race, loops, gates, and entries.
   - Pre-ride inspection — horse and rider presented before the start.
   - Start & loop timing — transponder reads at the start and timing points; GPS and heart rate on course.
   - Vet gate — arrival, heart rate, recovery, mandatory hold, inspection status.
   - Finish & verification — final timing, standings, official results.
   - Publish & follow — live app, printed reports, rankings.
   - Each step has “What happens” and “What Al-Ramk does”. Keep the copy generic (“typical endurance workflow”) where Al-Ramk-specific behaviour is not published.
3. **Race-day loop diagram** — original inline SVG: Start → Gate 1 → Vet Gate → Gate 2 → Finish, with “Loop 1”, “Hold”, “Loop 2” labels and a note “Loops and gates are configured per race.”
4. **Roles band** — Organizers / Veterinarians / Riders & owners / Spectators: one line each on what they see.
5. **App data flow** — four tabs explained without a live widget: Final, Summary, Results, Entries.
6. **CTA band**.

### 4. About

1. **Page hero** — eyebrow “Who We Are”; H1 “A decade of dedication to endurance racing.”; lead “The people, technology, and mission behind Al-Ramk.” (company-provided claim; see guardrails).
2. **Story split** — image collage of four Al-Ramk product photos; two paragraphs adapted from the current About copy: more than a decade working with organizers, one ecosystem of transponders, veterinary tools, and real-time reporting.
3. **Mission & vision** — two large cut-corner cards with the published mission and vision.
4. **Team** — three cards with initials (no invented photos): Jaber Al-Nuaimi, Founder & CEO; Ehab Ali, Software Engineering Specialist; Ruzha Nedkova, Operations Manager.
5. **“How we work”** — three principles framed as capability restatements, not market claims: endurance-specific engineering; one connected stack; race-day-ready hardware.
6. **CTA band** — “Talk to the team” → `/contact/`.

### 5. Contact & Download

1. **Page hero** — eyebrow “Get In Touch”; H1 “Let's talk about your next event.”; lead “Reach out for inquiries or feedback — we usually respond within one business day.”
2. **Contact + demo request** — two columns.
   - Left: Jaber Al-Nuaimi (Founder & CEO), email, phone, website, working hours (Sun–Thu 9:00–21:00; Fri 14:00–21:00; Sat 10:00–15:00).
   - Right: “Request a demo” card with a checklist (race date and venue, expected entries, loops/gates, timing/HR/GPS needs) and a primary `mailto:alnaimij@alramk.com?subject=Al-Ramk%20demo%20request` button. Small note: “This link opens your email app. No data is sent from this site.”
3. **Get the app** — two store badges linking to the verified Play/App Store listings; three lines on what the app shows (races, live tracking, results).
4. **Working hours / location** — Qatar; no street address is published, so none is invented. No map embed.
5. **CTA band** or a compact closing line.

## Visual System

### Color tokens

| Token | Value | Use |
|---|---|---|
| `--cream-50` | `#FAF8F8` | page background |
| `--cream-100` | `#F3EDE4` | alternating sections, image mattes |
| `--cream-200` | `#EDE4D7` | hover fills, inset panels |
| `--espresso-900` | `#241E19` | dark bands, footer, primary buttons |
| `--espresso-700` | `#4A3F35` | headings, body on cream |
| `--ink-600` | `#5E5751` | secondary body (AA on cream) |
| `--gold-500` | `#C79C65` | decorative accents, icons, borders on dark |
| `--gold-700` | `#8A6A34` | gold text on cream (AA) |
| `--line` | `#D1D0CE` | hairlines and card borders |
| `--status-green` | `#3F6B4F` | finished badges |
| `--status-red` | `#9A443C` | eliminated badges |
| `--status-blue` | `#3E6472` | ready/on-loop badges |
| `--status-sand` | `#B08A3E` | hold/attention badges |

Rules: gold-500 is never used for body text on cream; gold-700 is the text-safe gold. All body copy is espresso-700 or ink-600. On espresso, use cream-50 and gold-500. No gradients except a subtle photographic overlay.

### Typography

- Display: **Cinzel** variable (400–700), all caps, tracking `0.02em`, line-height `1.08`.
- Body/UI: **DM Sans** variable (400–700), line-height `1.65`.
- Self-hosted via `@fontsource-variable/cinzel` and `@fontsource-variable/dm-sans`; no Google Fonts request at runtime.
- Scale:
  - Display/H1: `clamp(2.6rem, 5.4vw, 4.5rem)`.
  - H2: `clamp(2rem, 3.6vw, 3.15rem)`.
  - H3: `clamp(1.25rem, 1.8vw, 1.6rem)`.
  - Eyebrow: `0.75rem`, 600, uppercase, `0.22em`.
  - Body: `1rem/1.65`; lead `1.125rem/1.6`; small `0.875rem`.
  - Data/table: DM Sans 500 with `font-variant-numeric: tabular-nums`.

### Layout

- Container `1200px`; gutters `20px` mobile, `32px` tablet, `40px` desktop.
- 12-column grid; hero 6/6; feature grids 3/2/1; split sections 6/6.
- Section padding `clamp(4rem, 8vw, 7rem)`; hairline separators between light sections.
- Radii: `0` for cards, buttons, inputs. Cut corners via `clip-path` on a background pseudo-element (content stays unclipped so focus rings are visible). Circles only for the hero disc, avatars/initials, and orbit lines.
- Borders: 1px `--line`; active/hover gold 1px–2px.
- Shadows: none on cards; one soft shadow only on the hero photo frame and phone frames.
- Dark bands use an original topographic SVG pattern at 4–5% opacity, not a Horsera image.

### Components and states

- **Button**: uppercase DM Sans 600, 12px, `0.12em`; 52px min height; espresso fill/cream text; small cream triangular notch at bottom-left; hover gold-500 with espresso text; secondary transparent with gold border and gold-700 text; focus ring 2px gold-700 offset 3px. Disabled/hidden not needed.
- **Section heading**: horse-head line icon + gold-700 eyebrow, Cinzel title, optional lead. Left or centered.
- **Feature card**: cut-corner cream card; 36px gold line icon; Cinzel 20px title; 15px copy; gold “Explore” arrow link; hover border gold + 4px lift.
- **Step card**: oversized `01` in Cinzel gold-700 at 25% opacity; title; copy; top hairline connecting steps on desktop.
- **App screen**: phone frame (espresso 8px border, 28px radius, subtle shadow), screenshot, caption. No fake device chrome.
- **App badge**: black/espresso rectangle, Apple/Play mark, two-line label, cut corner; `aria-label` on the link.
- **FAQ**: native `<details>` with a hairline row, Cinzel question, gold plus/minus via CSS, smooth height not required.
- **Mobile menu**: native `<details>`; full-width panel; large Cinzel links; CTA; no JS.
- **Status badges**: text + color; never color alone. Finished, On Loop, Ready To Go, Eliminated.
- **Topographic band**: original SVG curves; `aria-hidden`.

### Responsive rules

- **390px**: single column; utility bar hidden; header 64px; display 2.6–3rem; hero copy before image; image 100% wide; feature cards 1-up; step cards 1-up; app screens horizontal-scroll snap strip (CSS only) or 1-up; footer stacked; 44px min touch targets.
- **768px**: 2-column feature/step grids; hero still stacked or 5/7; display ~3.2rem; nav hidden behind details menu.
- **1440px**: 1200px container; hero 6/6 with 520×650 photo; features 3-up; app band 3 phones; footer 4 columns.

### Accessibility

- Skip link to `#main`; one H1 per page; logical H2/H3 order; landmarks (`header`, `nav`, `main`, `footer`).
- Visible `:focus-visible` ring on all interactive elements; never remove outlines.
- Color contrast: AA for all text; gold-700 on cream, gold-500 only on espresso/large decorative.
- Native `<details>` keyboard support; no custom ARIA widgets.
- `prefers-reduced-motion: reduce` disables hover lifts and transitions.
- Alt text describes the horse/race/product context; decorative orbit/texture `aria-hidden`.
- Phone screenshots have descriptive alt text naming the screen, not repeating all data.
- Store links announce “opens in a new tab” via visible text or `aria-label`.

## Content Guardrails

### Confirmed and usable

| Claim | Source |
|---|---|
| Al-Ramk provides horse race management hardware and software for endurance racing | alramk.com |
| Ubidium timing device; Active Transponder 3D at speeds up to 120 km/h | alramk.com |
| Certified/programmable heart-rate monitors adhering to international standards | alramk.com (company claim) |
| GPS tracking for horse positioning and speed | alramk.com |
| Real-time printing with speed, recovery, heart rate, and veterinary checks | alramk.com |
| Mobile app: upcoming races, live tracking (positions, times, progress), finished results (rankings, timings, performance summaries) | Play/App Store listings |
| App screens: Races, Final standings, Summary, Results, Entries | Play listing screenshots |
| Team: Jaber Al-Nuaimi (Founder & CEO), Ehab Ali (Software Engineering Specialist), Ruzha Nedkova (Operations Manager) | alramk.com |
| Email `alnaimij@alramk.com`; phone `+974 7062 9029`; working hours | alramk.com |
| “More than a decade” of work in endurance racing | alramk.com About copy (company claim) |

### Do not publish without client confirmation

- “5+ years of operation” — contradicts “more than a decade”. Drop the stat from the UI; keep only the About “decade” copy, and flag it for review.
- “German Technology” for Ubidium — currently a site claim; use “Ubidium timing hardware” instead unless confirmed.
- Any FEI certification/compliance claim — not verified for Al-Ramk.
- Customer names/logos, race counts, download counts, ratings, awards, testimonials, response-time guarantees beyond the published “one business day”.
- Street address, social media accounts, VAT/CR numbers, pricing.
- “Trusted by organizers across the region” as a hard proof point; soften to capability copy.
- Race-count claims are not independently sourced. Include “50+ races managed” only as user-provided copy; flag it as unverified in the source ledger.
- Names/faces of riders, owners, or horses from app screenshots beyond what the published screenshots already show.

### Copy rules

- Lead with the endurance workflow (loops, vet gates, holds, gates), not generic SaaS language.
- Use “race management”, “timing”, “gate”, “loop”, “recovery”, “hold time” consistently.
- Avoid “AI”, “cloud”, “seamless”, “revolutionary”, “world-class”, “best-in-class”.
- Every number must be published or derived transparently. Only 120 km/h is a numeric metric.
- FAQ answers must be traceable to a source line; otherwise omit the question.

## Assets

| Destination | Source | Use |
|---|---|---|
| `src/assets/images/hero-endurance.jpg` | `aspnet-site/wwwroot/images/home-bg.jpg` | Home hero; About crop |
| `src/assets/images/ubidium-timer.jpg` | `aspnet-site/wwwroot/images/Ubidium.jpg` | Feature card/section |
| `src/assets/images/active-transponder.jpg` | `aspnet-site/wwwroot/images/Transponder.jpg` | Feature section; crop to the red device with `object-position: left` |
| `src/assets/images/heart-rate-monitoring.jpg` | `aspnet-site/wwwroot/images/HeartMonitors.jpg` | Vet/heart-rate section |
| `src/assets/images/gps-tracking.jpg` | `aspnet-site/wwwroot/images/gps-horse.jpg` | GPS section; Home “Why Al-Ramk” |
| `src/assets/app/races.png` | Play listing screenshot 1 (`=w1000`) | App showcase |
| `src/assets/app/final-standings.png` | Play listing screenshot 2 | App showcase |
| `src/assets/app/summary.png` | Play listing screenshot 3 | App showcase |
| `src/assets/app/results.png` | Play listing screenshot 4 | Features gallery |
| `src/assets/app/entries.png` | Play listing screenshot 5 | Features gallery |
| `public/brand/al-ramk-icon.png` | Play listing app icon (`=w512`) | Header mark, favicon source |
| `public/favicon-32.png`, `favicon-180.png`, `favicon-512.png` | Derived from app icon | Favicons / Apple touch icon |
| `public/og/al-ramk-og.jpg` | `hero-endurance.jpg` + wordmark/overlay, 1200×630 | Open Graph/Twitter |
| `public/textures/topo.svg` | Original inline SVG | Dark band texture |

- Do **not** ship `Printing.JPG` (contains real rider/race data), camping images, `bg-3.jpg`, or the Yamamah logo.
- Do not ship Horsera photography, logo, or code. Use the reference only for visual direction and attribute Al-Ramk asset provenance in documentation.
- Product photos on white use `mix-blend-mode: multiply` on cream cards so the white disappears.
- All raster images use Astro `<Image>` from `src/assets` with explicit dimensions, responsive `widths`, `sizes`, WebP output, and alt text. Hero image is `loading="eager"` and `fetchpriority="high"`; the rest lazy.
- Source URLs and access dates go in `docs/research/alramk/sources.md`.

## Files to Modify

| Path | Purpose |
|---|---|
| `package.json` | Add `@fontsource-variable/cinzel`, `@fontsource-variable/dm-sans`, `@astrojs/check`, `typescript`; add `check` script |
| `astro.config.mjs` | Set `site: 'https://alramk.com'`; keep static output |
| `src/pages/index.astro` | Replace starter with Home |
| `src/pages/features.astro` | New Features page |
| `src/pages/how-it-works.astro` | New How It Works page |
| `src/pages/about.astro` | New About page |
| `src/pages/contact.astro` | New Contact & Download page |
| `src/pages/sitemap.xml.ts` | Build-time sitemap for the five routes |
| `public/robots.txt` | Allow all; point to sitemap |
| `src/styles/global.css` | Tokens, reset, type, layout, shared utilities |
| `src/layouts/BaseLayout.astro` | Head/SEO/JSON-LD, header, footer, skip link |
| `src/components/Header.astro` | Utility bar, nav, CTA, mobile `<details>` menu |
| `src/components/Footer.astro` | Four-column footer, app badges |
| `src/components/Button.astro` | Primary/secondary link button |
| `src/components/SectionHeading.astro` | Eyebrow/title/lead pattern |
| `src/components/Icon.astro` | Original inline SVG set (horse, timer, transponder, heart, GPS, printer, phone, loop, arrow) |
| `src/components/FeatureCard.astro` | Home capability card |
| `src/components/StepCard.astro` | Numbered process card |
| `src/components/AppScreen.astro` | Phone-framed screenshot + caption |
| `src/components/AppBadge.astro` | Apple/Google Play badge link |
| `src/components/PageHero.astro` | Inner-page hero |
| `src/components/CtaBand.astro` | Reused closing CTA |
| `src/components/Faq.astro` | Native details accordion |
| `src/data/site.ts` | Nav, features, steps, FAQs, contact, app links, roles |
| `src/assets/…` | Copied/optimized Al-Ramk imagery and app screenshots |
| `public/…` | Brand icon, favicons, OG image, texture, robots |
| `docs/research/alramk/sources.md` | Claim/source/status table, contradictions, open questions |
| `docs/design-references/horsera/README.md` | What was borrowed (layout cues only) and what was not |
| `docs/design-references/alramk/README.md` | Asset provenance and substitutions |
| `docs/design-references/alramk-redesign/` | Local 1440/768/390 captures per route after build |

**Not modified:** `aspnet-site/`, `dist/`, `AGENTS.md`, `.vscode/`, existing favicons until replaced, or any source outside this plan.

## Reuse

- Astro 7.4.2 static build and `<Image>`; `sharp` is already available (verified via `npm ls sharp`).
- Existing Al-Ramk images in `aspnet-site/wwwroot/images/` (copy, do not modify).
- Existing app screenshots and icon from the Play listing (download once, store locally).
- Native HTML `<details>` for mobile nav and FAQ; no component library.
- No existing Astro components/layouts/styles to reuse; the starter `index.astro` is replaced.
- No framework integration, Tailwind, GSAP, jQuery, icon package, or animation library.

## Steps

### Foundation

- [x] Add font and checker dependencies; add `"check": "astro check"`; set `site` in `astro.config.mjs`.
- [x] Create `src/styles/global.css` with tokens, reset, typography, container, section rhythm, focus styles, reduced-motion rules.
- [x] Build `BaseLayout`, `Header`, `Footer`, `Button`, `SectionHeading`, `Icon`, `PageHero`, `CtaBand`, `AppBadge`.
- [x] Create `src/data/site.ts` with verified nav/contact/app/feature/step/FAQ content.
- [x] Run `npm run check` and `npm run build` after the foundation slice.

### Home

- [x] Replace `src/pages/index.astro` with the eight Home sections.
- [x] Build the hero composition (espresso circle, gold orbit, cut-corner desert photo, stats).
- [x] Build role strip, capability grid, step teaser, dark app band, why split, FAQ, CTA.
- [x] Add responsive rules at 390/768/1440; verify no overflow.
- [x] Run `npm run check` and `npm run build`; capture Home at three widths.

### Features + How It Works

- [x] Build `/features/` with anchor nav, six alternating capability sections, app gallery, results band, FAQ, CTA.
- [x] Build `/how-it-works/` with six-step timeline, SVG loop diagram, roles band, app data flow, CTA.
- [x] Verify anchors, direct routes, and heading order.
- [x] Run `npm run check` and `npm run build`.

### About + Contact

- [x] Build `/about/` with story collage, mission/vision, team, principles, CTA.
- [x] Build `/contact/` with contact details, mailto demo card, app download, hours, no form.
- [x] Add `mailto:` subject/body encoding and a visible “opens your email app” note.
- [x] Run `npm run check` and `npm run build`.

### Assets, SEO, and polish

- [x] Copy and optimize Al-Ramk images; download the five app screenshots; crop/adjust as needed.
- [x] Generate favicons and the 1200×630 OG image from the brand icon/hero photo.
- [x] Add per-page titles, descriptions, canonicals, OG/Twitter tags, JSON-LD, `robots.txt`, `sitemap.xml.ts`.
- [x] Add the original topographic SVG texture and all inline icons.
- [x] Cross-page typography/spacing pass; check all CTAs and internal links.
- [x] Run `npm run check` and `npm run build`.

### QA and documentation

- [x] Preview on loopback with `npm run preview -- --host 127.0.0.1 --port 4321`.
- [x] Capture all five routes at 1440×900, 768×1024, 390×844 into `docs/design-references/alramk-redesign/`.
- [x] Run the verification matrix below; fix geometry, typography, crops, spacing in that order.
- [x] Write `docs/research/alramk/sources.md` and the two design-reference READMEs.
- [x] Confirm no `[TBC]`, lorem ipsum, placeholder links, or unverified claims remain.
- [x] Confirm `aspnet-site/` is untouched and no stray artifacts exist at the repo root.

## Verification

### Commands

```sh
npm run check
npm run build
npm run preview -- --host 127.0.0.1 --port 4321
```

Expected: `astro check` reports 0 errors; `dist/` contains `index.html`, `features/index.html`, `how-it-works/index.html`, `about/index.html`, `contact/index.html`, `sitemap.xml`; preview serves all routes.

### Browser matrix (agent_browser, loopback only)

For each of the five routes at 1440×900, 768×1024, and 390×844:

- [x] Direct load returns the correct title, H1, and canonical.
- [x] No console errors, page errors, or failed local asset requests.
- [x] No horizontal overflow: `document.documentElement.scrollWidth <= window.innerWidth`.
- [x] All images load (`naturalWidth > 0`), have alt text, and are not distorted.
- [x] Header is sticky; mobile `<details>` menu opens, links navigate, and the summary is keyboard-operable.
- [x] Every internal link resolves to a built route; no `href="#"` placeholders.
- [x] FAQ `<details>` opens/closes with mouse and keyboard; plus/minus state changes.
- [x] Focus ring is visible on nav, buttons, links, summary, and details at both light and dark surfaces.
- [x] Tab order follows visual order; skip link moves focus to `#main`.
- [x] `prefers-reduced-motion: reduce` disables lifts/transitions.
- [x] Text contrast passes AA for body, muted body, gold labels, badges, and footer links.
- [x] Store badges have correct `href`, `target`, `rel`, and accessible labels; do not click through in the audit.
- [x] Mailto CTA contains the encoded subject/body and a visible email fallback.
- [x] Page has exactly one H1; heading levels do not skip.
- [x] `agent_browser vitals` shows no major layout shift and a reasonable LCP on the hero.

### Content audit

- [x] Compare every numeric claim and product statement against `docs/research/alramk/sources.md`.
- [x] Confirm the “5+ years” stat is absent; the About “decade” line is flagged as client-provided.
- [x] Confirm “German Technology”, FEI certification, customers, ratings, testimonials, pricing, and any race count other than the user-provided “50+ races managed” are absent. Flag that count as client-provided and unverified.
- [x] Confirm app screen captions match the actual screens and do not invent live data.

### Visual comparison

- [x] Side-by-side Home at 1440 and 390 against the Horsera reference: confirm hierarchy, circle motif, utility bar, cut-corner cards, dark band, and typography rhythm; do not claim pixel-perfect fidelity.
- [x] Confirm the design reads as Al-Ramk, not as a Horsera clone: Al-Ramk imagery, copy, logo, and gold/navy heritage; no Horsera logo or photos.
- [x] Fix differences in this order: missing geometry/layers → typography/wrapping → image crop → spacing → motion (none).

## Risks and Open Questions

1. **Contact conversion** — no backend/form. The mailto CTA is honest and local-only, but less measurable. A real form requires an approved endpoint, spam handling, and privacy copy.
2. **Language** — English-only. Arabic/RTL is a likely next requirement for a Qatari brand; Cinzel has no Arabic coverage, so a bilingual build needs an Arabic display face and `dir="rtl"` layout work. Not in this phase.
3. **Hero image resolution** — `home-bg.jpg` is 977×699. Displayed at ~520×650 it is acceptable, but not 2× sharp on large screens. A higher-resolution Al-Ramk event photo would improve it.
4. **Content gaps** — no customer proof, independently sourced race counts, ratings, or testimonials. “50+ races managed” is user-provided and requires client verification; do not present it as independently verified.
5. **Company-claim inconsistency** — “5+ years” vs “more than a decade”. We drop the stat and keep the About line; client should confirm.
6. **Product claims** — “German Technology”, certifications, and FEI compliance need confirmation before publishing. The plan avoids them.
7. **Assets** — Al-Ramk product photos are small/white-background and one contains real race data. We use crops, blend modes, and skip the result sheet. App screenshots are published marketing assets.
8. **Events/live data** — the current site has an Events page and the app has live races; this static marketing site does not fetch or fake either. The app is the destination for live data.
9. **Zero-JS choice** — no carousels or animated counters. CSS reveal/route motion is reproduced where appropriate, with `prefers-reduced-motion` handling; no animation framework is loaded.
10. **Stray artifact** — an accidental `--full-page` screenshot artifact created during research was moved out of the repo; verify the root is clean before finishing.
