import { llms } from "fumadocs-core/source";
import { registryCategories } from "@/lib/categories";
import { source } from "@/lib/source";

export const revalidate = false;

export async function GET() {
	const index = llms(source).index();

	const lines = [
		"## Blocks",
		"",
		"- [Blocks](/blocks): Clean, modern building blocks. Copy and paste into your apps.",
		"",
		...registryCategories.map(
			(category) => `- [${category.name} Blocks](/blocks/${category.slug})`,
		),
	];

	return new Response(`${index}\n\n${lines.join("\n")}`);
}
