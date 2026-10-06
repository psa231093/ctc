# Phase 2 boundary

Ecommerce is deliberately absent from Phase 1. There are no product mocks, cart buttons, checkout handlers, prices or Shopify credentials in the application.

Add future `/shop`, `/shop/[handle]` and `/cart` routes under a commerce route group, with their own loading/error states. The existing marketing routes, layout and content should continue to work without a store connection.

Put a Shopify Storefront API adapter in this directory. Expose typed product, collection and cart operations through that adapter rather than calling Shopify from presentation components. Keep private access tokens and webhook secrets on the server. Use the supported Storefront API version at implementation time; do not pin a hypothetical future version now.

Use Shopify-hosted checkout; obtain prices, availability, variants and checkout URLs from Shopify. Add explicit currency and market handling, cart persistence, accessible cart status announcements, and error/retry behavior. Verify existing Webflow/Shopify product URLs before adding redirects. Add Product structured data only for real published products whose displayed prices and availability match Shopify. Add commerce navigation only when the store is ready.
