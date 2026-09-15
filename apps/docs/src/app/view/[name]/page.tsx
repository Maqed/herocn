import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { getAllBlockIds } from "@/lib/blocks";
import { getRegistryComponent } from "@/lib/registry";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
	const blocks = await getAllBlockIds(["registry:block"]);

	return blocks.map((name) => ({ name }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ name: string }>;
}): Promise<Metadata> {
	const { name } = await params;

	return {
		title: name,
		robots: {
			index: false,
			follow: false,
		},
	};
}

export default async function BlockViewPage({
	params,
}: {
	params: Promise<{ name: string }>;
}) {
	const { name } = await params;
	const Component = getRegistryComponent(name);

	if (!Component) {
		return notFound();
	}

	return (
		<div className="min-h-svh bg-background">
			<Suspense>
				<Component />
			</Suspense>
		</div>
	);
}
