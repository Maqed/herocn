"use client";

import { Terminal } from "lucide-react";
import * as React from "react";
import { useConfig } from "@/hooks/use-config";
import {
	CodeBlock,
	CodeBlockActions,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockHeader,
	CodeBlockTitle,
} from "@/registry/new-york-v4/ui/code-block";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";

type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

export function CodeBlockCommandWrapper({
	__npm__,
	__yarn__,
	__pnpm__,
	__bun__,
}: React.ComponentProps<"pre"> & {
	__npm__?: string;
	__yarn__?: string;
	__pnpm__?: string;
	__bun__?: string;
}) {
	const [config, setConfig] = useConfig();

	const packageManager: PackageManager = config.packageManager || "pnpm";

	const tabs = React.useMemo(
		() => ({
			pnpm: __pnpm__,
			npm: __npm__,
			yarn: __yarn__,
			bun: __bun__,
		}),
		[__npm__, __pnpm__, __yarn__, __bun__],
	);

	const activeValue = tabs[packageManager] ?? "";

	return (
		<CodeBlock>
			<Tabs
				value={packageManager}
				className="gap-0"
				onValueChange={(value) => {
					setConfig({
						...config,
						packageManager: value as PackageManager,
					});
				}}
			>
				<CodeBlockHeader className="gap-0">
					<CodeBlockTitle>
						<Terminal />
					</CodeBlockTitle>
					<div className="flex items-center">
						<TabsList variant="line">
							{Object.entries(tabs).map(([key]) => {
								return (
									<TabsTrigger key={key} value={key}>
										{key}
									</TabsTrigger>
								);
							})}
						</TabsList>
					</div>
					<CodeBlockActions>
						<CodeBlockCopyButton value={activeValue} />
					</CodeBlockActions>
				</CodeBlockHeader>
				{Object.entries(tabs).map(([key, value]) => {
					return (
						<TabsContent
							key={key}
							value={key}
							className="m-0 p-0"
							data-slot="code-block-command-content"
						>
							<CodeBlockContent className="group-has-data-[slot=code-block-header]/code-block:pt-0">
								{value}
							</CodeBlockContent>
						</TabsContent>
					);
				})}
			</Tabs>
		</CodeBlock>
	);
}

export function CodeBlockCommand({ command }: { command: string }) {
	const commandWithoutNpm = command.split(" ").slice(1).join(" ");
	let output = {
		__pnpm__: `pnpm dlx ${commandWithoutNpm}`,
		__npm__: `npx ${commandWithoutNpm}`,
		__yarn__: `yarn ${commandWithoutNpm}`,
		__bun__: `bunx ${commandWithoutNpm}`,
	};
	if (command.startsWith("npm"))
		output = {
			__pnpm__: `pnpm ${commandWithoutNpm}`,
			__npm__: `npm ${commandWithoutNpm}`,
			__yarn__: `yarn ${commandWithoutNpm}`,
			__bun__: `bun ${commandWithoutNpm}`,
		};
	return <CodeBlockCommandWrapper {...output} />;
}
