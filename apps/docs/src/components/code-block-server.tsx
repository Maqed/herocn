import { cn } from "cn";
import { getIconForLanguageExtension } from "@/components/icons";
import { highlightCode } from "@/lib/highlighter";
import { CodeBlockLine } from "@/registry/new-york-v4/ui/code-block";
import { CodeBlockView } from "./mdx-code-block";

export async function CodeBlockServer({
	code,
	language = "tsx",
	title,
	className,
	contentClassName,
	collapsible = false,
	collapsedHeight,
	collapsedLabel,
	expandedLabel,
}: {
	code: string;
	language?: string;
	title?: string;
	className?: string;
	contentClassName?: string;
	collapsible?: boolean;
	collapsedHeight?: string;
	collapsedLabel?: string;
	expandedLabel?: string;
}) {
	const trimmed = code.endsWith("\n") ? code.slice(0, -1) : code;
	const lines = await highlightCode(trimmed, language);

	return (
		<CodeBlockView
			title={title}
			icon={getIconForLanguageExtension(language)}
			value={code}
			className={cn("my-0", className)}
			contentClassName={cn(!collapsible && "max-h-96", contentClassName)}
			collapsible={collapsible}
			collapsedHeight={collapsedHeight}
			collapsedLabel={collapsedLabel}
			expandedLabel={expandedLabel}
		>
			{lines
				? lines.map((line, index) => (
						<CodeBlockLine key={index}>{line}</CodeBlockLine>
					))
				: trimmed}
		</CodeBlockView>
	);
}
