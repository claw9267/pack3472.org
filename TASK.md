# Pack 3472 Website — Phase 1 Build

## What You're Building
A static website for Cub Scout Pack 3472 (Leawood, KS). It must match the existing Wix site's design and compile to a static bundle deployable to Cloudflare Pages.

## Tech Stack
- **Astro** (static-first framework)
- **Tailwind CSS v4** for styling
- **TypeScript**
- Content as **Markdown/MDX** files (Phase 2 CMS-ready)

## Pages (5 pages, flat nav)

### 1. Home (`/`)
- Hero with Pack 3472 branding (navy #003F87 + gold #FFC72C)
- "What is Cub Scouting?" — K-5th grade (5-10), three pillars: Character Development, Citizenship Training, Personal Fitness
- "Join Our Pack" CTA → /contact
- "Upcoming Events" section → links to /pinewood-derby-info
- Welcome text: "Pack 3472 is part of the Boy Scouts of America, dedicated to developing young people's character, citizenship, and mental and physical fitness."

### 2. About (`/about`)
- **Our Mission** — BSA mission: ethical/moral choices, Scout values
- **The Cub Scout Promise** — "I promise to do my best, to do my duty to God and my country, to help other people, and to obey the Law of the Pack."
- **The Law of the Pack** — "The Cub Scout follows Akela. The Cub Scout helps the pack go. The pack helps the Cub Scout grow. The Cub Scout gives goodwill."
- **Pack Leadership** — Cubmaster, Committee Chair, Den Leaders (placeholder names)
- **Meeting Information** — Pack monthly, dens weekly/bi-weekly. Contact for times/locations.

### 3. FAQ (`/faq`)
- Accordion/expandable Q&A
- **General:** What is Cub Scouts, Who can join (boys & girls K-5th), Cost (BSA fees + uniforms + activities, financial assistance available), Meeting schedule
- **Program:** Ranks by grade (Lion K, Tiger 1st, Wolf 2nd, Bear 3rd, Webelos 4th, Arrow of Light 5th), Activities (camping, service, STEM, derby, field trips), Parent involvement required
- **Getting Started:** How to register (attend meeting or BSA website), What to buy (shirt, neckerchief, slide, handbook; used available), Try before joining (1-2 meetings)

### 4. Pinewood Derby (`/pinewood-derby-info`)
- History (since 1953, official BSA kit)
- **Rules:** Official kit only, max 5.0 oz, max 2¾" wide, max 7" long, wheels/axles from kit (polish OK, no mods), no propellants/loose materials
- Kit distribution info
- Race day tips: start early, design first, use all 5 oz, polish axles, align wheels
- Awards: Speed (by rank division), Design (most creative, best paint, etc)

### 5. Contact (`/contact`)
- Email: cubmaster@pack3472.org
- Location: Prairie Star Elementary School, Leawood, KS
- Joining steps: Eligibility (K-5th) → Attend meeting → Register (financial aid available)
- Volunteer roles: Den Leader, Assistant Den Leader, Committee Member, Event Helper, Merit Badge Counselor

## Design System
| Token | Value | Usage |
|-------|-------|-------|
| Primary | #003F87 | Navy — headers, nav, accents |
| Secondary | #FFC72C | Gold — buttons, highlights, CTAs |
| Background | #ffffff | Page bg |
| Foreground | #1e293b | Body text |

- Sticky top nav with Pack 3472 logo/text
- Hero sections on each page
- Single-column content
- Footer with contact + BSA attribution
- Mobile-responsive (mobile-first)
- Family-friendly, outdoorsy, trustworthy feel (BSA brand)

## Build Requirements
- `npm run build` produces static output in `dist/`
- Lighthouse > 90 all categories
- Content in `src/content/` as markdown with frontmatter
- Cloudflare Pages compatible (no server functions needed)
- Include GitHub Actions CI workflow

## What NOT to Do
- Don't add a CMS yet (Phase 2)
- Don't add authentication
- Don't use SSR/server functions
- Don't add a blog (not on the Wix site)

Commit your work with clear messages. Work on a `feat/phase-1` branch.
