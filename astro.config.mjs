// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático institucional del CADD.
// Publicado en GitHub Pages como proyecto: julianberardinelli.github.io/cadd-web
// https://astro.build/config
export default defineConfig({
  site: 'https://julianberardinelli.github.io',
  base: '/cadd-web',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
});
