type SiteConfigType = {
	name: string;
	url: string;
	description: string;
	links: {
		twitter: string;
		github: string;
	};
	navItems: {
		href: string;
		label: string;
		isExternal?: boolean;
		notShownInHeader?: boolean;
	}[];
};

export const siteConfig: SiteConfigType = {
	name: "herocn",
	url: "https://herocn.dev/",
	description: "shadcn/ui abstract, heroui beautiful styles.",
	links: {
		twitter: "https://twitter.com/0xMaqed",
		github: "https://github.com/Maqed/herocn",
	},
	navItems: [
		{
			href: "/docs/installation",
			label: "Docs",
		},
		{
			href: "/docs/components",
			label: "Components",
		},
		{
			href: "/blocks",
			label: "Blocks",
		},
		{
			href: "/charts/area",
			label: "Charts",
		},
		{
			href: "/docs/rtl",
			label: "RTL",
			notShownInHeader: true,
		},
		{
			href: "/docs/mcp",
			label: "MCP Server",
			notShownInHeader: true,
		},
		{
			href: "https://herocn.featurebase.app/roadmap",
			label: "Roadmap",
			isExternal: true,
		},
	],
};

export const PAGES_METADATA = new Map([
	[
		"/",
		{
			title: "herocn",
			description: "shadcn's abstraction. HeroUI's design system.",
		},
	],
	[
		"/blocks",
		{
			title: "Building Blocks for the Web",
			description:
				"Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.",
		},
	],
	[
		"/charts",
		{
			title: "Beautiful Charts & Graphs",
			description:
				"A collection of ready-to-use chart components built with Recharts. From basic charts to rich data displays, copy and paste into your apps.",
		},
	],
	[
		"/charts/area",
		{
			title: "Area Charts",
			description:
				"A collection of beautiful area charts built with Recharts. Copy and paste into your apps.",
		},
	],
	[
		"/charts/bar",
		{
			title: "Bar Charts",
			description:
				"A collection of beautiful bar charts built with Recharts. Copy and paste into your apps.",
		},
	],
	[
		"/charts/line",
		{
			title: "Line Charts",
			description:
				"A collection of beautiful line charts built with Recharts. Copy and paste into your apps.",
		},
	],
	[
		"/charts/pie",
		{
			title: "Pie Charts",
			description:
				"A collection of beautiful pie charts built with Recharts. Copy and paste into your apps.",
		},
	],
	[
		"/charts/radar",
		{
			title: "Radar Charts",
			description:
				"A collection of beautiful radar charts built with Recharts. Copy and paste into your apps.",
		},
	],
	[
		"/charts/radial",
		{
			title: "Radial Charts",
			description:
				"A collection of beautiful radial charts built with Recharts. Copy and paste into your apps.",
		},
	],
	[
		"/charts/tooltip",
		{
			title: "Tooltip Charts",
			description:
				"A collection of beautiful chart tooltips built with Recharts. Copy and paste into your apps.",
		},
	],
]);
