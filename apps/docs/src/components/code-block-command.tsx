"use client";

import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { Terminal } from "lucide-react";
import * as React from "react";
import { useConfig } from "@/hooks/use-config";
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
	const [hasCopied, setHasCopied] = React.useState(false);

	React.useEffect(() => {
		if (hasCopied) {
			const timer = setTimeout(() => setHasCopied(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [hasCopied]);

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

	return (
		<div className="relative overflow-x-auto">
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
				<div className="flex items-center gap-2 px-3">
					<div className="flex size-4 items-center justify-center rounded-[1px] bg-foreground opacity-70">
						<Terminal className="size-3 text-background" />
					</div>
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
				<div className="no-scrollbar overflow-x-auto">
					{Object.entries(tabs).map(([key, value]) => {
						return (
							<TabsContent key={key} value={key} className="m-0 p-0 px-3">
								<CodeBlock className="rounded-sm px-3">
									<Pre className="max-h-96 text-sm">
										<code
											className="relative font-mono leading-none"
											data-language="bash"
										>
											{value}
										</code>
									</Pre>
								</CodeBlock>
							</TabsContent>
						);
					})}
				</div>
			</Tabs>
		</div>
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
