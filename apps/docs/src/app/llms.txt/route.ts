import { llms } from "fumadocs-core/source";
import { registryCategories } from "@/lib/categories";
import { source } from "@/lib/source";

export const revalidate = false;

export async function GET() {
	const index = llms(source).index();

	const chartPages = [
		{ name: "Area Charts", href: "area" },
		{ name: "Bar Charts", href: "bar" },
		{ name: "Line Charts", href: "line" },
		{ name: "Pie Charts", href: "pie" },
		{ name: "Radar Charts", href: "radar" },
		{ name: "Radial Charts", href: "radial" },
		{ name: "Tooltip Charts", href: "tooltip" },
	];
	const lines = [
		"## Blocks",
		"",
		"- [Blocks](/blocks): Clean, modern building blocks. Copy and paste into your apps.",
		"",
		...registryCategories.map(
			(category) => `- [${category.name} Blocks](/blocks/${category.slug})`,
		),
		"",
		"## Charts",
		"",
		"- [Charts](/charts/area): Beautiful chart components built with Recharts. Copy and paste into your apps.",
		...chartPages.map(({ name, href }) => `- [${name}](/charts/${href})`),
	];

	return new Response(`${index}\n\n${lines.join("\n")}`);
}
