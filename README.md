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
public/            static assets (social cards, favicon, CNAME)
src/
  layouts/         page shell (head, fonts, scroll/animation observers)
  components/      Nav, Hero, Features, Review, CTA, Footer, Brand
  pages/           routes (index, privacy, terms)
  styles/          global.css (design tokens + all component styles)
```

The landing-page illustrations (ladder diffs, feature tiles, review demo) are
inline SVG authored in their finished state; scroll-triggered classes run the
animations, so the page renders complete without JavaScript.
