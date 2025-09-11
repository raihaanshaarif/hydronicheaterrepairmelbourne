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
          "/_components/",
          "/_context/",
          "/_dataGeneralSite/",
          "/private/",
          "/temp/",
        ],
      },
    ],
    sitemap: "https://hydronicheaterrepairmelbourne.com.au/sitemap.xml",
  };
}
