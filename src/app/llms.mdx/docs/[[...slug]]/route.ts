import { notFound } from "next/navigation";

import { processMdxForLLMs } from "@/lib/llm";
import { getLLMText, source } from "@/lib/source";

export const revalidate = false;

export async function GET(
	_req: Request,
	{ params }: RouteContext<"/llms.mdx/docs/[[...slug]]">,
) {
	const { slug } = await params;
	// remove the appended "index.mdx"
	const page = source.getPage(slug?.slice(0, -1));
	if (!page) notFound();

	const text = await getLLMText(page);

	return new Response(processMdxForLLMs(text), {
		headers: {
			"Content-Type": "text/markdown",
		},
	});
}

export function generateStaticParams() {
	return source.getPages().map((page) => ({
		slug: [...page.slugs, "index.mdx"],
	}));
}
