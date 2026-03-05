// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const env = loadEnv(import.meta.env.MODE ?? "", process.cwd(), "PUBLIC_");

export default defineConfig({
  site: "https://www.jamiecounselling.ca",
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET || "production",
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
