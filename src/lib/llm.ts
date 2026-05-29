import fs from "node:fs";
import { generateCSSString } from "@/components/render-css-shared";
import type {
	css as sharedCss,
	cssVars as sharedCssVars,
} from "@/registry/shared";
import { Index } from "../../registry/__index__";
import { source } from "./source";

function getComponentsList() {
	const components = source.pageTree.children.find(
		(page) => page.$id === "components",
	);

	if (components?.type !== "folder") {
		return "";
	}

	const list = components.children.filter(
		(component): component is typeof component & { url: string } =>
			component.type === "page" && "url" in component,
	);

	return list
		.map((component) => `- [${component.name}](${component.url})`)
		.join("\n");
}

export function processMdxForLLMs(content: string) {
	// Replace <ComponentsList /> with a markdown list of components.
	const componentsListRegex = /<ComponentsList\s*\/>/g;
	content = content.replace(componentsListRegex, getComponentsList());

	// Inline <RenderCSSShared /> as the CSS it would produce,
	// so LLMs see the actual styles instead of a JSX tag.
	const renderCSSSharedRegex = /<RenderCSSShared[\s\S]*?\/>/g;
	content = content.replace(renderCSSSharedRegex, (rawTag) => {
		try {
			const extractArrayProp = (propName: string) => {
				// When MDX compiles, it may keep the JSX attribute syntax:
				//   light={["--a", "--b"]}
				// or render it to HTML-encoded attribute:
				//   light="[&#x22;--a&#x22;, &#x22;--b&#x22;]"
				// We need to handle both.

				const jsxPattern = new RegExp(`${propName}=\\{([^}]+)\\}`, "m");
				const jsxMatch = rawTag.match(jsxPattern);
				if (jsxMatch) {
					const quotedValues = jsxMatch[1].match(/"([^"]+)"/g);
					return quotedValues?.map((q) => q.slice(1, -1));
				}

				const htmlPattern = new RegExp(`${propName}="([^"]+)"`, "m");
				const htmlMatch = rawTag.match(htmlPattern);
				if (!htmlMatch) return undefined;

				// The value is a JSON-like array where quotes are HTML-encoded
				// as &#x22;. It may span multiple lines and have trailing commas,
				// so we split on the entity rather than parsing as JSON.
				// After splitting by &#x22;, values sit at odd indices:
				//   ["[", "--a", ", ", "--b", ",", "]"]
				const segments = htmlMatch[1].split("&#x22;");
				const result: string[] = [];
				for (let i = 1; i < segments.length; i += 2) {
					const val = segments[i].trim();
					if (val) result.push(val);
				}
				return result.length > 0 ? result : undefined;
			};

			const cssString = generateCSSString({
				light: extractArrayProp(
					"light",
				) as (keyof typeof sharedCssVars.light)[],
				dark: extractArrayProp("dark") as (keyof typeof sharedCssVars.dark)[],
				theme: extractArrayProp(
					"theme",
				) as (keyof typeof sharedCssVars.theme)[],
				css: extractArrayProp("css") as (keyof typeof sharedCss)[],
			});
			if (!cssString) return rawTag;

			return `\`\`\`css\n${cssString}\n\`\`\``;
		} catch (error) {
			console.error("Error processing RenderCSSShared:", error);
			return rawTag;
		}
	});

	//Replace <ComponentPreview /> with its source code
	const componentPreviewRegex =
		/<ComponentPreview[\s\S]*?name="([^"]+)"[\s\S]*?\/>/g;

	return content.replace(componentPreviewRegex, (match, name) => {
		try {
			const component = Index[name];
			if (!component?.files?.length) {
				return match;
			}

			const src: string | undefined = component.files[0]?.path;
			if (!src) {
				return match;
			}

			let source = fs.readFileSync(src, "utf8");

			source = source.replaceAll("@/registry/new-york-v4/", "@/components/");
			source = source.replaceAll("export default", "export");

			return `\`\`\`tsx\n${source}\n\`\`\``;
		} catch (error) {
			console.error(`Error processing ComponentPreview ${name}:`, error);
			return match;
		}
	});
}
