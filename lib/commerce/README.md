# Phase 2 boundary

Phase 1 links to the user-supplied store at https://f01e77-28.myshopify.com/. The editorial collection in `lib/shop-preview.ts` uses three verified products with optimized local copies of their official images. Product links open the actual Shopify pages. There are no cart buttons, checkout handlers, displayed prices or Shopify credentials in the application. Product availability and transactions stay on Shopify.

Add future `/shop`, `/shop/[handle]` and `/cart` routes under a commerce route group, with their own loading/error states. The existing marketing routes, layout and content should continue to work without a store connection.

Put a Shopify Storefront API adapter in this directory. Expose typed product, collection and cart operations through that adapter rather than calling Shopify from presentation components. Keep private access tokens and webhook secrets on the server. Use the supported Storefront API version at implementation time; do not pin a hypothetical future version now.

Use Shopify-hosted checkout; obtain prices, availability, variants and checkout URLs from Shopify. Add explicit currency and market handling, cart persistence, accessible cart status announcements, and error/retry behavior. Verify existing Webflow/Shopify product URLs before adding redirects. Add Product structured data only for real published products whose displayed prices and availability match Shopify. The existing external shop navigation can then link to the integrated catalog.
