import type { Metadata } from "next";

import { BlockDisplay } from "@/components/block-display";
import { getAllBlockIds } from "@/lib/blocks";
import { registryCategories } from "@/lib/categories";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
	return registryCategories.map((category) => ({
		categories: [category.slug],
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ categories?: string[] }>;
}): Promise<Metadata> {
	const { categories = [] } = await params;
	const category = registryCategories.find(
		({ slug }) => slug === categories[0],
	);

	return {
		title: category ? `${category.name} Blocks` : undefined,
		alternates: {
			canonical: `/blocks/${categories.join("/")}`,
		},
	};
}

export default async function BlocksCategoryPage({
	params,
}: {
	params: Promise<{ categories?: string[] }>;
}) {
	const { categories = [] } = await params;
	const blocks = await getAllBlockIds(["registry:block"], categories);

	return (
		<div className="flex flex-col gap-12 pb-24 md:gap-24">
			{blocks.map((name) => (
				<BlockDisplay name={name} key={name} />
			))}
		</div>
	);
}
