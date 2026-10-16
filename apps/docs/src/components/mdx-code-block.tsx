"use client";

import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	CodeBlock,
	CodeBlockActions,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockFooter,
	CodeBlockHeader,
	CodeBlockLine,
	CodeBlockTitle,
} from "@/registry/new-york-v4/ui/code-block";

function getNodeText(node: React.ReactNode): string {
	if (typeof node === "string" || typeof node === "number") {
		return String(node);
	}

	if (Array.isArray(node)) {
		return node.map((child) => getNodeText(child)).join("");
	}

	if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
		return getNodeText(node.props.children);
	}

	return "";
}

function getCodeChild(children: React.ReactNode): {
	language?: string;
	codeChildren: React.ReactNode;
	raw: string;
} {
	let codeElement: React.ReactElement<{
		className?: string;
		children?: React.ReactNode;
		"data-language"?: string;
	}> | null = null;

	React.Children.forEach(children, (child) => {
		if (React.isValidElement(child)) {
			const childProps = child.props as {
				className?: string;
				children?: React.ReactNode;
				"data-language"?: string;
			};
			if (child.type === "code" || childProps.className) {
				codeElement = child as React.ReactElement<{
					className?: string;
					children?: React.ReactNode;
					"data-language"?: string;
				}>;
			}
		}
	});

	if (!codeElement) {
		return { codeChildren: children, raw: getNodeText(children) };
	}

	const props = (
		codeElement as React.ReactElement<{
			className?: string;
			children?: React.ReactNode;
			"data-language"?: string;
		}>
	).props;
	const className = props.className ?? "";
	const match = /language-(\w+)/.exec(className);
	const language = props["data-language"] ?? (match ? match[1] : undefined);

	return {
		language,
		codeChildren: props.children,
		raw: getNodeText(props.children),
	};
}

function isLineElement(child: React.ReactNode): boolean {
	if (!React.isValidElement(child)) {
		return false;
	}
	const className = (child.props as { className?: unknown }).className ?? "";
	return (
		typeof className === "string" && className.split(/\s+/).includes("line")
	);
}

/**
 * Convert fumadocs/Shiki output (`<span class="line">…</span>` per line)
 * into `CodeBlockLine` nodes so the `lineNumbers` counter applies.
 * Returns null when the children are not line spans, so the caller can
 * fall back to a raw string (which `CodeBlockContent` splits itself).
 */
function toNumberedLines(children: React.ReactNode): React.ReactNode | null {
	const kids = React.Children.toArray(children);
	if (kids.length === 0 || !kids.some(isLineElement)) {
		return null;
	}
	let index = 0;
	const numbered: React.ReactNode[] = [];
	for (const child of kids) {
		if (typeof child === "string") {
			// Whitespace text nodes separate Shiki lines; anything else
			// means mixed content, which is rendered as-is.
			if (child.trim() !== "") {
				numbered.push(child);
			}
			continue;
		}
		if (isLineElement(child)) {
			const line = child as React.ReactElement<{
				children?: React.ReactNode;
			}>;
			index += 1;
			numbered.push(
				<CodeBlockLine key={index}>{line.props.children}</CodeBlockLine>,
			);
			continue;
		}
		numbered.push(child);
	}
	return numbered;
}

export type CodeBlockViewProps = {
	title?: string;
	/** HTML string (fumadocs `icon` attr) or a React node. */
	icon?: string | React.ReactNode;
	/** Raw text for the copy button. Falls back to the rendered text. */
	value?: string;
	className?: string;
	contentClassName?: string;
	collapsible?: boolean;
	collapsedHeight?: string;
	collapsedLabel?: string;
	expandedLabel?: string;
	lineNumbers?: boolean;
	startLine?: number;
	children?: React.ReactNode;
};

/**
 * Shared CodeBlock composition (same pattern as the `code-block-show-more`
 * example): optional header with copy, content, and an opt-in `Show more`
 * footer that caps the height while collapsed.
 */
export function CodeBlockView({
	title,
	icon,
	value,
	className,
	contentClassName,
	collapsible = false,
	collapsedHeight = "max-h-64",
	collapsedLabel = "Show more",
	expandedLabel = "Show less",
	lineNumbers = true,
	startLine = 1,
	children,
}: CodeBlockViewProps) {
	const [expanded, setExpanded] = React.useState(false);
	const id = React.useId();
	const raw = value ?? getNodeText(children);

	const header = title ? (
		<CodeBlockHeader>
			<CodeBlockTitle>
				{typeof icon === "string" ? (
					icon ? (
						<span
							className="[&_svg]:size-4"
							dangerouslySetInnerHTML={{ __html: icon }}
						/>
					) : null
				) : (
					icon
				)}
				{title}
			</CodeBlockTitle>
			<CodeBlockActions>
				<CodeBlockCopyButton value={raw} />
			</CodeBlockActions>
		</CodeBlockHeader>
	) : (
		<CodeBlockActions>
			<CodeBlockCopyButton value={raw} />
		</CodeBlockActions>
	);

	if (!collapsible) {
		return (
			<CodeBlock className={className}>
				{header}
				<CodeBlockContent
					lineNumbers={lineNumbers}
					startLine={startLine}
					className={contentClassName}
				>
					{children}
				</CodeBlockContent>
			</CodeBlock>
		);
	}

	return (
		<CodeBlock className={className}>
			{header}
			<CodeBlockContent
				id={id}
				lineNumbers={lineNumbers}
				startLine={startLine}
				className={cn(
					!expanded && [collapsedHeight, "overflow-y-hidden"],
					contentClassName,
				)}
			>
				{children}
			</CodeBlockContent>
			<CodeBlockFooter className="justify-center">
				<Button
					variant="ghost"
					size="xs"
					aria-expanded={expanded}
					aria-controls={id}
					onClick={() => setExpanded((prev) => !prev)}
				>
					<ChevronDownIcon className="in-aria-expanded:rotate-180 transition-transform" />
					{expanded ? expandedLabel : collapsedLabel}
				</Button>
			</CodeBlockFooter>
		</CodeBlock>
	);
}

export function MdxCodeBlock({
	title,
	icon,
	className,
	children,
}: Omit<React.ComponentProps<"div">, "title"> & {
	title?: string;
	icon?: string;
}) {
	const { codeChildren, raw } = getCodeChild(children);
	const numbered = toNumberedLines(codeChildren);

	return (
		<CodeBlockView
			title={title}
			icon={icon}
			value={raw}
			className={cn("my-4", className)}
		>
			{numbered ?? raw}
		</CodeBlockView>
	);
}
