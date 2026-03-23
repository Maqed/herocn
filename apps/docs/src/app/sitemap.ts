import type { MetadataRoute } from "next";
import { source } from "@/lib/source";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const docsPages = source.getPages().map((page) => ({
    url: absoluteUrl(page.url),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: page.url === "/docs" ? 0.9 : 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...docsPages,
  ];
}
