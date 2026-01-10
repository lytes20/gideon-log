import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    }),
    react(),
    tailwindcss(),
  ],
});
