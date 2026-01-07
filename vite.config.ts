import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypePrism from "rehype-prism-plus";

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      rehypePlugins: [rehypePrism],
    }),
    react(),
  ],
});
