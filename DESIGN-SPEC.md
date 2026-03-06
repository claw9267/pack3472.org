# Pack 3472 — Design Specification (Match Wix Site Exactly)

Reference screenshots in `reference/` directory (home.png, about.png, faq.png, contact.png).

## CRITICAL: This must match the Wix site's visual design. The current site looks NOTHING like it.

## Global Design

### Background & Layout
- **Outer background:** Dark forest green `#2B3C2B` — may be a dark nature/foliage photo with overlay
- **Content area:** Centered column (~700-850px wide), cream/off-white `#F5F0E8` background
- **"Paper on green" effect** — cream content sits on dark green

### Color Palette
| Usage | Hex |
|-------|-----|
| Outer background | `#2B3C2B` (dark forest green) |
| Content background | `#F5F0E8` (cream/off-white) |
| Header text "PACK 3472" | `#D4952B` (golden amber) |
| Section headings | `#CC6600` (orange/rust) |
| Nav active state | `#D4952B` (amber) |
| Nav inactive | light cream with olive border |
| Body text | `#333333` |
| Links/names | `#CC6633` (orange) |
| FAQ questions | `#CC8833` (golden amber) |
| Leadership boxes bg | `#4A4F3E` (dark olive) |
| Leadership text | cream labels, orange names |
| Footer text | `#999999` (muted gray) |
| Events box border | `#5B8A8A` (teal) |

### Typography
- **"PACK 3472" header:** Decorative/rustic serif (use Google Font "Amatic SC" or "Yellowtail"), large (~48-60px), golden amber
- **"Leawood, KS":** Same decorative font, lighter gold, ~28-36px
- **Section headings:** Serif font (Georgia or similar), orange/rust, ~28-32px
- **Body text:** Sans-serif (Arial/Open Sans), ~12-14px, dark gray, line-height 1.4-1.5
- **FAQ questions:** ~16-18px, golden amber

### Header (all pages)
- Full-width hero banner image within content column (~700-850px wide, ~130-180px tall)
- Photo of nature/outdoors scene (use a placeholder nature image or solid dark green gradient)
- "PACK 3472" text overlay on right side in decorative serif, golden amber
- "Leawood, KS" below in lighter gold

### LEFT SIDEBAR NAVIGATION (NOT top nav!)
- **Position:** Fixed or sticky on left side of viewport
- **Width:** ~110px
- **Each item:** Rounded-rectangle pill/tab shape with rounded right corners
- **Height per item:** ~30-35px, ~5-8px gap
- **Active page:** Amber background `#D4952B`, dark/white text
- **Inactive:** Light cream bg, dark text, subtle olive border
- **Font:** Sans-serif, ~12-13px, centered, title case
- **Items:** Home, About, Pinewood Derby Info, FAQ, Contact, Restaurant Night

### Footer
- "© 2025 BSA Cub Scout Pack 3472. All rights reserved." (use 2025, not 2019)
- Right-aligned or center-right
- Muted gray `#999999`, sans-serif ~10-11px

## Page Layouts

### HOME — Two-column layout
**Left column (~50%):**
- "Welcome!" heading (serif, orange)
- Body text paragraphs
- WHEN section: "6:30-7:45p on the second Tuesday of every month"
- Chartering org info (PSE PTO, Prairie Star Elementary, address)
- "Want to join us?" dark gray CTA box with "CONTACT US" button
- "Upcoming Events" section with teal border box, event names in bold orange serif

**Right column (~50%):**
- "Pack 3472 In Action!" section with placeholder video/slideshow area
- Cub Scout rank images/badges row
- "Den Meetings" section with decorative heading + schedule list in orange text
- Pinewood Derby section with placeholder images

### ABOUT — Single column with right image
- "Our Pack" heading (serif, dark gray)
- Body text with rank list
- Right-side image (placeholder for pack flag photo)
- "Our Leaders" section with horizontal rule separator
- **Leadership info boxes:** Dark olive `#4A4F3E` background, rounded corners, orange headings/names, cream labels
- Casual outdoor photos alongside

### FAQ — Single column
- "Pack 3472 FAQ's" heading (serif, dark gray)
- Intro paragraph
- Each Q: golden amber serif/sans ~16-18px
- Each A: regular body text
- No visual separators, just whitespace between Q&A pairs

### CONTACT — Two-column
- Left: "Contact Us:" heading, "PACK 3472" in orange, body text, email link
- Right: Contact form (name, email, phone, message, Send button in olive `#6B7B5A`)

## IMPORTANT
- Remove ALL modern clean design (rounded cards, SVG icons, gradient backgrounds, Tailwind blue)
- This should look like a community volunteer website, NOT a tech startup
- Rustic, outdoorsy, scout-themed
- Match the screenshots in reference/ as closely as possible
