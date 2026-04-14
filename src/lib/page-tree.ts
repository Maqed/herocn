import type { source } from "@/lib/source";

export type PageTreeNode = (typeof source.pageTree)["children"][number];
export type PageTreeFolder = Extract<PageTreeNode, { type: "folder" }>;
export type PageTreePage = Extract<PageTreeNode, { type: "page" }>;

// Recursively find all pages in a folder tree.
export function getAllPagesFromFolder(folder: PageTreeFolder): PageTreePage[] {
	const pages: PageTreePage[] = [];

	for (const child of folder.children) {
		if (child.type === "page") {
			pages.push(child);
		} else if (child.type === "folder") {
			pages.push(...getAllPagesFromFolder(child));
		}
	}

	return pages;
}

// Get all pages from a folder (flattened, no base/radix distinction).
export function getPagesFromFolder(folder: PageTreeFolder): PageTreePage[] {
	return getAllPagesFromFolder(folder).filter(
		(page) => !page.url.endsWith("/components"),
	);
}
