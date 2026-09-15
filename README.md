# spykeautomation.com

Marketing site for Spyke — quoting software for control panel shops. The app
itself is at [app.spykeautomation.com](https://app.spykeautomation.com).

Built with [Astro](https://astro.build). A push to `main` builds the site and
publishes it to GitHub Pages (`.github/workflows/deploy.yml`).

## Develop

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Structure

```
public/            static assets (favicon, share card, the hero picture, CNAME)
src/
  config.ts        the PAUSED switch, the app's address, the contact email
  layouts/         page shell (head, fonts, the icon sprite)
  components/      Nav, Hero, Trust, HowItWorks, Pricing, Quotes, Values,
                   Closing, Footer, Brand, Icon/Icons, ComingSoon
  pages/           routes (index, privacy, terms)
  styles/          global.css (design tokens + all component styles)
```

The hero picture, `public/home-shot.png`, is a 2x screenshot of the app's
home page with sample data, 1280 by 1020. The other product illustrations
(the drawing-to-BOM flow, the pricing table, the quote) are plain HTML and
inline SVG with the same sample job. The page has no JavaScript of its own:
the hero's glow, its colour cycle and the picture growing on scroll are CSS
animations, and browsers without scroll-linked animation show them still.
Demo requests and sales questions open an email to the address in
`src/config.ts`.

Setting `PAUSED` to `true` in `src/config.ts` replaces every page with the
coming-soon screen.
