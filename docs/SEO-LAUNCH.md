# Search readiness and domain cutover

## Implemented
- Five crawlable, server-rendered React routes with a deliberate internal link structure.
- Unique titles, descriptions and canonical URLs on the official www.chicagotrainingclub.com origin.
- Visible Chicago calisthenics content with clear page headings, descriptive photo alt text and natural supporting language.
- SportsOrganization JSON-LD using verified name, city, logo and official social accounts. No invented address, opening hours, reviews, event dates or prices.
- Sitemap containing the five real routes; environment-controlled robots directives.
- Locally hosted WOFF2 fonts, responsive WebP images, explicit image dimensions, eager hero images and lazy below-fold images.
- Open Graph and Twitter metadata and a locally generated 1200×630 social image.
- Reduced-motion support, keyboard-operable interactions, visible focus, semantic landmarks and native FAQ disclosures.

## Before public launch
1. Review and approve content and photography; confirm current session details and the contact destination.
2. Deploy on the official domain and retain the current Shopify store until Phase 2 replaces its integration. Do not replace existing commerce paths without a redirect plan.
3. Crawl the existing Webflow site and map every real legacy URL. The supplied homepage links to /coming-soon; confirm whether that needs a redirect. Preserve important product and campaign links.
4. Set CTC_INDEXABLE=true for the PUBLIC deployment, then verify rendered robots meta is index/follow, robots.txt allows crawling, and sitemap.xml uses the official HTTPS domain. Private review builds intentionally default to noindex and disallow.
5. Choose one canonical origin (www is configured). Redirect non-www and HTTP to it at the hosting layer, avoiding redirect chains.
6. Verify ownership in Google Search Console. Submit /sitemap.xml and inspect the homepage and training page with URL Inspection. The owner must provide account/domain access for this step.
7. Test public response headers, status codes, structured data and social cards. The social image and canonical URLs intentionally reference the final domain and become valid there after cutover.
8. Measure field Core Web Vitals after launch. Track queries including Chicago calisthenics, calisthenics Chicago, and Chicago handstand training; monitor impressions, clicks, indexing and referral traffic rather than promising a ranking.

## Ongoing content
Publish genuinely useful, verified session pages when dates, locations, prices and cancellation policies are available. Keep training guidance grounded in the club's actual practice. Do not mass-produce neighborhood pages or invent reviews. If CTC qualifies for a Google Business Profile, have the owner verify eligibility and accurate location/service-area details before creating or changing one.

Reference: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
