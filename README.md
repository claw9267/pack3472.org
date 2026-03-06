# Pack 3472 Website

Static website for BSA Cub Scout Pack 3472, Leawood, KS.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro 5 (static output) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Hosting | Cloudflare Pages |
| CI | GitHub Actions |

## Project Structure

```
pack3472.org/
├── public/             # Static assets (favicon, images)
├── src/
│   ├── content/        # Markdown content files (CMS-ready)
│   │   └── pages/      # Per-page markdown content
│   ├── data/
│   │   └── leadership.json   # Pack & Den leadership — edit here!
│   ├── layouts/
│   │   └── Layout.astro      # Shared layout (nav, header, footer)
│   ├── pages/          # One file per route
│   │   ├── index.astro             # / (Home)
│   │   ├── about.astro             # /about
│   │   ├── faq.astro               # /faq
│   │   ├── pinewood-derby-info.astro  # /pinewood-derby-info
│   │   ├── contact.astro           # /contact
│   │   ├── restaurant-night.astro  # /restaurant-night
│   │   └── photos.astro            # /photos (not in nav)
│   └── styles/
│       └── global.css    # Design tokens & base styles
├── .github/workflows/
│   └── ci.yml          # GitHub Actions build check
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages

| Route | Title | In Nav |
|---|---|---|
| `/` | Home | ✅ |
| `/about` | About | ✅ |
| `/faq` | FAQ | ✅ |
| `/pinewood-derby-info` | Pinewood Derby Info | ✅ |
| `/contact` | Contact | ✅ |
| `/restaurant-night` | Restaurant Night | ✅ |
| `/photos` | Photos | ❌ (unlisted) |

## Updating Content

### Leadership Data

Edit `src/data/leadership.json` to update Pack and Den leadership names/roles. The About page reads from this file automatically.

### Page Content

Most page content is directly in the `.astro` page files under `src/pages/`. For Phase 2, this will migrate to the Astro Content Collections in `src/content/`.

### Contact Form

The contact form posts to Formspree. Update the form `action` URL in `src/pages/contact.astro` with your actual Formspree endpoint after setting it up at [formspree.io](https://formspree.io).

## Design System

| Token | Value | Usage |
|---|---|---|
| Primary | `#003F87` | Navy — headers, nav, buttons |
| Secondary | `#FFC72C` | Gold — CTAs, highlights, accents |
| Background | `#ffffff` | Page background |
| Foreground | `#1e293b` | Body text |

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy

The site is fully static — no server-side runtime required.

## Phase Roadmap

- **Phase 1** (current) — Static rebuild with real content, Astro + Tailwind CSS v4
- **Phase 2** — CMS integration, calendar events, photo gallery from cloud storage
- **Phase 3** — Den-specific pages, member portal

## Contact

Pack Cubmaster: [cubmaster@pack3472.org](mailto:cubmaster@pack3472.org)
