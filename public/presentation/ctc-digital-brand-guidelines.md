# Chicago Training Club — Digital Brand Guidelines

Version 1.0 · October 6, 2026

These guidelines document the delivered CTC website and propose practical rules for future digital work. They do not replace seasonal apparel art direction. The official logo and CTC photography remain the source of truth.

## 1. Brand idea

Calisthenics. Community. Chicago.

The website should feel like showing up to the bars: energetic, welcoming and grounded in real effort. Show the people before the product. Make the next session easy to find. Give every starting point a place.

## 2. Wordmark

- Use the official horizontal SVG. Preserve its proportions and letterforms.
- Proposed clear space: at least one wordmark cap-height on every side. Measure the height of its capital letters, not the SVG canvas.
- Use a black mark on a clear light surface; a light version on a dark surface. Maintain strong contrast.
- Never stretch, redraw, rotate, outline, shadow or add texture to the wordmark.
- Avoid busy photos behind the logo, especially faces, bars or high-contrast edges.
- The Chicago star supports the brand. It does not replace the wordmark or become a competing headline mark.
- At small sizes, inspect legibility on a real screen. Keep the full mark readable instead of shrinking it to fill an arbitrary space.

## 3. Color roles

| Token | Hex | Use |
| --- | --- | --- |
| Ink | #1B1D19 | Primary text, dark sections, main buttons |
| Paper | #F3F1E9 | Main light background and text on Ink |
| Neutral | #D8D9CF | Supporting backgrounds; quiet surfaces |
| Muted | #62665D | Secondary copy on Paper or other light surfaces |
| Line | #CDCEC3 | Dividers on light backgrounds |

Let real photography introduce color. Alternate Ink and Paper to create visual rhythm. Avoid adding bright accent colors just to make a section feel different.

Pair Ink text with Paper or Neutral. Pair Paper text with Ink. Muted text belongs on light surfaces, not on Ink. Check WCAG contrast for each actual foreground/background pairing: at least 4.5:1 for normal text and 3:1 for large text. Color must not be the only signal for a selected state or action.

## 4. Typography

**Display:** Barlow Condensed Bold, 700. Use uppercase and deliberate line breaks. The delivered website uses tight headline line height (around 0.93) and restrained negative letter spacing. The homepage hero is a special display composition, not a reusable body-heading scale.

**Body and navigation:** DM Sans. Use sentence case for readable prose and navigation. The site’s base copy is 16px with a 1.55 line height; increase as appropriate for long reading. Small uppercase labels are short supporting details, not a substitute for readable body text.

- Use one meaningful H1 on each page, followed by logical H2/H3 headings.
- Keep headlines concise enough to fit on mobile without clipping.
- Keep body copy around 45–70 characters per line.
- Use weight, size and spacing to create hierarchy. Avoid an extra font for each role.
- Test long words, zoom, small screens and content wrapping. Never hide overflow to conceal a typography problem.
- Use locally hosted licensed fonts. The website includes their license files.

## 5. Photography

Use supplied CTC photography: the people, the red bars, the lakefront and Chicago’s built environment. Include different levels of effort and skill. The community is more than isolated athletic poses.

- Keep faces, hands, feet and the exercise legible when they are central to the story.
- Crop intentionally for each breakpoint. A wide desktop crop should not be reused blindly on a phone.
- Put text in actual negative space. Add an appropriate contrast treatment when needed.
- Preserve natural skin tones and texture. Avoid generic stock-gym imagery and excessive filters.
- Use honest, descriptive alt text. Decorative images may have empty alt text.
- Supply responsive AVIF images with WebP fallbacks, explicit dimensions and sensible loading priorities.

## 6. Voice

Direct. Welcoming. Specific.

Use “Come train with us,” “Build your next breakthrough” and “There’s a place for you at the bars” as examples of the tone. Pair emotional headlines with concrete information about the session, location or next step.

- Talk about effort, progress and training together.
- Invite beginners without making them feel like outsiders.
- Avoid promises about results, unsupported rankings, invented testimonials and aggressive gym language.
- Verify schedules, addresses and claims before publication.
- Use plain action labels: Explore the training, Find your session, Get directions, Shop CTC.

## 7. Layout and interaction

- Let one headline lead the composition. Use intentional dark/light transitions and generous outer margins.
- Keep related text and media close enough to read as one section. Avoid empty columns that serve no purpose.
- Use compact, balanced mobile navigation with comfortable touch targets; aim for at least 44×44 CSS pixels.
- Show hover, selected and keyboard-focus states. Do not depend on hover to reveal essential information.
- Keep video controls accessible. Visitors must always be able to stop playback and return to the page.

## 8. Motion

Motion should explain, reveal or reward attention. Use the expanding film, side-arriving photos and letter-assembly motif as recognizable examples.

- Prefer transform and opacity; avoid repeated layout work during scroll.
- Make scroll-linked motion reversible and smoothly interpolated.
- Allow expressive movement more time on mobile, where a short swipe covers more of the composition.
- Keep reading areas stable. Avoid constant decorative loops.
- Respect prefers-reduced-motion and provide the complete content without animation.
- The presentation’s replay control is an illustrative motion study, not the website’s exact scroll timing.

## 9. Delivery checklist

Check desktop and mobile crops, text contrast, keyboard navigation, reduced motion, working destinations, responsive image sizes, real contact information, metadata and canonical URLs. Performance scores support the experience; they do not replace testing the complete visitor journey.

## Source assets and implementation

Official wordmark: /ctc-wordmark.svg

Fonts: /fonts/barlow-condensed-bold.woff2 and /fonts/dm-sans.woff2

Website: https://ctc-nu-plum.vercel.app

Repository: https://github.com/psa231093/ctc

Source club context: https://view.genially.com/697f74e9bb78a059e35f09d3
