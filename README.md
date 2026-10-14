# Blumen Bierbach — website concept

Responsive German website redesign with a browser-local inquiry basket and WhatsApp handoff. Public preview: https://badfix.github.io/blumen-bierbach/

## Local preview

Requires Node.js 22+. No dependencies or build installation required.

```sh
node server.cjs
```

Open http://127.0.0.1:4191. Generated pages are in `dist/`. To regenerate after changing page content: `node build-pages.cjs`.

## Interactive flower selection

The three-step flower finder selects an occasion, a colour direction and a freely chosen budget. Existing products are matched by style; the custom bouquet remains an option. Confirmed finder preferences transfer to catalog fields and the inquiry. They are kept in sessionStorage, while favourites and basket selections use localStorage. No recipient/contact data is persisted.

The catalog supports text search, combined style/favourite filters and accessible save buttons. The inquiry adds quick requested dates, live greeting-card text preview with text suggestions, and an optional pre-delivery photo request subject to personal agreement. A mobile summary bar keeps the basket accessible.

Entry animation runs once per tab session, with image fades, subtle basket feedback and a botanical line drawing. All movement respects reduced-motion settings. Reference observations and the original additions are documented in `INSPIRATION.md`.

## Catalog and settings

Edit `dist/catalog.json`. Existing bouquet names and photographs are inspirations from the original website, not stock availability. `priceCents: null` means a customer-selected budget; set a confirmed positive integer price in cents to enable fixed-price calculation. The catalog is maintained in GitHub; a visual staff administration panel is not included in GitHub Pages. A WordPress/CMS migration can reuse the design and product data.

- Confirmed WhatsApp recipient: `491718639109` (user confirmed).
- Greeting card: 350 cents per inquiry (one card for the entire selection).
- Schwäbisch Hall delivery: 1000 cents. Other destinations: quotation required.
- Delivery defaults to a street address, with an alternative place/meeting point and optional map link. All address/location fields are optional. The customer must select the delivery area; no geocoding or automatic boundary validation is performed.
- Cart saves only product IDs, quantity, chosen budgets and color preferences. Contact, address and card message stay in page memory and are not saved in localStorage.
- WhatsApp opens with the prepared message; the visitor sends it manually. No online payment, order database, or stock reservation.
- Business must confirm the final price, delivery point, availability and requested date.

## Deployment

The Pages workflow publishes only `dist/`. In repository Settings → Pages, use GitHub Actions as source. Pushes to main run syntax checks and eleven calculation, matching and message tests before deployment.

```sh
node --check dist/app.js
node --check dist/cart-core.js
node --check dist/experience.js
node --check dist/experience-core.js
node --test tests/cart.test.cjs tests/experience.test.cjs
```

## Content and launch boundary

This is a marked design concept, with search indexing disabled. Original business information and image provenance are in `ASSET-SOURCES.json` and the original https://www.blumen-bierbach.de/. No made-up bouquet sale prices or testimonials are used. Opening hours and dated events must be confirmed before replacing the original site. Past listed events hide after their date using the visitor's local calendar date.

Before regular business launch, verify image publication rights, complete provider/privacy information with the operator, confirm delivery-area boundaries and bouquet prices, and test the WhatsApp handoff on the store's devices. Existing source legal pages contain placeholders and were not copied as a completed legal notice.

Google Fonts are self-hosted; license texts are included. There are no analytics, embedded maps, third-party font requests or remote scripts on page load.
