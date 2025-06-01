import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://archivo-mujica.netlify.app",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
