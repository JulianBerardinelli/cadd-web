// @ts-check
import { defineConfig } from 'astro/config';

// Sitio estático institucional del CADD.
// https://astro.build/config
export default defineConfig({
  site: 'https://julianberardinelli.github.io',
  // base: '/cadd-web', // descomentar si se sirve bajo un subpath (p. ej. GitHub Pages de proyecto)
  build: {
    inlineStylesheets: 'auto',
  },
});
