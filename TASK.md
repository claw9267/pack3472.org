# Pack 3472 Website — Phase 1 Build

## What You're Building
A static website for Cub Scout Pack 3472 (Leawood, KS) that matches the existing Wix site. Source: https://cubmaster3472.wixsite.com/bsa_pack_3472

## Tech Stack
- **Astro** (static-first framework)
- **Tailwind CSS v4** for styling
- **TypeScript**
- Content as **Markdown/MDX** files (Phase 2 CMS-ready)

## Pages (7 pages — 6 in nav, 1 unlisted)

### 1. Home (`/`)
Header: "PACK 3472 | Leawood, KS"

**Welcome!**
We are glad you have found your way to the Pack 3472 website! Our pack welcomes both boys and girls in grades K-5! We are a very active, outdoor focused pack! Our Cub Scouts attend Prairie Star, Sunrise Point, Overland Trail, Barstow, AMI, and multiple other schools so all are welcome!!

If you and your son/daughter would like to learn more about Cub Scouting, we'd love to have you visit one of our monthly Pack meetings where we gather all of the kids together for fun activities!

**WHEN:** 6:30-7:45p on the second Tuesday of every month

**CHARTERING ORGANIZATION:**
PSE PTO
Prairie Star Elementary School
(West side cafeteria and YMCA entrance)
3800 W 143rd St.
Leawood, KS 66224

NOTE: Do NOT include the Covid paragraph from the original. Do include an "Upcoming Events" section (placeholder for now — in Phase 2 this will pull from a calendar).

### 2. About (`/about`)
**Our Pack**
Pack 3472 is chartered by Prairie Star Elementary School in Leawood, KS. We hold one Pack meeting and one Den meeting a month with other activities including camping, hiking, community service projects and family outings on weekends. Our Pack is made up of a diverse group of boys and girls that come with a wide variety of interests including sports, music, robotics, computers, reading and various outdoors activities. We plan camping activities that allow the entire family to come join in the fun and expect kids to arrive late or leave early to accommodate their other many activities and commitments. We encourage kids to be well-rounded! And siblings are always welcome!

For those of you new to Scouting, a Cub Scout group is known as a Pack that includes boys and girls from K through 5th grade. The Pack is divided into smaller groups called Dens. Dens meet on their own once a month to work on specific age appropriate skills and activities. Your son or daughter will be in the same Den as they advance in rank through Cub Scouts. Ranks coincide with grade levels and scouts advance rank in the spring of each year at our Blue & Gold Banquet.

**Ranks:**
- Kindergarten = Lions
- 1st Grade = Tiger Cubs
- 2nd Grade = Wolves
- 3rd Grade = Bears
- 4th Grade = Webelo I
- 5th Grade = Webelo II

**Our Leaders** section with Youth Protection Training info.

**Pack Leadership 2024-2025:**
- Cubmaster — Heidi LaVoi-Wieme
- Assistant Cubmaster — OPEN
- Committee Chair — John Chipko
- Treasurer — Scott Wiedemann
- Charter Org Rep — Scott Susman
- Camping Coordinators — Open
- Awards Chairman — Open
- Secretary — Sarah Chipko

**Den Leadership 2024-2025:**
- Lion Den Leader — Steve Older
- Tiger Den Leader — Alex Fetters
- Wolf Den Leaders — Heath Hall
- Bear Den Leader — Jerry LaVoi
- Webelos I Den Leader — Alex Fetters
- Arrow of Light Leader — John Chipko

NOTE: Store leadership data in a markdown/data file so it's easily editable in Phase 2.

### 3. FAQ (`/faq`)
Intro: "Below is a list of commonly asked questions. If your question isn't covered here, feel free to send us an email through the Contact tab at the top."

**Q: How does my son or daughter join Cub Scouts?**
Joining is easy. Just bring your child to one of our Pack or Den meetings and one of our leaders will introduce them to the group and help them meet new friends. You will be given a short form to fill out and pay the annual Pack dues. You can also email the Cubmaster at cubmaster@pack3472.org.

**Q: What do I need to buy for my son or daughter to get started?**
The Scout Store is located at 10210 Holmes Road, Kansas City, MO inside the Boy Scouts' Heart of America Council building. Your scout will need:
1. Blue uniform shirt (buy BIG — last until Boy Scouts in 5th grade)
2. Scarf & slide for rank:
   - Lions (K) = Blue Tee + Yellow Neckerchief
   - Tiger (1st) = Orange Neckerchief
   - Wolf (2nd) = Red Neckerchief
   - Bear (3rd) = Blue Neckerchief
   - Webelo I & II (4th/5th) = Plaid Neckerchief
3. Patches: Heart of America Council, Pack 3472, World Crest
4. Belt (for belt loops)
5. Handbook for their rank

**Q: What's a Pack and what's a den?**
In Cub Scouts, the large group of boys and girls from K-5th grade is called a Pack. We are Pack 3472. The Pack is broken down into smaller groups by age (rank) called Dens.

### 4. Pinewood Derby Info (`/pinewood-derby-info`)
We couldn't scrape this page (JS-rendered). Create a placeholder page with:
- Title: "Pinewood Derby Info"
- Brief history of the Pinewood Derby (since 1953, BSA tradition)
- Standard rules section (official BSA kit, weight/dimension limits)
- "Check back for race day details!" placeholder
- NOTE: Content will be filled in by pack leaders in Phase 2

### 5. Contact (`/contact`)
- Contact form (name, email, message — can be static with mailto or Formspree/similar)
- "To contact us, please fill out the form and one of our leaders will get back with you!"
- "Alternatively you can send an email to cubmaster@pack3472.org"

### 6. Restaurant Night (`/restaurant-night`)
Placeholder page:
- "Stay tuned for our next Restaurant Night event!"
- Brief description: fundraiser events at local restaurants
- NOTE: Will be populated by leaders in Phase 2

### 7. Photos (`/photos`) — NOT in nav
Photo gallery page (placeholder for now):
- Grid layout ready for photos
- "Check back for photos from our Pack activities!"
- NOTE: In Phase 2, photos will come from Google Drive/R2/etc.

## Design System
| Token | Value | Usage |
|-------|-------|-------|
| Primary | #003F87 | Navy — headers, nav, accents |
| Secondary | #FFC72C | Gold — buttons, highlights, CTAs |
| Background | #ffffff | Page bg |
| Foreground | #1e293b | Body text |

- Header on every page: "PACK 3472 | Leawood, KS"
- Sticky top nav with all 6 nav items (Photos not in nav)
- Footer: © 2025 BSA Cub Scout Pack 3472. All rights reserved.
- Mobile-responsive (mobile-first)
- Family-friendly, outdoorsy, trustworthy feel (BSA brand)
- No social media links (none on current site)

## Build Requirements
- `npm run build` produces static output in `dist/`
- Content in `src/content/` as markdown with frontmatter where possible
- Leadership data in a separate data file (JSON/YAML) for easy CMS editing
- Cloudflare Pages compatible
- Include GitHub Actions CI workflow
- README with setup/build/deploy docs

## What NOT to Do
- Don't include the Covid paragraph
- Don't use copyright 2019 — use 2025
- Don't include leader email addresses on the public site (use cubmaster@pack3472.org only)
- Don't add a CMS yet (Phase 2)
- Don't add authentication

Commit your work with clear messages. Work on a `feat/phase-1` branch.
