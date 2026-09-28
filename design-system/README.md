# Handoff: Jamie Sulek — Website Design System

## Overview
Complete design system for **Jamie Sulek**, a wellness coach in **Victoria, British Columbia, Canada** (jamiesulek008@gmail.com). Use it to rebuild the existing website: tokens, fonts, 20 components, and a four-page reference site (Home, About, Services, Contact).

## About the Design Files
Everything here is a **design reference built in HTML/React** that shows the intended look and behavior. It is not production code to paste in. **Recreate these designs in the target codebase's existing stack** (Next.js, Astro, Vue, WordPress theme, etc.) using its conventions. If there is no stack yet, Next.js or Astro with Tailwind is a good fit for a marketing site like this.

The token files (`tokens/*.css`, `tokens.json`, `tailwind.preset.js`) **are** production-ready; drop them in directly.

## Fidelity
**High-fidelity.** Colors, type, spacing, radii and interactions are final. Recreate them pixel-accurately. All photography is placeholder: every `ImagePlaceholder` marks where a real photo goes, with its aspect ratio.

## How to use with Claude Code / Codex
1. Put this folder in your repo (e.g. `/design-system`).
2. Prompt: *"Read design-system/README.md and design-system/DESIGN_GUIDE.md. Rebuild my site using these tokens and components. Match ui_kits/website exactly. Keep my existing real content and images where they exist."*
3. Claude Code can also load `SKILL.md` as an Agent Skill.
4. Open `ui_kits/website/index.html` in a browser (via a local server, e.g. `npx serve`) to see the reference site.

## Design Tokens
Source of truth: `tokens/*.css` (CSS custom properties), mirrored in `tokens.json` and `tailwind.preset.js`.

**Colors**
- Page `#F8F5EA` (cream-50) · subtle band `#F1ECDC` (cream-100) · card `#FCFAF3` (cream-25)
- Sand: 200 `#E6DFCC` (image placeholders) · 300 `#D3CAB4` (rings) · 400 `#C4BDAC` (decorative curve)
- Forest: 900 `#1B3129` (primary buttons, stat cards, timeline panel, footer) · 800 `#243B32` (hover) · 700 `#3E534B` (inactive dots, eyebrows)
- Lime 400 `#D4E86A`: **only on forest backgrounds** (stat units, timeline progress)
- Text: ink-900 `#2B2A22` · ink-700 `#45443B` · ink-500 `#66655C` (body/muted) · on dark `#F8F5EA` / `#B9C2BB`
- Borders: `rgba(43,42,34,.09)` hairline · `rgba(43,42,34,.16)` stronger · `rgba(248,245,234,.16)` on dark

**Typography** (Google Fonts: Lora 400/500 + italic, Inter 300–600)
- Display 88/0.98 · H1 64/1.02 · H2 52/1.05 · H3 36/1.1 · H4 26/1.2: **Lora 400**, letter-spacing -0.01em
- Section titles are usually **Lora italic** (e.g. "Questions? We're Here to Help."). Hero headlines mix roman and italic: *Embrace* Your Journey to *Inner Peace*
- Offering titles: Lora 34/1.15
- Body: Inter 400, 18/1.6 (lead) and 16/1.6, color ink-500
- Nav links: Inter 17. Buttons: Inter 400, 14–16
- Stat figures: **Inter 300**, ~132px, -0.04em, with a Lora 46px lime unit
- Eyebrows: Inter 500, 12px, uppercase, 0.14em

**Spacing:** 4px base (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120). Sections 120px apart (80px for tight bands). Container 1240px, gutter 24px, FAQ column ~1150px, timeline panel ~1056px.

**Radii:** 8 (FAQ cards) · 12 (inputs) · 20 (stat cards, feature hover) · 28 (images, testimonial) · 40 (timeline panel, CTA banner, hero media) · pill (buttons, tags).

**Shadows:** almost none. `0 4px 24px rgba(30,35,28,.06)` only as a hover lift.

**Motion:** ease `cubic-bezier(0.22,1,0.36,1)`. 150ms press · 280ms hover · 600ms accordion · 900ms reveals. No bounce.

## Components (`components/`)
Each has `.jsx` (reference implementation), `.d.ts` (props) and `.prompt.md` (usage).
- **Button**: pill with label + inset circular arrow badge. Heights sm 44 / md 52 / lg 64; circle 36 / 44 / 54; left padding 18 / 24 / 28. Variants: `primary` (forest fill, cream circle, forest arrow), `glass` (on forest: 14% cream fill, 30% cream border, forest circle), `light` (cream fill, forest circle, for photos), `secondary` (outline), `link`. Hover: slightly lighter fill and the arrow moves 3px right. Press: scale .98.
- **IconButton**: 52px circle, outline or filled (carousel arrows).
- **Icon**: Lucide line icons, 1.5 stroke (1.25 for the 60px offering icons).
- **Tag**: pill chip, 13px (durations like "90 Minutes").
- **Em**: italic Lora accent inside headlines.
- **ImagePlaceholder**: tinted block marking a photo slot. Replace with `<img>` using the same aspect ratio and radius.
- **ScrollSpinImage**: circular photo (~292px) in a 1px sand ring with 5% padding. Rotates **0.12° per px scrolled**.
- **Nav**: sticky header, 82% cream + 14px backdrop blur, wordmark left (Inter 500 22px), text links right (ink-500 → ink-900 on hover/active).
- **Footer**: forest background, 28px top radius, wordmark + italic tagline "Peace of mind.", link columns.
- **SectionHeading**: Lora title (italic by default) + muted lead paragraph. Centered or left.
- **FeatureCard**: centered: 60px icon, Lora 34 title, Inter 18 muted text. No card chrome. Used in a 3-column grid with ~110px row gap.
- **Stat**: forest card, 20px radius, 40px padding, min-height ~460. Label top (Inter 20, cream); Inter Light figure + lime Lora unit bottom.
- **FAQItem**: cream-25 card, 1px hairline, 8px radius, 20px padding, Inter 16 question, circle-plus / circle-minus 22px icon. Height animates open over 600ms. 12px gap between items.
- **TestimonialCard**: quote in Lora 25, avatar circle, name + role.
- **CTABanner**: 40px-radius full-bleed photo panel, centered Lora 64 headline, light button.
- **ServiceCard**: 4:5 image left; duration tag, Lora 44 title, price, "Includes" / "Who is it for" check lists, CTA.
- **OfferingRow**: large Lora 36 row link with arrow circle. On hover it slides 8px and turns italic.
- **Timeline / TimelineItem**: scroll-linked (see below).
- **Input**: label (Inter 600 14) + field (12px radius, 15/18 padding). Focus: forest border + soft ring.

## Screens (`ui_kits/website/`)
- **Home**: hero (headline + CTA, tall portrait) → 6 offerings (3×2, icons: lotus, figure, heart, butterfly, hand-heart, infinity) → 3 stat cards (45K Clients Guided, 60% Success Rate, 100M Minutes) → "Your Safe Space" two-column with hours → "Your Journey, Your Moments" + infinite image marquee (60s linear) → testimonials carousel (2 per view, prev/next) → FAQ (5 cards + "Still have questions?" row with "Get in touch with me" button) → CTA → footer.
- **About**: "Hi, I'm Jamie, your wellness coach" hero + video slot → "My Approach to Healing" → decorative sand curve with the spinning portrait → forest panel "How I Got Here" (sticky left text + glass button, scroll timeline right) → "Expertise & Offerings" rows.
- **Services**: "Pathways to clarity and balance." → 6 ServiceCards.
- **Contact**: "Contact me." + Email (jamiesulek008@gmail.com) and Location (Victoria, British Columbia, Canada) rows → form card (Your Name, Your Email, Subject, Message, "Book Free Consultation") with a thank-you state.

## Interactions & Behavior
- **Timeline scroll progress:** a 1px rail (12% cream on forest). A lime line grows from the top: `progress = clamp((viewportH × 0.6 − railTop) / (railHeight − itemH/2), 0, 1)`. Each dot (11px) turns lime with a 4px 18% lime glow once `progress ≥ index / count`. Items are ~198px tall.
- **Spinning portrait:** `rotate((viewportH − elementTop) × 0.12deg)`, updated on scroll.
- **Accordion:** one item open at a time. `grid-template-rows 0fr → 1fr` over 600ms.
- **Carousel:** step by 1 card. Prev/next are disabled at the ends.
- **Marquee:** duplicate the track and translate -50% over 60s, linear, infinite.
- **Nav:** sticky. The active page link is ink-900.
- **Responsive:** grids use `repeat(auto-fit, minmax(min(100%, 320px), 1fr))` and collapse to one column. Headline sizes should scale down on mobile (e.g. clamp display 48 → 88).
- Respect `prefers-reduced-motion`: disable spin, marquee and scroll progress animation.

## State
Page routing; FAQ open index; carousel index; contact form submitted flag. No data fetching. Wire the contact form to your email provider or form service, sending to jamiesulek008@gmail.com.

## Assets
- No logo file exists. Render "Jamie Sulek" as the wordmark (Inter 500).
- Icons: Lucide (`lucide-react` / `lucide`): flower-2, person-standing, heart, sprout (butterfly stand-in), hand-heart, infinity, circle-plus, circle-minus, arrow-right, arrow-left, arrow-up-right, check, mail, map-pin, clock.
- Photos: all placeholders. Use warm, golden-hour, calm imagery at the aspect ratios noted in the kit.

## Files
- `styles.css` → `tokens/` (fonts, colors, typography, spacing, effects, base): link this one file.
- `tokens.json`, `tailwind.preset.js`: the same tokens for JS/Tailwind setups.
- `components/**`: reference components + prop types + usage notes.
- `ui_kits/website/`: full reference site (`index.html`, page JSX, `data.js` copy).
- `guidelines/`: visual specimen cards.
- `DESIGN_GUIDE.md`: brand voice, visual foundations, iconography.
- `SKILL.md`: Agent Skill entry point.
- `assets/ds-loader.js`: dev-only helper so the HTML references run without a build step. Not needed in production.
