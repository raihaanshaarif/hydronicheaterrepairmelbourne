import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/success/",
          "/testimonials/",
          "/_components/",
          "/_context/",
          "/_dataGeneralSite/",
        ],
      },
    ],
    sitemap: "https://ductedheaterrepairmelbourne.com.au/sitemap.xml",
  };
}
