import { docs } from "fumadocs-mdx:collections/server";
import {
	type InferPageType,
	loader,
	type StaticSource,
} from "fumadocs-core/source";
import { absoluteUrl } from "@/lib/utils";

type Docs = Awaited<typeof docs>;
type SourceConfig = {
	pageData: Docs["docs"][number];
	metaData: Docs["meta"][number];
};

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
	baseUrl: "/docs",
	source: docs.toFumadocsSource() as StaticSource<SourceConfig>,
	plugins: [],
});

export function getPageImage(page: InferPageType<typeof source>) {
	const segments = [...page.slugs, "image.webp"];
	const path = `/og/docs/${segments.join("/")}`;

	return {
		segments,
		url: absoluteUrl(path),
	};
}

export async function getLLMText(page: InferPageType<typeof source>) {
	const processed = await page.data.getText("processed");

	return `# ${page.data.title}

${processed}`;
}
