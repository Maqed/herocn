"use client";

import { cn } from "cn";

import { ChartCopyButton } from "@/components/chart-copy-button";
import type { Chart } from "@/components/chart-display";
import { getIconForLanguageExtension } from "@/components/icons";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/registry/new-york-v4/ui/sheet";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export function ChartCodeViewer({
	chart,
	className,
	children,
}: {
	chart: Chart;
} & React.ComponentProps<"div">) {
	const isDesktop = useMediaQuery("(min-width: 768px)");

	const triggerButton = (
		<Button size="xs" variant="outline">
			View Code
		</Button>
	);

	const content = (
		<Surface variant="secondary" className="flex min-h-0 flex-1 flex-col gap-0">
			<div className="hidden sm:block [&>div]:rounded-none [&>div]:border-0 [&>div]:border-b [&>div]:shadow-none [&_[data-chart]]:mx-auto [&_[data-chart]]:max-h-[35vh]">
				{children}
			</div>
			<div className="flex min-w-0 flex-1 flex-col overflow-hidden">
				<figure
					data-rehype-pretty-code-figure=""
					className="mt-0 flex h-auto min-w-0 flex-1 flex-col overflow-hidden"
				>
					<figcaption
						className="flex h-12 shrink-0 items-center gap-2 border-b py-2 pr-2 pl-4 text-foreground [&>svg]:size-4 [&>svg]:text-foreground [&>svg]:opacity-70"
						data-language="tsx"
					>
						{getIconForLanguageExtension("tsx")}
						{chart.name}
						<div className="ml-auto flex items-center gap-2">
							<ChartCopyButton
								name={chart.name}
								code={chart.files?.[0]?.content ?? ""}
							/>
						</div>
					</figcaption>
					<Surface className="no-scrollbar overflow-y-auto">
						{chart.highlightedCode}
					</Surface>
				</figure>
			</div>
		</Surface>
	);

	if (!isDesktop) {
		return (
			<Drawer>
				<DrawerTrigger render={triggerButton} />
				<DrawerContent
					className={cn(
						"flex max-h-[80vh] flex-col sm:max-h-[90vh]",
						className,
					)}
				>
					<DrawerHeader className="sr-only">
						<DrawerTitle>Code</DrawerTitle>
						<DrawerDescription>View the code for the chart.</DrawerDescription>
					</DrawerHeader>
					<div className="flex h-full flex-col overflow-auto">{content}</div>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<Sheet>
			<SheetTrigger render={triggerButton} />
			<SheetContent
				showCloseButton={false}
				side="right"
				className={cn(
					"flex flex-col gap-0 p-0 sm:max-w-sm md:w-[700px] md:max-w-[700px]",
					className,
				)}
			>
				<SheetHeader className="sr-only">
					<SheetTitle>Code</SheetTitle>
					<SheetDescription>View the code for the chart.</SheetDescription>
				</SheetHeader>
				{content}
			</SheetContent>
		</Sheet>
	);
}
