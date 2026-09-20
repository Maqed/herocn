import { llms } from "fumadocs-core/source";

import { getAllBlocks } from "@/lib/blocks";
import { registryCategories } from "@/lib/categories";
import { source } from "@/lib/source";
import { getRegistryItemInstallationAlias } from "@/lib/utils";

export const revalidate = false;

export async function GET() {
	const index = llms(source).index();
	const blocks = await getAllBlocks(["registry:block"]);

	const lines = [
		"## Blocks",
		"",
		"- [Blocks](/blocks): Clean, modern building blocks. Copy and paste into your apps.",
		"",
		...registryCategories.map(
			(category) => `- [${category.name} Blocks](/blocks/${category.slug})`,
		),
	];

	if (blocks.length > 0) {
		lines.push(
			"",
			"### All Blocks",
			"",
			...blocks.map((block) => {
				const registryUrl = getRegistryItemInstallationAlias(block.name);
				const categories = block.categories ?? [];
				const categoriesSuffix =
					categories.length > 0
						? ` (Categories: ${categories.join(", ")})`
						: "";
				const description = block.description
					? `: ${block.description}`
					: categoriesSuffix || ": Copy and paste into your apps.";
				return `- [${block.name}](${registryUrl})${description}`;
			}),
		);
	}

	return new Response(`${index}\n\n${lines.join("\n")}`);
}
