import { highlight } from "fumadocs-core/highlight";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import type * as React from "react";
import { css as sharedCss, cssVars as sharedCssVars } from "@/registry/shared";
import { CodeCollapsibleWrapper } from "./code-collapsible-wrapper";

interface RenderCSSSharedProps {
	light?: (keyof typeof sharedCssVars.light)[];
	dark?: (keyof typeof sharedCssVars.dark)[];
	theme?: (keyof typeof sharedCssVars.theme)[];
	css?: (keyof typeof sharedCss)[];
	title?: string;
}

function isEmptyObject(value: unknown): value is Record<string, never> {
	return (
		typeof value === "object" &&
		value !== null &&
		!Array.isArray(value) &&
		Object.keys(value).length === 0
	);
}

function emitUtilityDeclarations(
	lines: string[],
	declarations: Record<string, unknown>,
	indent: string,
) {
	for (const [prop, value] of Object.entries(declarations)) {
		if (typeof value === "string") {
			lines.push(`${indent}${prop}: ${value};`);
		} else if (isEmptyObject(value)) {
			lines.push(`${indent}${prop};`);
		} else if (
			typeof value === "object" &&
			value !== null &&
			!Array.isArray(value)
		) {
			lines.push(`${indent}${prop} {`);
			emitUtilityDeclarations(
				lines,
				value as Record<string, unknown>,
				`${indent}  `,
			);
			lines.push(`${indent}}`);
		}
	}
}

function generateCSSString({
	light,
	dark,
	theme,
	css,
}: Omit<RenderCSSSharedProps, "title">): string {
	const sections: string[] = [];

	if ((light && light.length > 0) || (dark && dark.length > 0)) {
		const layerLines: string[] = [];

		if (light && light.length > 0) {
			layerLines.push(":root {");
			for (const key of light) {
				layerLines.push(`    ${key}: ${sharedCssVars.light[key]};`);
			}
			layerLines.push("}");
		}

		if (dark && dark.length > 0) {
			layerLines.push(".dark {");
			for (const key of dark) {
				layerLines.push(`    ${key}: ${sharedCssVars.dark[key]};`);
			}
			layerLines.push("}");
		}

		sections.push(layerLines.join("\n"));
	}

	if (theme && theme.length > 0) {
		const themeLines: string[] = ["@theme inline {"];
		for (const key of theme) {
			themeLines.push(`  ${key}: ${sharedCssVars.theme[key]};`);
		}
		themeLines.push("}");
		sections.push(themeLines.join("\n"));
	}

	if (css && css.length > 0) {
		for (const key of css) {
			const declarations = sharedCss[key] as Record<string, unknown>;
			const utilityLines: string[] = [`${key} {`];
			emitUtilityDeclarations(utilityLines, declarations, "  ");
			utilityLines.push("}");
			sections.push(utilityLines.join("\n"));
		}
	}

	return sections.join("\n\n");
}

export async function RenderCSSShared({
	light,
	dark,
	theme,
	css,
	title = "globals.css",
}: RenderCSSSharedProps) {
	const cssString = generateCSSString({ light, dark, theme, css });

	if (!cssString) return null;

	const rendered = await highlight(cssString, {
		lang: "css",
		components: {
			pre: (props: React.ComponentProps<"pre">) => (
				<Pre {...props} className="max-h-96 text-sm" />
			),
		},
	});

	const block = (
		<CodeBlock title={title} className="my-0">
			{rendered}
		</CodeBlock>
	);

	return <CodeCollapsibleWrapper>{block}</CodeCollapsibleWrapper>;
}
