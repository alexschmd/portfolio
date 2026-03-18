// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "server",
  site: "https://alexschmid.dev",
  integrations: [sitemap()],
  adapter: node({
    mode: "standalone",
  }),
  redirects: {
    "/about": {
      status: 302,
      destination: "/tba",
    },
    "/contact": {
      status: 302,
      destination: "/tba",
    },
  },
  server: {
    allowedHosts: ["schmidalex.de", "alexschmid.dev"],
  },
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
  prefetch: true,
});
