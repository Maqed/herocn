import { registryItemSchema } from "shadcn/schema";
import type { z } from "zod";
import { Index } from "../../registry/__index__";

type RegistryItem = z.infer<typeof registryItemSchema>;
type RegistryItemType = RegistryItem["type"];

export async function getAllBlockIds(
	types: RegistryItemType[] = ["registry:block", "registry:internal"],
	categories: string[] = [],
): Promise<string[]> {
	const blocks = await getAllBlocks(types, categories);

	return blocks.map((block) => block.name);
}

export async function getAllBlocks(
	types: RegistryItemType[] = ["registry:block", "registry:internal"],
	categories: string[] = [],
): Promise<RegistryItem[]> {
	const allBlocks = new Map<string, unknown>();

	for (const itemName in Index) {
		const item = Index[itemName];
		allBlocks.set(`${item.type}:${item.name}`, item);
	}

	const validatedBlocks = Array.from(allBlocks.values())
		.map((block) => {
			const result = registryItemSchema.safeParse(block);
			return result.success ? result.data : null;
		})
		.filter((block): block is RegistryItem => block !== null);

	return validatedBlocks.filter(
		(block) =>
			types.includes(block.type) &&
			(categories.length === 0 ||
				block.categories?.some((category) => categories.includes(category))) &&
			!block.name.startsWith("chart-"),
	);
}
