import type { MetadataRoute } from "next";
import { registryCategories } from "@/lib/categories";
import { source } from "@/lib/source";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const docsPages = source.getPages().map((page) => ({
		url: absoluteUrl(page.url),
	}));

	const blockPages = [
		"/blocks",
		...registryCategories.map((category) => `/blocks/${category.slug}`),
	].map((path) => ({
		url: absoluteUrl(path),
	}));

	return [
		{
			url: absoluteUrl("/"),
		},
		...docsPages,
		...blockPages,
	];
}
