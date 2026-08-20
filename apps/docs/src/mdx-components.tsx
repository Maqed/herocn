import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { ApiRefTable } from "@/components/api-ref-table";
import { CodeBlockCommand } from "@/components/code-block-command";
import { CodeTabs } from "@/components/code-tabs";
import { ComponentPreview } from "@/components/component-preview";
import { ComponentSource } from "@/components/component-source";
import { ComponentsList } from "@/components/components-list";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";
import { ComponentPreviewTabs } from "./components/component-preview-tabs";
import { RenderCSSShared } from "./components/render-css-shared";
import { cn } from "./lib/utils";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		...defaultMdxComponents,
		...components,
		ComponentsList,
		ComponentPreview,
		ComponentSource,
		ComponentPreviewTabs,
		CodeTabs,
		Tabs,
		CodeBlockCommand,
		TabsContent,
		TabsList,
		ApiRefTable,
		RenderCSSShared,
		TabsTrigger,
		LinkedCard: ({
			className,
			...props
		}: React.ComponentProps<typeof Link>) => (
			<Link
				className={cn(
					"flex w-full flex-col items-center rounded-xl bg-surface p-6 text-surface-foreground transition-colors hover:bg-surface/80 sm:p-10",
					className,
				)}
				{...props}
			/>
		),
		Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
			<h3
				className={cn(
					"mt-8 scroll-m-32 font-medium text-lg tracking-tight",
					className,
				)}
				{...props}
			/>
		),
		Steps: ({ className, ...props }: React.ComponentProps<"div">) => (
			<div
				className={cn(
					"steps [&>h3]:step mb-12 [counter-reset:step] md:ml-4 md:border-l md:pl-8",
					className,
				)}
				{...props}
			/>
		),
	};
}
