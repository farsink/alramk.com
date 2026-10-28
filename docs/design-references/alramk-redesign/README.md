# Local redesign QA captures

Screenshots are from the built static preview at `http://127.0.0.1:4321/` (not the dev server), captured at the listed CSS viewport sizes.

| Route | 1440 × 900 | 768 × 1024 | 390 × 844 |
|---|---|---|---|
| Home | `home-1440x900.png` | `home-768x1024.png` | `home-390x844.png` |
| Features | `features-1440x900.png` | `features-768x1024.png` | `features-390x844.png` |
| How It Works | `how-it-works-1440x900.png` | `how-it-works-768x1024.png` | `how-it-works-390x844.png` |
| About | `about-1440x900.png` | `about-768x1024.png` | `about-390x844.png` |
| Contact | `contact-1440x900.png` | `contact-768x1024.png` | `contact-390x844.png` |

## Verification summary

- `npm run check`: 0 errors, warnings, or hints.
- `npm run build`: five HTML routes plus `sitemap.xml` generated.
- Each route was opened directly in the static preview; network, console, and page-error QA presets passed.
- At each of the three widths, each route has one H1, no horizontal overflow, no missing image alt attributes, and no loaded-image failures.
- Internal links, route files, feature fragments, sitemap/metadata, and JSON-LD were checked from the build output. No placeholder links or executable client scripts are present; JSON-LD is the only `<script>` element.
- Axe WCAG 2.1 A/AA scan: zero violations on all five routes. Contrast checks on complex gradients/background imagery are marked incomplete by axe; token-pair checks for body text, gold labels, dark-band text, and footer text exceed 4.5:1, including gold over the topographic-line compositing estimate.
- Mobile menu and FAQ `<details>` controls were keyboard-tested with Space; focus styling is visible. Reduced-motion preference is implemented in CSS.

The “50+ races managed” figure is user-provided and remains unverified; see `docs/research/alramk/sources.md`.
