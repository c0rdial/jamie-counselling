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
