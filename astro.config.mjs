// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://jkaps9.github.io/", //TODO: update me!
  base: "/tech-conference-site",
  fonts: [
{
      provider: fontProviders.fontsource(),
      name: "Chakra Petch",
      cssVariable: "--font-chakra-petch",
      weights: [600, 700],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: [400, 500, 800],
    },
  ],
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
});
