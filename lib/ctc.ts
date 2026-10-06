import type { Metadata } from "next";
export const club = {
  store: "https://f01e77-28.myshopify.com/",
  name: "Chicago Training Club",
  url: "https://www.chicagotrainingclub.com",
  instagram: "https://www.instagram.com/chicagotrainingclub/",
  tiktok: "https://www.tiktok.com/@chicagotrainingclub",
  presentation: "https://view.genially.com/697f74e9bb78a059e35f09d3",
};
// Enable only after public-domain cutover. Private previews must not be indexed.
export const indexable = process.env.CTC_INDEXABLE === "true";
export function pageMetadata(
  title: string,
  description: string,
  path = "/",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: club.url + path },
    openGraph: {
      title,
      description,
      url: club.url + path,
      type: "website",
      siteName: club.name,
      locale: "en_US",
      images: [
        {
          url: club.url + "/images/social-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Chicago Training Club — Chicago calisthenics and community",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [club.url + "/images/social-cover.jpg"],
    },
  };
}
export const programs = [
  {
    id: "sessions",
    number: "01",
    title: "Train together.",
    label: "Open training sessions",
    image: "club-session",
    alt: "CTC members training together on outdoor bars in Chicago",
    text: "A place to put in the work, trade ideas, and find your people. CTC brings calisthenics into Chicago parks and local gyms, with space for every starting point.",
    detail: "All skill levels · Free or low-cost sessions",
  },
  {
    id: "handstands",
    number: "02",
    title: "Change your perspective.",
    label: "Handstand clinics",
    image: "lakefront-handstand",
    alt: "A CTC athlete balancing in a handstand beside Lake Michigan",
    text: "Get upside down with a community that shares your curiosity. Handstands are one of CTC’s core disciplines, whether you’re exploring the skill or refining your practice.",
    detail: "Balance · Control · Shared practice",
  },
  {
    id: "research",
    number: "03",
    title: "Build your next breakthrough.",
    label: "Research & development",
    image: "front-lever",
    alt: "A calisthenics athlete practicing a horizontal hold on Chicago park bars",
    text: "Explore the details that make a skill click. CTC’s research and development sessions create room for handstands, freestyle, planche, and front lever work.",
    detail: "Experiment · Exchange · Progress",
  },
];
export const photos = [
  {
    image: "chicago-handstands",
    alt: "Two CTC athletes holding handstands with the Chicago skyline behind them",
    caption: "A different view of the city.",
    tag: "HANDSTANDS",
  },
  {
    image: "club-culture",
    alt: "A Chicago Training Club member spotting an athlete at the outdoor bars",
    caption: "Someone always has your back.",
    tag: "THE PEOPLE",
  },
  {
    image: "lakefront-handstand",
    alt: "An athlete balancing on parallel bars beside Lake Michigan",
    caption: "A little balance. A lot of practice.",
    tag: "LAKEFRONT",
  },
  {
    image: "bar-work",
    alt: "A smiling athlete hanging from the red calisthenics bars",
    caption: "The good part is showing up.",
    tag: "BAR WORK",
  },
  {
    image: "handstand-study",
    alt: "Black and white photograph of a handstand silhouette against the sky",
    caption: "One rep. Then another.",
    tag: "THE PROCESS",
  },
  {
    image: "club-session",
    alt: "A group practicing calisthenics together at Chicago beach bars",
    caption: "Public space. Shared purpose.",
    tag: "OPEN SESSIONS",
  },
  {
    image: "planche",
    alt: "A woman supporting herself on parallel bars in a Chicago park",
    caption: "Strength, on your own terms.",
    tag: "STRENGTH",
  },
  {
    image: "club-tent",
    alt: "Chicago Training Club canopy at an outdoor training gathering",
    caption: "Meet you at the bars.",
    tag: "THE CLUB",
  },
];
export const faqs = [
  {
    question: "Do I need calisthenics experience?",
    answer:
      "No. CTC welcomes all skill levels, from people exploring their first handstand to athletes working on advanced skills. Come ready to learn, share space, and respect the process.",
  },
  {
    question: "Does it cost anything to join?",
    answer:
      "Club membership is free. CTC hosts free and low-cost sessions; check the details for the specific session you want to attend.",
  },
  {
    question: "Where and when do you train?",
    answer:
      "CTC trains in Chicago parks and local gyms. Locations and times vary. Check the club’s official Instagram or send a message to confirm the next session before you travel.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring water and come ready to move. CTC’s session materials list chalk and bands as provided. Confirm the details for your session with the club, especially if you have equipment or access questions.",
  },
];
