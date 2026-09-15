import { highlight } from "fumadocs-core/highlight";
import * as React from "react";

import { BlockViewer } from "@/components/block-viewer";
import {
	createFileTreeForRegistryItemFiles,
	getRegistryItem,
} from "@/lib/registry";

export async function BlockDisplay({ name }: { name: string }) {
	const item = await getCachedRegistryItem(name);

	if (!item?.files) {
		return null;
	}

	const tree = createFileTreeForRegistryItemFiles(item.files);

	const highlightedFiles = await Promise.all(
		item.files.map(async (file) => {
			const language = file.path.split(".").pop() ?? "tsx";
			const highlightedContent = await highlight(file.content ?? "", {
				lang: language,
			});

			return {
				...file,
				language,
				highlightedContent,
			};
		}),
	);

	return (
		<BlockViewer item={item} tree={tree} highlightedFiles={highlightedFiles} />
	);
}

const getCachedRegistryItem = React.cache(
	async (name: string) => await getRegistryItem(name),
);
