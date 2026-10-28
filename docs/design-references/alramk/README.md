# Al-Ramk asset provenance

## Product and race imagery

The site uses local company images already present in the ASP.NET copy. Those source files were copied into Astro assets; the original `aspnet-site/` files remain untouched.

| Astro asset | Source file | Use |
|---|---|---|
| `src/assets/images/hero-endurance.jpg` | `aspnet-site/wwwroot/images/home-bg.jpg` | Home, About, workflow, and race-day gallery |
| `src/assets/images/gps-tracking.jpg` | `aspnet-site/wwwroot/images/gps-horse.jpg` | GPS capability and product gallery |
| `src/assets/images/ubidium-timer.jpg` | `aspnet-site/wwwroot/images/Ubidium.jpg` | Ubidium capability and About collage |
| `src/assets/images/active-transponder.jpg` | `aspnet-site/wwwroot/images/Transponder.jpg` | Transponder capability and gallery |
| `src/assets/images/heart-rate-monitoring.jpg` | `aspnet-site/wwwroot/images/HeartMonitors.jpg` | Heart-rate capability and gallery |
| `src/assets/images/printing.jpg` | `aspnet-site/wwwroot/images/Printing.JPG` | Printed-report gallery item |

The product imagery is processed by Astro's image pipeline for responsive WebP output. App UI imagery is kept as supplied screenshots and described with captions/alt text in the source.

## Hero racing cutout

- `src/assets/images/hero-horses-pin.jpg` — horse-racing group image supplied by the client from Pinterest (source: `https://i.pinimg.com/1200x/4f/da/1e/4fda1e417b5dda1e433c3adc76d50efb.jpg`, originally a pngtree stock preview).
- `src/assets/images/hero-horses-cutout.png` — generated locally from the above with `node scripts/cutout.mjs` (edge flood-fill white removal, trimmed, 1px alpha feather).
- `src/assets/images/group-ride.jpg` — group-riding band image sourced from Pinterest by the client's request (source: `https://i.pinimg.com/1200x/57/57/65/575765455d198559bac217202bd750a5.jpg`), used in the home “connected race day” photo band.
- **Licensing note:** both Pinterest-sourced images are unlicensed stock/board previews. Purchased/licensed copies should replace them before any production deployment.

## Brand and decorative assets

- `public/brand/al-ramk-icon.png` — Al-Ramk app/brand icon.
- `src/assets/app/` — locally stored screenshots from the official [Google Play listing](https://play.google.com/store/apps/details?id=com.bytecraft.al_ramk).
- `public/favicon.svg` and `public/textures/topo.svg` — original, locally authored SVGs.
- `public/favicon-{32,180,512}.png`, `public/favicon.ico` — generated from the brand icon using local tooling.
- `public/og/al-ramk-og.jpg` — generated from the Al-Ramk hero image with an original text overlay.

No Horsera logo, code, photography, or template asset is included. Horsera is only a layout, type, color, and motion reference; details are in `../horsera/README.md`.
