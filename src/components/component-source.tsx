import fs from "node:fs/promises";
import path from "node:path";
import { highlight } from "fumadocs-core/highlight";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import type * as React from "react";
import { getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { CodeCollapsibleWrapper } from "./code-collapsible-wrapper";

export async function ComponentSource({
	name,
	src,
	title,
	language,
	collapsible = true,
	className,
}: React.ComponentProps<"div"> & {
	name?: string;
	src?: string;
	title?: string;
	language?: string;
	collapsible?: boolean;
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

	const rendered = await highlight(code, {
		lang,
		components: {
			pre: (props) => (
				<Pre {...props} className={cn(props.className, "max-h-96 text-sm")} />
			),
		},
	});

	const block = (
		<CodeBlock title={title} className="my-0">
			{rendered}
		</CodeBlock>
	);

	if (!collapsible) {
		return <div className={cn("relative", className)}>{block}</div>;
	}

	return (
		<CodeCollapsibleWrapper className={className}>
			{block}
		</CodeCollapsibleWrapper>
	);
}
