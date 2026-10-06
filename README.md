# Chicago Training Club — Phase 1

A responsive, server-rendered React website built with TypeScript, the Next-compatible Vinext runtime, and custom CSS. Real CTC photography, locally hosted fonts, subtle motion, an interactive training selector and a keyboard-accessible photo viewer.

## Run locally

Requires Node.js >=22.13.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:5173. On this Windows host, if the npm command shim fails, invoke `node "C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" ci`, then `node scripts/run-framework.mjs dev`.

## Verify and build

```sh
node node_modules/typescript/bin/tsc --noEmit
node scripts/verify-site.mjs
node scripts/run-framework.mjs build
```

The verification script expects a running review server at port 5173. Override it with `TEST_ORIGIN`. It checks rendered HTML, five routes, unique metadata, headings, canonicals, structured data, assets, sitemap, preview robots rules and a real 404. Production output is in `dist/client` and `dist/server`. The included Sites integration packages a Cloudflare Worker for server rendering.

## Project structure

- `app/`: homepage, club story, Chicago calisthenics training, community, join, sitemap, robots and 404.
- `components/`: shared identity and the small interactive React components.
- `lib/ctc.ts`: verified content, official destinations and page metadata.
- `public/images/`: responsive WebP assets and a 1200×630 social card.
- `scripts/optimize-assets.py`: regenerates WebP variants from the original `../Pictures` directory using Pillow. Originals remain untouched.
- `docs/DESIGN.md`: research, visitor journeys, visual direction and unresolved content.
- `docs/SEO-LAUNCH.md`: domain migration, search indexing and measurement checklist.
- `lib/commerce/README.md`: Phase 2 Shopify integration boundary.

## Content and scope

The Genially presentation is the primary club-content source. The live CTC website establishes the official social links. The local promotional posters support first-session guidance, but their undated times are not presented as a current schedule. Instagram is the verified route for session enquiries; no fake booking or email-submission flow is included.

Ecommerce remains outside Phase 1. No Shopify API calls, store UI, product mocks or payment handling are included.

## SEO release switch

Private review deployments default to **noindex** and disallow crawling. Public launch requires the approved domain cutover and `CTC_INDEXABLE=true`, followed by a build/deploy and verification of rendered metadata and robots.txt. The canonical origin is `https://www.chicagotrainingclub.com`. Search Console setup and domain access remain owner launch steps. See the SEO checklist before switching.
