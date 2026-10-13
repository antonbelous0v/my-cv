import type { MetadataRoute } from "next";

const siteUrl = "https://abelous0v.xyz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/urls.txt`],
    host: siteUrl,
  };
}
