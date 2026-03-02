// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
  output: "server",
  site: "https://alexschmid.dev",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    allowedHosts: ["schmidalex.de", "alexschmid.dev"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
});
