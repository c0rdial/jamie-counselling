# Jamie Counselling — UI Polish & High-Impact Components

## Context

The site scaffold is 80% polished with a strong design system (colors, typography, layout). The remaining 20% — broken CSS classes, missing components, inconsistent micro-interactions — creates a "vibe coded" impression. This plan addresses the highest-impact gaps using the Pareto principle.

## Changes

### 1. Bug Fixes — Missing CSS Classes

Define three CSS classes referenced across pages but never defined in `global.css`:

- `.divider-line` — thin warm horizontal rule (used on about, services, resources)
- `.botanical-dot` — small filled circle for custom list bullets (used on contact)
- `.card-hover` — subtle hover lift for non-primary cards (used on services, resources)

Normalize inline `transition-delay` styles to use `.reveal-stagger`.

### 2. Homepage Hero Enhancement

- Staggered text reveal: eyebrow, heading, body, CTAs fade up with 100ms delays
- Gentle floating animation on arch photo placeholder (6s ease-in-out translateY)
- Subtle pulse on decorative offset border

### 3. "How It Works" Section (new, homepage)

Three numbered steps between About Preview and CTA:

1. Reach Out — "Send a message or book a free consultation"
2. Get Matched — "We'll discuss your needs and create a plan"
3. Begin Healing — "Start your journey with regular sessions"

Horizontal layout, large serif numbers, connected by dotted line. Parchment palette with sage accents.

### 4. Testimonial Component (new, homepage)

Single featured quote between Intro and Services sections:

- Large Lora italic pull quote with oversized quotation mark in `text-accent/20`
- Attribution line, warm background wash
- Placeholder testimonial content

### 5. FAQ Accordion (resources page)

Replace inline FAQ display with accessible accordion:

- `<details>/<summary>` for native a11y, enhanced with JS for single-open
- Smooth height transition, chevron rotation
- Matches existing card styling

### 6. Social Link Icons (footer)

Replace first-letter circles with inline SVG icons (Instagram, LinkedIn, Facebook).

### 7. Micro-interaction Polish

- `scroll-behavior: smooth` with offset for sticky nav
- Subtle parallax on decorative circles
- Consistent hover states on all interactive elements

## Files Modified

- `src/styles/global.css` — new classes, animations, scroll behavior
- `src/pages/index.astro` — hero animation, how-it-works section, testimonial
- `src/pages/about.astro` — fix divider-line, normalize stagger
- `src/pages/services.astro` — fix divider-line and card-hover, normalize stagger
- `src/pages/resources.astro` — FAQ accordion, fix card-hover/divider-line
- `src/pages/contact.astro` — fix botanical-dot
- `src/components/Footer.astro` — social SVG icons
