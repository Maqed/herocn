import type { MetadataRoute } from "next";
import { source } from "@/lib/source";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const docsPages = source.getPages().map((page) => ({
		url: absoluteUrl(page.url),
	}));

	return [
		{
			url: absoluteUrl("/"),
		},
		...docsPages,
	];
}
