# Jamie Counselling Website — Scaffold Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scaffold a fully working Astro 5 + Sanity + Tailwind v4 project with all pages, components, schemas, and Sanity Studio — ready for content entry.

**Architecture:** Astro 5 with Vercel adapter (ISR), embedded Sanity Studio at `/studio`, React island only for contact form (Formspree). All content editable via Sanity CMS. Tailwind v4 via Vite plugin.

**Tech Stack:** Astro 5, Sanity v5, Tailwind CSS v4, React 19, Formspree, Vercel, TypeScript

**Reference project:** `/Users/adamwan/Desktop/ethos-imagery` — reuse patterns from this working Astro+Sanity site.

---

### Task 1: Initialize Astro project and install dependencies

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/env.d.ts`
- Create: `.gitignore`
- Create: `.env.example`

**Step 1: Create package.json**

```json
{
  "name": "jamie-counselling",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/react": "^4.4.2",
    "@astrojs/sitemap": "^3.7.0",
    "@astrojs/vercel": "^9.0.4",
    "@formspree/react": "^3.0.0",
    "@sanity/astro": "^3.2.11",
    "@sanity/client": "^7.15.0",
    "@sanity/image-url": "^2.0.3",
    "@tailwindcss/vite": "^4.2.0",
    "astro": "^5.17.1",
    "astro-portabletext": "^0.13.0",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "sanity": "^5.11.0",
    "styled-components": "^6.3.11",
    "tailwindcss": "^4.2.0",
    "tslib": "^2.8.1"
  },
  "devDependencies": {
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3"
  }
}
```

**Step 2: Create astro.config.mjs**

```js
// @ts-check
import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.jamiecounselling.ca", // placeholder
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
      dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
      useCdn: false,
      apiVersion: "2026-03-05",
      studioBasePath: "/studio",
    }),
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
```

**Step 3: Create tsconfig.json**

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

**Step 4: Create src/env.d.ts**

```ts
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
```

**Step 5: Create .gitignore**

```
node_modules/
dist/
.astro/
.env
.vercel/
```

**Step 6: Create .env.example**

```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_FORMSPREE_ID=your_formspree_id
```

**Step 7: Install dependencies**

Run: `npm install`
Expected: Clean install, no errors

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: initialize Astro project with dependencies"
```

---

### Task 2: Sanity config and schemas

**Files:**
- Create: `sanity.config.ts`
- Create: `src/sanity/schemas/index.ts`
- Create: `src/sanity/schemas/siteSettings.ts`
- Create: `src/sanity/schemas/service.ts`
- Create: `src/sanity/schemas/resource.ts`
- Create: `src/sanity/schemas/page.ts`

**Step 1: Create sanity.config.ts**

```ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
```

**Step 2: Create src/sanity/schemas/siteSettings.ts**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // General
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "description", title: "Site Description", type: "text", rows: 3 }),
    defineField({ name: "ogImage", title: "Default OG Image", type: "image" }),

    // Contact info
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "contactPhone", title: "Contact Phone", type: "string" }),
    defineField({ name: "location", title: "Location / Area Served", type: "string" }),

    // Homepage hero
    defineField({ name: "heroHeading", title: "Hero Heading", type: "string" }),
    defineField({ name: "heroTagline", title: "Hero Tagline", type: "string" }),
    defineField({ name: "heroCta", title: "Hero CTA Text", type: "string" }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
    }),

    // Homepage intro
    defineField({ name: "introHeading", title: "Intro Section Heading", type: "string" }),
    defineField({ name: "introText", title: "Intro Section Text", type: "text", rows: 4 }),

    // Homepage about preview
    defineField({ name: "aboutSnippet", title: "About Preview Text", type: "text", rows: 4 }),
    defineField({
      name: "aboutImage",
      title: "About Preview Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
    }),

    // CTA section
    defineField({ name: "ctaHeading", title: "CTA Section Heading", type: "string" }),
    defineField({ name: "ctaText", title: "CTA Section Text", type: "string" }),

    // Navigation
    defineField({
      name: "navItems",
      title: "Navigation Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "href", type: "string", title: "URL Path" }),
          ],
        },
      ],
    }),

    // Social links
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "platform", type: "string", title: "Platform" }),
            defineField({ name: "url", type: "url", title: "URL" }),
          ],
        },
      ],
    }),

    // Footer
    defineField({ name: "footerText", title: "Footer Text", type: "text", rows: 3 }),
  ],
});
```

**Step 3: Create src/sanity/schemas/service.ts**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "e.g., Anxiety, Grief & Loss, Relationships",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "Shown on service cards",
    }),
    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
```

**Step 4: Create src/sanity/schemas/resource.ts**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({ name: "url", title: "External URL", type: "url" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Crisis Lines", value: "crisis" },
          { title: "Recommended Reading", value: "reading" },
          { title: "FAQ", value: "faq" },
        ],
      },
    }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
```

**Step 5: Create src/sanity/schemas/page.ts**

```ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt Text" }),
          ],
        },
      ],
    }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 2 }),
  ],
});
```

**Step 6: Create src/sanity/schemas/index.ts**

```ts
import siteSettings from "./siteSettings";
import service from "./service";
import resource from "./resource";
import page from "./page";

export const schemaTypes = [siteSettings, service, resource, page];
```

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: add Sanity config and content schemas"
```

---

### Task 3: Sanity client lib and styles

**Files:**
- Create: `src/lib/sanity.ts`
- Create: `src/styles/global.css`
- Create: `public/favicon.svg`

**Step 1: Create src/lib/sanity.ts**

```ts
import { sanityClient } from "sanity:client";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const client = sanityClient;

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function srcSet(source: SanityImageSource, widths = [400, 800, 1200, 1600]) {
  return widths
    .map((w) => `${urlFor(source).width(w).auto("format").url()} ${w}w`)
    .join(", ");
}
```

**Step 2: Create src/styles/global.css**

Placeholder palette — will be finalized at kickoff call with Jamie.

```css
@import "tailwindcss";

@theme {
  --font-heading: "Lora", serif;
  --font-body: "Inter", sans-serif;

  /* Warm off-white backgrounds */
  --color-bg: #FAF8F5;
  --color-surface: #F0EBE3;

  /* Text */
  --color-text-primary: #2B2B2B;
  --color-text-body: #4A4A4A;
  --color-text-muted: #7A7A7A;

  /* Sage green accent */
  --color-accent: #6B8F71;
  --color-accent-dark: #4A6B50;
  --color-accent-light: #8BAF91;

  /* Borders */
  --color-border: #E2DCD4;
  --color-border-dark: #C8C1B8;

  /* Functional */
  --color-error: #C45D4D;
  --color-success: #5C8A6B;
}

html {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text-primary);
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 400;
}
```

**Step 3: Create public/favicon.svg**

Simple placeholder leaf/circle favicon:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="14" fill="#6B8F71"/>
  <text x="16" y="21" text-anchor="middle" fill="white" font-size="16" font-family="serif">J</text>
</svg>
```

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Sanity client helpers, global styles, and favicon"
```

---

### Task 4: BaseLayout and shared components

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Navigation.astro`
- Create: `src/components/Footer.astro`
- Create: `src/components/SanityImage.astro`

**Step 1: Create src/components/SanityImage.astro**

```astro
---
import { urlFor, srcSet } from "../lib/sanity";
import type { SanityImageSource } from "@sanity/image-url";

interface Props {
  image: SanityImageSource;
  alt: string;
  sizes?: string;
  widths?: number[];
  class?: string;
  loading?: "lazy" | "eager";
}

const {
  image,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  widths = [400, 800, 1200, 1600],
  class: className = "",
  loading = "lazy",
} = Astro.props;

const src = urlFor(image).width(800).auto("format").url();
const srcset = srcSet(image, widths);
---

<img
  src={src}
  srcset={srcset}
  sizes={sizes}
  alt={alt}
  loading={loading}
  decoding="async"
  class={className}
/>
```

**Step 2: Create src/components/Navigation.astro**

Navigation reads from siteSettings. Falls back to hardcoded items if Sanity isn't connected yet.

```astro
---
import { client } from "../lib/sanity";

const settings = await client.fetch(`*[_type == "siteSettings"][0]{ navItems, title }`);
const navItems = settings?.navItems ?? [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];
const siteTitle = settings?.title ?? "Jamie Counselling";
const currentPath = Astro.url.pathname;
---

<header class="sticky top-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-border">
  <nav class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="font-heading text-xl text-text-primary">
      {siteTitle}
    </a>

    <!-- Desktop nav -->
    <ul class="hidden md:flex items-center gap-8">
      {navItems.map((item: { label: string; href: string }) => (
        <li>
          <a
            href={item.href}
            class:list={[
              "text-sm tracking-wide transition-colors duration-200",
              currentPath === item.href
                ? "text-accent-dark font-medium"
                : "text-text-muted hover:text-text-primary",
            ]}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>

    <!-- Mobile hamburger -->
    <button
      id="mobile-menu-btn"
      class="md:hidden text-text-primary"
      aria-label="Toggle menu"
      aria-expanded="false"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </nav>
</header>

<!-- Mobile menu -->
<div id="mobile-menu" class="hidden fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-8">
  <button id="mobile-menu-close" class="absolute top-4 right-6 text-text-primary">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  </button>
  {navItems.map((item: { label: string; href: string }) => (
    <a href={item.href} class="font-heading text-2xl text-text-primary">
      {item.label}
    </a>
  ))}
</div>

<script>
  function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const close = document.getElementById("mobile-menu-close");
    const menu = document.getElementById("mobile-menu");
    btn?.addEventListener("click", () => {
      menu?.classList.remove("hidden");
      menu?.classList.add("flex");
      btn.setAttribute("aria-expanded", "true");
    });
    close?.addEventListener("click", () => {
      menu?.classList.add("hidden");
      menu?.classList.remove("flex");
      btn?.setAttribute("aria-expanded", "false");
    });
  }
  initMobileMenu();
  document.addEventListener("astro:page-load", initMobileMenu);
</script>
```

**Step 3: Create src/components/Footer.astro**

```astro
---
import { client } from "../lib/sanity";

const settings = await client.fetch(
  `*[_type == "siteSettings"][0]{ contactEmail, contactPhone, location, socialLinks, footerText, title }`
);
const year = new Date().getFullYear();
const siteTitle = settings?.title ?? "Jamie Counselling";
---

<footer class="bg-surface border-t border-border">
  <div class="max-w-5xl mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Brand -->
      <div>
        <p class="font-heading text-xl text-text-primary mb-2">{siteTitle}</p>
        {settings?.location && (
          <p class="text-sm text-text-muted">{settings.location}</p>
        )}
      </div>

      <!-- Contact -->
      <div>
        <p class="text-sm font-medium text-text-primary mb-2">Contact</p>
        {settings?.contactEmail && (
          <a href={`mailto:${settings.contactEmail}`} class="block text-sm text-text-muted hover:text-accent transition-colors">
            {settings.contactEmail}
          </a>
        )}
        {settings?.contactPhone && (
          <a href={`tel:${settings.contactPhone}`} class="block text-sm text-text-muted hover:text-accent transition-colors mt-1">
            {settings.contactPhone}
          </a>
        )}
      </div>

      <!-- Navigation -->
      <div>
        <p class="text-sm font-medium text-text-primary mb-2">Quick Links</p>
        <nav class="flex flex-col gap-1">
          <a href="/about" class="text-sm text-text-muted hover:text-accent transition-colors">About</a>
          <a href="/services" class="text-sm text-text-muted hover:text-accent transition-colors">Services</a>
          <a href="/resources" class="text-sm text-text-muted hover:text-accent transition-colors">Resources</a>
          <a href="/contact" class="text-sm text-text-muted hover:text-accent transition-colors">Contact</a>
        </nav>
      </div>
    </div>

    {settings?.footerText && (
      <p class="text-xs text-text-muted leading-relaxed mt-8 max-w-xl">
        {settings.footerText}
      </p>
    )}

    <p class="text-xs text-text-muted mt-4">&copy; {year} {siteTitle}</p>
  </div>
</footer>
```

**Step 4: Create src/layouts/BaseLayout.astro**

```astro
---
import "../styles/global.css";
import Navigation from "../components/Navigation.astro";
import Footer from "../components/Footer.astro";

interface Props {
  title: string;
  description?: string;
  ogImage?: string;
}

const {
  title,
  description = "Counselling services in British Columbia",
  ogImage,
} = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Lora:wght@400;500;600&display=swap" rel="stylesheet" />
  </head>
  <body class="min-h-screen bg-bg text-text-primary font-body antialiased">
    <Navigation />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add BaseLayout, Navigation, Footer, and SanityImage components"
```

---

### Task 5: Contact form (React island)

**Files:**
- Create: `src/components/ContactForm.tsx`

**Step 1: Create src/components/ContactForm.tsx**

```tsx
import { useForm, ValidationError } from "@formspree/react";

interface Props {
  formId: string;
}

export default function ContactForm({ formId }: Props) {
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <p className="text-[--color-success] text-lg font-medium mb-2">
          Message sent!
        </p>
        <p className="text-[--color-text-body]">
          I'll be in touch within 24-48 hours.
        </p>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-white border border-[--color-border] text-[--color-text-primary] rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[--color-accent] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-[--color-text-muted] mb-2">
          Name
        </label>
        <input id="name" type="text" name="name" required className={inputClasses} />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-[--color-text-muted] mb-2">
          Email
        </label>
        <input id="email" type="email" name="email" required className={inputClasses} />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-[--color-text-muted] mb-2">
          Message
        </label>
        <textarea id="message" name="message" rows={5} required className={inputClasses} />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-[--color-accent] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[--color-accent-dark] transition-colors duration-200 disabled:opacity-50"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/ContactForm.tsx
git commit -m "feat: add ContactForm React island with Formspree"
```

---

### Task 6: All pages — Home, About, Services, Contact, Resources

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/about.astro`
- Create: `src/pages/services.astro`
- Create: `src/pages/contact.astro`
- Create: `src/pages/resources.astro`
- Create: `src/components/ServiceCard.astro`

**Step 1: Create src/components/ServiceCard.astro**

```astro
---
interface Props {
  service: {
    title: string;
    shortDescription?: string;
  };
}

const { service } = Astro.props;
---

<div class="p-6 bg-white rounded-lg border border-border hover:border-accent/30 transition-colors duration-200">
  <h3 class="font-heading text-xl text-text-primary mb-2">{service.title}</h3>
  {service.shortDescription && (
    <p class="text-sm text-text-body leading-relaxed">{service.shortDescription}</p>
  )}
</div>
```

**Step 2: Create src/pages/index.astro**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import SanityImage from "../components/SanityImage.astro";
import ServiceCard from "../components/ServiceCard.astro";
import { client } from "../lib/sanity";

const settings = await client.fetch(`*[_type == "siteSettings"][0]{
  title, description, heroHeading, heroTagline, heroCta, heroImage,
  introHeading, introText, aboutSnippet, aboutImage, ctaHeading, ctaText
}`);

const services = await client.fetch(
  `*[_type == "service"] | order(order asc) [0...3]{ title, shortDescription }`
);
---

<BaseLayout title={settings?.title ?? "Jamie Counselling"} description={settings?.description}>

  <!-- Hero -->
  <section class="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
    <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6">
      {settings?.heroHeading ?? "Welcome"}
    </h1>
    {settings?.heroTagline && (
      <p class="text-lg text-text-body max-w-2xl mx-auto mb-8">{settings.heroTagline}</p>
    )}
    <a
      href="/contact"
      class="inline-block bg-accent text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors duration-200"
    >
      {settings?.heroCta ?? "Book a Free Consultation"}
    </a>
    {settings?.heroImage && (
      <div class="mt-12">
        <SanityImage
          image={settings.heroImage}
          alt={settings.heroImage?.alt ?? ""}
          sizes="(max-width: 768px) 100vw, 80vw"
          class="w-full max-w-3xl mx-auto rounded-lg object-cover"
          loading="eager"
        />
      </div>
    )}
  </section>

  <!-- Intro -->
  {(settings?.introHeading || settings?.introText) && (
    <section class="bg-surface py-16">
      <div class="max-w-3xl mx-auto px-6 text-center">
        {settings.introHeading && (
          <h2 class="font-heading text-3xl text-text-primary mb-4">{settings.introHeading}</h2>
        )}
        {settings.introText && (
          <p class="text-text-body leading-relaxed">{settings.introText}</p>
        )}
      </div>
    </section>
  )}

  <!-- Services preview -->
  {services.length > 0 && (
    <section class="max-w-5xl mx-auto px-6 py-16">
      <h2 class="font-heading text-3xl text-text-primary text-center mb-10">Areas of Focus</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service: any) => (
          <ServiceCard service={service} />
        ))}
      </div>
      <div class="text-center mt-8">
        <a href="/services" class="text-sm text-accent hover:text-accent-dark transition-colors">
          View all services &rarr;
        </a>
      </div>
    </section>
  )}

  <!-- About preview -->
  {(settings?.aboutSnippet || settings?.aboutImage) && (
    <section class="bg-surface py-16">
      <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {settings.aboutImage && (
          <SanityImage
            image={settings.aboutImage}
            alt={settings.aboutImage?.alt ?? "About Jamie"}
            sizes="(max-width: 768px) 100vw, 50vw"
            class="w-full rounded-lg object-cover aspect-[4/5]"
          />
        )}
        <div>
          <h2 class="font-heading text-3xl text-text-primary mb-4">About Me</h2>
          {settings.aboutSnippet && (
            <p class="text-text-body leading-relaxed mb-6">{settings.aboutSnippet}</p>
          )}
          <a href="/about" class="text-sm text-accent hover:text-accent-dark transition-colors">
            Learn more &rarr;
          </a>
        </div>
      </div>
    </section>
  )}

  <!-- CTA -->
  {(settings?.ctaHeading || settings?.ctaText) && (
    <section class="max-w-3xl mx-auto px-6 py-20 text-center">
      {settings.ctaHeading && (
        <h2 class="font-heading text-3xl text-text-primary mb-4">{settings.ctaHeading}</h2>
      )}
      {settings.ctaText && (
        <p class="text-text-body mb-8">{settings.ctaText}</p>
      )}
      <a
        href="/contact"
        class="inline-block bg-accent text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-accent-dark transition-colors duration-200"
      >
        Get in Touch
      </a>
    </section>
  )}

</BaseLayout>
```

**Step 3: Create src/pages/about.astro**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { client } from "../lib/sanity";
import { PortableText } from "astro-portabletext";

const page = await client.fetch(
  `*[_type == "page" && slug.current == "about"][0]{ title, body, seoTitle, seoDescription }`
);
---

<BaseLayout
  title={page?.seoTitle ?? page?.title ?? "About"}
  description={page?.seoDescription}
>
  <section class="max-w-3xl mx-auto px-6 py-16">
    <h1 class="font-heading text-4xl text-text-primary mb-8">{page?.title ?? "About"}</h1>
    {page?.body ? (
      <div class="prose prose-neutral max-w-none text-text-body leading-relaxed">
        <PortableText value={page.body} />
      </div>
    ) : (
      <p class="text-text-muted">Content coming soon.</p>
    )}
  </section>
</BaseLayout>
```

**Step 4: Create src/pages/services.astro**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { client } from "../lib/sanity";
import { PortableText } from "astro-portabletext";

const services = await client.fetch(
  `*[_type == "service"] | order(order asc){ title, shortDescription, description, slug }`
);
---

<BaseLayout title="Services" description="Counselling services and areas of focus">
  <section class="max-w-3xl mx-auto px-6 py-16">
    <h1 class="font-heading text-4xl text-text-primary mb-10">Services</h1>

    {services.length > 0 ? (
      <div class="space-y-12">
        {services.map((service: any) => (
          <div class="pb-12 border-b border-border last:border-0">
            <h2 class="font-heading text-2xl text-text-primary mb-3">{service.title}</h2>
            {service.shortDescription && (
              <p class="text-text-body mb-4">{service.shortDescription}</p>
            )}
            {service.description && (
              <div class="text-text-body leading-relaxed">
                <PortableText value={service.description} />
              </div>
            )}
          </div>
        ))}
      </div>
    ) : (
      <p class="text-text-muted">Services information coming soon.</p>
    )}
  </section>
</BaseLayout>
```

**Step 5: Create src/pages/contact.astro**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import ContactForm from "../components/ContactForm.tsx";
import { client } from "../lib/sanity";

const settings = await client.fetch(
  `*[_type == "siteSettings"][0]{ contactEmail, contactPhone, location }`
);
const formId = import.meta.env.PUBLIC_FORMSPREE_ID ?? "placeholder";
---

<BaseLayout title="Contact" description="Get in touch to book a consultation">
  <section class="max-w-5xl mx-auto px-6 py-16">
    <h1 class="font-heading text-4xl text-text-primary mb-10">Contact</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <!-- Form -->
      <div>
        <ContactForm client:load formId={formId} />
      </div>

      <!-- Contact info -->
      <div class="space-y-6">
        <div>
          <h2 class="font-heading text-xl text-text-primary mb-2">Get in Touch</h2>
          <p class="text-text-body text-sm leading-relaxed">
            Reach out to book a free consultation or ask any questions about the counselling process.
          </p>
        </div>

        {settings?.contactEmail && (
          <div>
            <p class="text-sm text-text-muted mb-1">Email</p>
            <a href={`mailto:${settings.contactEmail}`} class="text-accent hover:text-accent-dark transition-colors">
              {settings.contactEmail}
            </a>
          </div>
        )}

        {settings?.contactPhone && (
          <div>
            <p class="text-sm text-text-muted mb-1">Phone</p>
            <a href={`tel:${settings.contactPhone}`} class="text-accent hover:text-accent-dark transition-colors">
              {settings.contactPhone}
            </a>
          </div>
        )}

        {settings?.location && (
          <div>
            <p class="text-sm text-text-muted mb-1">Location</p>
            <p class="text-text-body">{settings.location}</p>
          </div>
        )}
      </div>
    </div>
  </section>
</BaseLayout>
```

**Step 6: Create src/pages/resources.astro**

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { client } from "../lib/sanity";

const resources = await client.fetch(
  `*[_type == "resource"] | order(order asc){ title, description, url, category }`
);

const grouped = resources.reduce((acc: Record<string, any[]>, r: any) => {
  const cat = r.category ?? "other";
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(r);
  return acc;
}, {} as Record<string, any[]>);

const categoryLabels: Record<string, string> = {
  crisis: "Crisis Lines",
  reading: "Recommended Reading",
  faq: "Frequently Asked Questions",
};
---

<BaseLayout title="Resources" description="Mental health resources and crisis support">
  <section class="max-w-3xl mx-auto px-6 py-16">
    <h1 class="font-heading text-4xl text-text-primary mb-10">Resources</h1>

    {Object.keys(grouped).length > 0 ? (
      Object.entries(grouped).map(([category, items]) => (
        <div class="mb-12">
          <h2 class="font-heading text-2xl text-text-primary mb-6">
            {categoryLabels[category] ?? category}
          </h2>
          <div class="space-y-4">
            {(items as any[]).map((resource) => (
              <div class="p-4 bg-white rounded-lg border border-border">
                <h3 class="font-medium text-text-primary">
                  {resource.url ? (
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" class="hover:text-accent transition-colors">
                      {resource.title} &nearr;
                    </a>
                  ) : (
                    resource.title
                  )}
                </h3>
                {resource.description && (
                  <p class="text-sm text-text-body mt-1">{resource.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))
    ) : (
      <p class="text-text-muted">Resources coming soon.</p>
    )}
  </section>
</BaseLayout>
```

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: add all pages — Home, About, Services, Contact, Resources"
```

---

### Task 7: Verify build

**Step 1: Create .env with placeholder values**

```
PUBLIC_SANITY_PROJECT_ID=placeholder
PUBLIC_SANITY_DATASET=production
PUBLIC_FORMSPREE_ID=placeholder
```

**Step 2: Run build**

Run: `npm run build`
Expected: Build succeeds (pages may show placeholder content since Sanity isn't connected yet)

**Step 3: If build fails, fix issues and re-run**

**Step 4: Commit any fixes**

```bash
git add -A
git commit -m "fix: resolve build issues"
```

---

### Task 8: Final cleanup and README

**Files:**
- Create: `README.md`

**Step 1: Create README.md**

```markdown
# Jamie Counselling

Counselling practice website built with Astro 5, Sanity CMS, and Tailwind CSS.

## Setup

1. Clone and install: `npm install`
2. Copy `.env.example` to `.env` and fill in values
3. Run dev server: `npm run dev`
4. Access Sanity Studio at `/studio`

## Sanity Setup

1. Create a project at [sanity.io](https://www.sanity.io/)
2. Add the project ID to `.env`
3. Create a "Site Settings" document in Studio
4. Add services, resources, and an "About" page

## Deploy

Deployed via Vercel. Connect the repo and set environment variables.
```

**Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README with setup instructions"
```
