import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://piazaniboni.github.io/binit",
  base: process.env.NODE_ENV === 'production' ? '/binit/' : '/', //base: command === 'build' ? '/binit/' : '/',
  outDir: 'dist',
});