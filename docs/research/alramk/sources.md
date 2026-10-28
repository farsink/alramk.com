# Al-Ramk content source ledger

This ledger separates published product information from the user-provided race-count claim. Product copy should stay within the evidence below; do not infer certification, compliance, customers, or performance guarantees.

| Claim/content | Source | Status / use |
|---|---|---|
| Company positioning and endurance-racing services | [Al-Ramk website](https://alramk.com/) | Company-published. Summarized without adding customer or certification claims. |
| Contact name, email, telephone, location, working hours | [Al-Ramk website](https://alramk.com/) | Company-published; listed in the contact and footer areas. |
| Ubidium timing hardware and Active Transponder 3D | [Al-Ramk website](https://alramk.com/) | Company-published product names. |
| GPS, heart-rate, recovery, reporting, and printing capabilities | [Al-Ramk website](https://alramk.com/) | Company-published capabilities; do not extend them to certification or rule-compliance claims. |
| Maximum tracked speed up to 120 km/h | [Al-Ramk website](https://alramk.com/) | Company-published product claim, repeated on the site. |
| App features and availability | [Google Play listing](https://play.google.com/store/apps/details?id=com.bytecraft.al_ramk), [Apple App Store listing](https://apps.apple.com/qa/app/al-ramk/id6739287783) | Store-published descriptions; use the listing to verify app links and current availability. |
| App screens (Races, Final standings, Summary, Results, Entries) | Official Al-Ramk app listing | Actual product screenshots; locally stored under `src/assets/app/`. Captions describe visible UI. |
| “50+ races managed” | User-provided instruction | **Unverified.** Included per user request, not independently sourced. Confirm with the company before public launch. |
| “A decade” / years in operation | Conflicting company copy cited during research | Omitted to avoid conflict. |
| “German Technology”, FEI certification/compliance, endorsements, customer logos, ratings, testimonials, prices | No approved evidence | Omitted. |

## Local image provenance

- `hero-endurance.jpg` is byte-identical to `aspnet-site/wwwroot/images/home-bg.jpg`.
- `gps-tracking.jpg` is byte-identical to `aspnet-site/wwwroot/images/gps-horse.jpg`.
- `ubidium-timer.jpg`, `active-transponder.jpg`, and `heart-rate-monitoring.jpg` are copied from the corresponding existing Al-Ramk product images in `aspnet-site/wwwroot/images/`.
- `printing.jpg` is copied from `aspnet-site/wwwroot/images/Printing.JPG`.
- The five `src/assets/app/*.png` files are product screenshots from the official Google Play listing.
- `public/brand/al-ramk-icon.png` is the Al-Ramk product icon. `public/favicon-*.png` and `public/favicon.ico` are locally generated sizes of this icon. `public/og/al-ramk-og.jpg` is generated from the Al-Ramk hero image and an original text overlay.
- `public/textures/topo.svg` and `public/favicon.svg` are original local SVGs.

The separate `aspnet-site/` tree is source-only input and was not modified.
