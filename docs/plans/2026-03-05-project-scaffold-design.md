# Jamie Counselling Website - Project Design

**Date:** 2026-03-05
**Stack:** Astro 5 + Sanity + Tailwind v4 + Formspree + Vercel
**Reference project:** Ethos Imagery (same stack, proven patterns)

---

## Decisions

- **Deployment:** Vercel adapter with on-demand ISR (not static output). Content updates appear without manual rebuilds. Sanity Studio embedded at `/studio`.
- **CMS strategy:** Sanity-Heavy. All content lives in Sanity — pages, navigation, site settings, services, resources. Jamie gets full independence post-launch.
- **React islands:** Only `ContactForm.tsx` uses React (for Formspree). Everything else is zero-JS Astro components.
- **Design direction:** Warm, calm, professional. Muted earth tones, generous white space, clean sans-serif body + warm serif headings. Static imagery only — no animations, no carousels.

---

## Project Structure

```
jamie/
├── astro.config.mjs
├── sanity.config.ts
├── package.json
├── tsconfig.json
├── public/
│   ├── fonts/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── MobileMenu.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServiceCard.astro
│   │   ├── ResourceCard.astro
│   │   ├── ContactForm.tsx       # React island (Formspree)
│   │   ├── SanityImage.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── lib/
│   │   └── sanity.ts             # Sanity client + GROQ queries
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   └── resources.astro
│   ├── sanity/
│   │   └── schemas/
│   │       ├── index.ts
│   │       ├── siteSettings.ts
│   │       ├── service.ts
│   │       ├── resource.ts
│   │       └── page.ts
│   └── styles/
│       └── global.css
└── .env
```

---

## Sanity Schemas

### siteSettings (singleton)
- `title` (string) — site title
- `description` (text) — default meta description
- `ogImage` (image) — default OG image
- `contactEmail` (string)
- `contactPhone` (string)
- `location` (string) — city/area served
- `heroHeading` (string) — homepage hero headline
- `heroTagline` (string) — homepage hero subheading
- `heroCta` (string) — hero button text
- `heroImage` (image) — hero background/feature image
- `introHeading` (string) — homepage intro section
- `introText` (text) — homepage intro paragraph
- `aboutSnippet` (text) — short about preview for homepage
- `aboutImage` (image) — photo for homepage about preview
- `ctaHeading` (string) — bottom CTA section
- `ctaText` (string) — bottom CTA description
- `navItems` (array of objects: label, href) — navigation links
- `socialLinks` (array of objects: platform, url)
- `footerText` (string) — footer tagline or acknowledgement

### service
- `title` (string) — e.g., "Anxiety", "Grief & Loss"
- `slug` (slug)
- `shortDescription` (text) — for cards on homepage/services page
- `description` (array/portable text) — full rich text description
- `icon` (string) — optional icon identifier
- `order` (number) — display order

### resource
- `title` (string)
- `description` (text)
- `url` (url) — external link
- `category` (string) — e.g., "Crisis Lines", "Reading", "FAQ"
- `order` (number)

### page (generic, for About/Resources rich content)
- `title` (string)
- `slug` (slug)
- `body` (portable text with images)
- `seoTitle` (string)
- `seoDescription` (text)

---

## Pages

### Home (`index.astro`)
- Hero: heading + tagline + CTA button + static image (from siteSettings)
- Intro section: heading + paragraph (from siteSettings)
- Services preview: 3 ServiceCards in a grid (from services, limit 3)
- About preview: photo + short text + "Learn More" link (from siteSettings)
- CTA section: heading + text + contact button (from siteSettings)

### About (`about.astro`)
- Fetches page document with slug "about"
- Renders portable text body
- Professional headshot from page content

### Services (`services.astro`)
- Fetches all service documents, ordered by `order`
- Renders as cards or expandable sections
- Session format info (in-person, virtual, both)

### Contact (`contact.astro`)
- ContactForm.tsx (React island, Formspree)
- Contact info from siteSettings (email, phone, location)
- CTA to book consultation

### Resources (`resources.astro`)
- Fetches all resource documents, grouped by category
- Crisis lines, recommended reading, FAQ

---

## Color Palette (placeholder — finalized at kickoff)

Earthy, muted tones inspired by reference sites:
- Background: `#FAF8F5` (warm off-white)
- Surface: `#F0EBE3` (cream)
- Primary text: `#2B2B2B`
- Body text: `#4A4A4A`
- Muted text: `#7A7A7A`
- Accent: `#6B8F71` (soft sage green)
- Accent dark: `#4A6B50`
- Border: `#E2DCD4`

---

## Typography (placeholder — finalized at kickoff)

- Headings: Serif (e.g., Lora, Playfair Display, or similar warm serif)
- Body: Sans-serif (e.g., Inter, DM Sans, or similar clean sans)
- Both self-hosted as woff2 in `public/fonts/`

---

## Key Patterns from Ethos to Reuse

1. `astro.config.mjs` structure (Sanity + React + Sitemap + Vercel + Tailwind vite plugin)
2. `sanity.config.ts` with env vars and structureTool
3. `BaseLayout.astro` pattern (SEO meta, nav, footer, slot)
4. `SanityImage.astro` component for image URL building
5. Tailwind v4 `@theme` block in `global.css` for design tokens
6. `ContactForm.tsx` as React island with Formspree
7. Embedded Sanity Studio at `/studio`
