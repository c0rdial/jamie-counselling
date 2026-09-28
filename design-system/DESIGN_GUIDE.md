# Jamie Sulek Design System

Design system for **Jamie Sulek**, a wellness coach based in **Victoria, British Columbia, Canada** (contact: jamiesulek008@gmail.com). The visual language is adapted from the Serenya wellness & coaching Framer template (by Florent @ Oversight): calm, light and airy, serif-led, with every page building toward one action — booking a consultation.

**Visual source:** https://serenya.framer.website/ (Home, About, Services, Contact) plus user-supplied screenshots. No codebase, Figma or brand files were provided. Colors, type and component styling are eyedropped approximations, not extracted CSS. Page copy is the template's placeholder copy with names, email and location switched to Jamie Sulek.

**Products represented:** one — the marketing website (Home, About, Services / Service detail, Blog / Blog detail, Contact).

## Index
- `styles.css` — entry point (imports only) → `tokens/` (fonts, colors, typography, spacing, effects, base)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/core` — Button, IconButton, Icon, Tag, Em, ImagePlaceholder, ScrollSpinImage
- `components/navigation` — Nav, Footer
- `components/content` — SectionHeading, FeatureCard, Stat, TestimonialCard, FAQItem, CTABanner, ServiceCard, OfferingRow, Timeline, TimelineItem
- `components/forms` — Input (text + textarea)
- `ui_kits/website/` — click-through Home / About / Services / Contact
- `assets/ds-loader.js` — dev loader that compiles the component .jsx files in-browser for cards and the UI kit when the generated bundle isn't present
- `SKILL.md` — Agent Skill manifest

### Intentional additions
- **ImagePlaceholder** — per brief, all imagery is placeholder blocks.
- **Em** — italic serif accent helper for mixed-style headlines.
- **Icon** — Lucide subset standing in for the site's own SVG icons.
- **ScrollSpinImage / Timeline** — packaged versions of the About page's scroll animations.
- **Tag** — duration chips ("90 Minutes") on service cards.

---

## CONTENT FUNDAMENTALS
- **Voice:** warm, gentle, reassuring; first person singular from the coach ("I believe that true wellness starts from within", "Get in touch with me", "Book A Meeting With Me"), sometimes "we/our space" for the practice. Addresses the reader as **you**.
- **Vocabulary:** calm, clarity, balance, presence, stillness, healing, journey, grounded, somatic, breathwork, burnout, intention. Nature and inner-life metaphors ("Inner Compass", "Pathways to clarity and balance").
- **Casing:** Headlines and CTAs in Title Case ("Embrace Your Journey to Inner Peace", "Book Free Consultation", "Explore Services"). A few headings are sentence case with a period for a softer, personal note ("Contact me.", "Pathways to clarity and balance.", tagline "Peace of mind.").
- **Structure:** headline + one-sentence supporting line, then a single CTA. Service copy uses **Bold label:** description list items.
- **Reassurance over hype:** FAQs answer plainly ("Not at all. Sessions are designed for complete beginners…"). No exclamation marks, no urgency tactics.
- **Numbers:** round, soft stats (45K, 60%, 100M) and plain prices ("$450.00").
- **Emoji:** none on the site. Don't use them.
- **Testimonials:** first-person, emotional, name + short role ("David K., Artist").

## VISUAL FOUNDATIONS
- **Colors:** warm cream page (`--cream-50` #F8F5EA) with slightly lighter cream cards (`--cream-25`). Deep **forest green** (`--forest-900` #1B3129) for primary buttons, stat cards, the About timeline panel and the footer. **Lime** (`--lime-400` #D4E86A) is the single highlight — used only on forest (stat units, timeline progress/dots). Text is a warm near-black (`--ink-900`) with a warm grey for body copy. No gradients.
- **Type:** *Lora* for all headings at weight 400 — offering titles upright (~34px), section titles often fully *italic* (~52px), hero headlines mix roman + italic. *Inter* for nav, body (16–18px, muted) and buttons. Stat figures are Inter **Light** at ~130px with a Lora lime unit.
- **Spacing:** airy. ~120px between sections, ~110px row gap in the offerings grid, 40px inner padding on dark cards. 1240px container; FAQ and timeline sit in narrower (~1050–1150px) columns.
- **Backgrounds:** flat cream. A thin hand-drawn sand curve (`--line-decor`) sweeps across the About page behind the circular portrait. Dark forest panels with 24–40px radii create contrast bands. Photography carries the atmosphere (portrait crops, a marquee, a full-bleed CTA landscape) — all placeholders here.
- **Imagery vibe:** warm natural sunlight, golden hour, people with eyes closed / at rest, soft contrast.
- **Corner radii:** 8px FAQ cards, 12px inputs, 20–24px stat cards, 28px image blocks, 40px timeline panel & CTA, pills for buttons.
- **Cards:** FAQ = cream-25 fill + hairline border + 8px radius, no shadow. Stat = solid forest, no border. Offering blocks have no card chrome at all.
- **Buttons:** pill with label + circular arrow badge inset on the right (cream circle on forest; forest circle on glass/light).
- **Borders:** hairlines at 9–16% warm ink; FAQ border darkens on hover/open.
- **Shadows:** essentially none.
- **Transparency & blur:** sticky nav (82% cream + blur); glass button on forest (14% cream fill, 30% cream border).
- **Hover:** buttons lighten slightly and the arrow nudges right; nav links go from grey to ink; FAQ border darkens; offering rows slide and turn italic.
- **Press:** scale 0.98.
- **Motion:** slow ease-out. **Scroll-linked:** the ringed portrait rotates with scroll (`ScrollSpinImage`), and the "How I Got Here" rail fills with a lime line that lights each dot as it's reached (`Timeline`). Accordions reveal over 600ms; a slow continuous image marquee on Home.
- **Layout rules:** sticky header; left column sticks while the timeline scrolls; every page closes with the same CTA panel and a forest footer.

## ICONOGRAPHY
- The site uses thin line icons: six large offering glyphs (lotus, open-armed figure, split heart, butterfly, hand-with-heart, infinity), circle-plus FAQ toggles, and arrows in buttons and the carousel. No icon font, no emoji.
- **Substitution (flagged):** this system uses a small **Lucide** subset (1.5px stroke, round caps) embedded in `components/core/Icon.jsx`: arrow-left, arrow-right, arrow-up-right, plus, minus, circle-plus, circle-minus, check, mail, map-pin, clock, menu, plus offering glyphs flower (≈ lotus), person-standing, heart, sprout (≈ butterfly — Lucide has none), hand-heart, infinity. Keep icons thin, monochrome, and inside 36–52px circular outlines where they act as buttons.

## Brand mark
No logo file was supplied, so the system renders the **"Jamie Sulek" wordmark only (Inter 500)**. Supply an SVG to add a mark; do not draw one.

## Fonts
Loaded from Google Fonts in `tokens/fonts.css`: **Lora** (serif) and **Inter** (sans), matched from screenshots. Replace with the site's actual files if they differ.
