# Media provenance and delivery

## Sunday reel and curated Instagram section

Added October 5, 2026: the user-supplied `../ctc-reel-1.mp4` shows the team bringing and assembling the bars at Oak Street Beach, followed by training. The user confirms the Sunday context. The portrait feature sits between training and community. The original 12.42 MB, 720×1280, 66-second reel is delivered as a 540×960 H.264/AAC fast-start MP4 of 6.60 MB. It preserves audio, loads only after a visitor presses play, exposes native playback/audio/fullscreen controls, and pauses offscreen. The visible description explains the sequence; there is no invented schedule time or registration flow.

The Instagram strip uses exactly the first image of each user-selected post, in order: `DPy6hq6jWiE`, `DMsubtnOg4j`, `DdRb5d9jvuw`, `DZaUQ0NjugP`. The photographs were retrieved from the visible public Instagram posts and optimized to 400/800-pixel WebP variants with `scripts/optimize-social.py`. Each links to its original post. It is a curated selection, not a live feed; no Instagram scripts, tracking embed or API credentials are needed. `lib/instagram.ts` defines the typed data boundary for a future authenticated, cached server-side feed adapter. Do not expose API credentials in client components.

## Original club imagery and film

The hero is `../Pictures/CTC_beach-jams-26_80.jpg`, byte-identical to the user's supplied monochrome attachment. Responsive WebP variants at 480, 900 and 1440 pixels preserve the original photograph. Regenerate these and the other club photographs with `scripts/optimize-assets.py` (Pillow required).

The club film is the supplied `../Video.mp4`: 61 seconds, 1280×674, with no audio stream. H.264 MP4 exports use 24 fps, slow preset, CRF 27 at original resolution and CRF 28 at 720 pixels wide, `yuv420p`, and `-movflags +faststart`. The original is 22.87 MB; desktop output is 11.41 MB and mobile output is 4.20 MB. The poster is a WebP frame at 43 seconds. Originals are untouched.

The video has no initial source or preload. On approach, it selects the mobile or desktop encode and plays muted. Reduced motion and Save-Data prevent automatic loading/playback; visitors can explicitly play it. It pauses offscreen and when the document is hidden. The original film is silent, described next to the playback control.

Product images and materials were verified from `https://f01e77-28.myshopify.com/products.json?limit=100` on October 5, 2026. The Research Hoodie, Training Pant and Trinity Tee — Chalk previews use the first product image in that catalog. Local 480/900/1440 WebP derivatives minimize third-party requests. `lib/shop-preview.ts` holds the editorial selections; review them when the store changes. Live prices, stock and checkout are deliberately left to Shopify.

## Desktop interior-page portraits

The user-supplied `Pictures/instagram` exports provide the club, training, and community hero portraits. Full portrait composition is retained, with 480/900/1440px WebP variants; see `desktop-image-manifest.json` for source mappings and sizes. Desktop-only picture sources avoid downloading these additions below 901px. The club story uses the complete original club-session portrait instead of cropping it into a wide desktop banner.
