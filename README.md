# spykeautomation.com

Marketing site for Spyke Automation — open-source version control for industrial automation.

Built with [Astro](https://astro.build).

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Structure

```
public/            static assets (diff-card images, favicon)
src/
  layouts/         page shell (head, fonts, global styles)
  components/      Nav, Hero, Roadmap, Footer, AccessModal, Brand, ChevronTexture
  pages/           routes (index.astro) + client scripts (tabs, modal)
  styles/          global.css (design tokens + all component styles)
```

The scattered chevron background texture is generated at build time by
`ChevronTexture.astro` from a seed (deterministic output).

## Early-access form

The "Request Early Access" modal posts to the endpoint in `PUBLIC_FORM_ENDPOINT`
(see `.env.example`). Without it, the modal runs in demo mode. Point it at a
form service such as Formspree to capture signups.
