import type { MetadataRoute } from "next";
import { club } from "@/lib/ctc";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/the-club", "/chicago-calisthenics", "/community", "/join"].map(
    (path) => ({ url: club.url + path }),
  );
}
