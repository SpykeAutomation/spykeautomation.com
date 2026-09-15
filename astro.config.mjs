import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://spykeautomation.com',
  // The integrators page belonged to an earlier version of the site; links to
  // it land on the home page rather than a 404.
  redirects: {
    '/integrators': '/',
  },
});
