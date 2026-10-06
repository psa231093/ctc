# Media provenance and delivery

The hero is `../Pictures/CTC_beach-jams-26_80.jpg`, byte-identical to the user's supplied monochrome attachment. Responsive WebP variants at 480, 900 and 1440 pixels preserve the original photograph. Regenerate these and the other club photographs with `scripts/optimize-assets.py` (Pillow required).

The club film is the supplied `../Video.mp4`: 61 seconds, 1280×674, with no audio stream. H.264 MP4 exports use 24 fps, slow preset, CRF 27 at original resolution and CRF 28 at 720 pixels wide, `yuv420p`, and `-movflags +faststart`. The original is 22.87 MB; desktop output is 11.41 MB and mobile output is 4.20 MB. The poster is a WebP frame at 43 seconds. Originals are untouched.

The video has no initial source or preload. On approach, it selects the mobile or desktop encode and plays muted. Reduced motion and Save-Data prevent automatic loading/playback; visitors can explicitly play it. It pauses offscreen and when the document is hidden. The original film is silent, described next to the playback control.

Product images and materials were verified from `https://f01e77-28.myshopify.com/products.json?limit=100` on October 5, 2026. The Research Hoodie, Training Pant and Trinity Tee — Chalk previews use the first product image in that catalog. Local 480/900/1440 WebP derivatives minimize third-party requests. `lib/shop-preview.ts` holds the editorial selections; review them when the store changes. Live prices, stock and checkout are deliberately left to Shopify.
