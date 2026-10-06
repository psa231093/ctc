// Curated first images from the four posts supplied by CTC, in the requested order.
// A future server-side feed adapter can return this shape without changing the section.
export type InstagramPost = { id: string; href: string; image: string; alt: string };
export const instagramPosts: InstagramPost[] = [
  { id: "DPy6hq6jWiE", href: "https://www.instagram.com/p/DPy6hq6jWiE/?img_index=1", image: "instagram-1", alt: "An athlete balances in a one-arm handstand above outdoor parallel bars" },
  { id: "DMsubtnOg4j", href: "https://www.instagram.com/p/DMsubtnOg4j/?img_index=1", image: "instagram-2", alt: "A CTC athlete in a blue bucket hat between sets at a Chicago park" },
  { id: "DdRb5d9jvuw", href: "https://www.instagram.com/p/DdRb5d9jvuw/?img_index=1", image: "instagram-3", alt: "An athlete practicing a horizontal hold on red bars with the CTC community" },
  { id: "DZaUQ0NjugP", href: "https://www.instagram.com/p/DZaUQ0NjugP/?img_index=1", image: "instagram-4", alt: "A close view of a CTC athlete training on a pull-up bar in Chicago" },
];
