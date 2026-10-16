import fs from "node:fs/promises";
import path from "node:path";
import { cn } from "cn";
import type * as React from "react";
import { getRegistryItem } from "@/lib/registry";
import { CodeBlockServer } from "./code-block-server";

export async function ComponentSource({
	name,
	src,
	title,
	language,
	collapsible = true,
	collapsedLabel,
	expandedLabel,
	className,
}: React.ComponentProps<"div"> & {
	name?: string;
	src?: string;
	title?: string;
	language?: string;
	collapsible?: boolean;
	collapsedLabel?: string;
	expandedLabel?: string;
}) {
	if (!name && !src) {
		return null;
	}

	let code: string | undefined;

	if (name) {
		const item = await getRegistryItem(name);
		code = item?.files?.[0]?.content;
	}

	if (src) {
		const file = await fs.readFile(path.join(process.cwd(), src), "utf-8");
		code = file;
	}

	if (!code) {
		return null;
	}

	const lang = language ?? title?.split(".").pop() ?? "tsx";

	return (
		<div className={cn("relative", className)}>
			<CodeBlockServer
				code={code}
				language={lang}
				title={title}
				collapsible={collapsible}
				collapsedLabel={collapsedLabel}
				expandedLabel={expandedLabel}
			/>
		</div>
	);
}
