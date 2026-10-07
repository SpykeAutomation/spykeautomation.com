import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://spykeautomation.com',
  // The integrators page belonged to an earlier version of the site; links to
  // it land on the home page rather than a 404.
  redirects: {
    '/integrators': '/',
  },
  vite: {
    build: {
      // Script files named only by hash, so none carries a word ("analytics")
      // a privacy list could match. Not chunkFileNames: that reaches into
      // Astro's server build too.
      rollupOptions: { output: { entryFileNames: '_astro/[hash].js' } },
      // The PostHog bundle (scripts/site.ts) is about 650 KB before gzip.
      chunkSizeWarningLimit: 800,
    },
  },
});
