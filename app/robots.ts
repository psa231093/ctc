import type { MetadataRoute } from "next";
import { club, indexable } from "@/lib/ctc";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(indexable ? { allow: "/" } : { disallow: "/" }),
    },
    ...(indexable ? { sitemap: club.url + "/sitemap.xml" } : {}),
  };
}
