# Jamie Barbon Counselling

A small Astro website for Jamie Barbon Counselling. The public site has Home, About, and Contact pages and uses the design tokens in `design-system/`.

## Local development

```sh
npm install
npm run dev
```

Run `npm run check` and `npm run build` before deploying. The site deploys to Vercel.

The contact email is set in `src/lib/contact.ts`. Replace it when Jamie's Hushmail account is ready. Update the `site` URL in `astro.config.mjs` when the chosen domain is connected.
