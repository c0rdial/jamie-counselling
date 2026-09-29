// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://www.jamiecounselling.ca",
  adapter: vercel(),
  integrations: [sitemap()],
  redirects: {
    "/services": "/",
    "/resources": "/contact",
  },
});
