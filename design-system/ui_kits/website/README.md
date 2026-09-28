# Jamie Sulek website UI kit

Click-through Jamie Sulek website, adapted from https://serenya.framer.website — Home, About, Services, Contact. Nav, footer and every in-page CTA are wired. All photography is ImagePlaceholder blocks (aspect ratios match the source images). "Blog" is not recreated and routes to Home.

- `index.html` — app shell (Nav → page → CTABanner → Footer), remembers last page.
- `HomePage.jsx`, `AboutPage.jsx`, `ServicesPage.jsx`, `ContactPage.jsx` — screens, composed from `components/`.
- `Section.jsx` — container/padding wrapper. `data.js` — verbatim site copy.

Motion on About: the ringed portrait (ScrollSpinImage) rotates with scroll along a decorative curve, and the "How I Got Here" Timeline fills its lime progress line as you scroll.
