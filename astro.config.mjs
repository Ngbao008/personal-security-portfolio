import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { site } from "./src/data/site.ts";
import { githubPagesBase } from "./src/utils/github-pages.ts";

export default defineConfig({
  site: site.url,
  base: githubPagesBase || "/",
  output: "static",
  integrations: [sitemap()],
  // The development toolbar is not needed for this static portfolio.
  devToolbar: { enabled: false },
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: "portfolio:disable-unused-toolbar-deps",
        enforce: "post",
        config(config) {
          // Astro registers these only for its optional development toolbar.
          // Removing them avoids a Windows sandbox path-resolution issue.
          config.optimizeDeps ??= {};
          config.optimizeDeps.include = [];
        },
      },
    ],
  },
});

