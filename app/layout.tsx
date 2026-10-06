import type { Metadata } from "next";
import { club, indexable } from "@/lib/ctc";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/ctc-ui";
import { Motion } from "@/components/motion";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(club.url),
  title: {
    default: "Chicago Calisthenics & Community | Chicago Training Club",
    template: "%s | Chicago Training Club",
  },
  description:
    "Find your people at the bars. Chicago Training Club brings calisthenics, handstand clinics and community training to Chicago. All levels welcome. Free membership.",
  robots: { index: indexable, follow: indexable },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/barlow-condensed-bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
