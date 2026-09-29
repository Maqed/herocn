import type { Registry } from "shadcn/schema";
import { getRegistryItemInstallationAlias } from "@/lib/utils";

export const charts: Registry["items"] = [
	{
		name: "chart-area-axes",
		type: "registry:block",
		description: "An area chart with axes",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-axes.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-default",
		type: "registry:block",
		description: "A simple area chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-default.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-gradient",
		type: "registry:block",
		description: "An area chart with gradient fill",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-gradient.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-icons",
		type: "registry:block",
		description: "An area chart with icons",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-icons.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-interactive",
		type: "registry:block",
		description: "An interactive area chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
			getRegistryItemInstallationAlias("select"),
		],
		files: [
			{
				path: "charts/chart-area-interactive.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-legend",
		type: "registry:block",
		description: "An area chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-legend.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-linear",
		type: "registry:block",
		description: "A linear area chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-linear.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-stacked",
		type: "registry:block",
		description: "A stacked area chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-stacked.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-stacked-expand",
		type: "registry:block",
		description: "A stacked area chart with expand stacking",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-stacked-expand.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-area-step",
		type: "registry:block",
		description: "A step area chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-area-step.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-area"],
	},
	{
		name: "chart-bar-active",
		type: "registry:block",
		description: "A bar chart with an active bar",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-active.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-default",
		type: "registry:block",
		description: "A bar chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-default.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-horizontal",
		type: "registry:block",
		description: "A horizontal bar chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-horizontal.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-interactive",
		type: "registry:block",
		description: "An interactive bar chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-interactive.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-label",
		type: "registry:block",
		description: "A bar chart with a label",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-label.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-label-custom",
		type: "registry:block",
		description: "A bar chart with a custom label",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-label-custom.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-mixed",
		type: "registry:block",
		description: "A mixed bar chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-mixed.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-multiple",
		type: "registry:block",
		description: "A multiple bar chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-multiple.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-negative",
		type: "registry:block",
		description: "A bar chart with negative values",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-negative.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-bar-stacked",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-bar-stacked.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-bar"],
	},
	{
		name: "chart-line-default",
		type: "registry:block",
		description: "A line chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-default.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-dots",
		type: "registry:block",
		description: "A line chart with dots",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-dots.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-dots-colors",
		type: "registry:block",
		description: "A line chart with dots and colors",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-dots-colors.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-dots-custom",
		type: "registry:block",
		description: "A line chart with custom dots",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-dots-custom.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-interactive",
		type: "registry:block",
		description: "An interactive line chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-interactive.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-label",
		type: "registry:block",
		description: "A line chart with a label",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-label.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-label-custom",
		type: "registry:block",
		description: "A line chart with a custom label",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-label-custom.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-linear",
		type: "registry:block",
		description: "A linear line chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-linear.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-multiple",
		type: "registry:block",
		description: "A multiple line chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-multiple.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-line-step",
		type: "registry:block",
		description: "A line chart with step",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-line-step.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-line"],
	},
	{
		name: "chart-pie-donut",
		type: "registry:block",
		description: "A donut chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-donut.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-donut-active",
		type: "registry:block",
		description: "A donut chart with an active sector",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-donut-active.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-donut-text",
		type: "registry:block",
		description: "A donut chart with text",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-donut-text.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-interactive",
		type: "registry:block",
		description: "An interactive pie chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
			getRegistryItemInstallationAlias("select"),
		],
		files: [
			{
				path: "charts/chart-pie-interactive.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-label",
		type: "registry:block",
		description: "A pie chart with a label",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-label.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-label-custom",
		type: "registry:block",
		description: "A pie chart with a custom label",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-label-custom.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-label-list",
		type: "registry:block",
		description: "A pie chart with a label list",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-label-list.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-legend",
		type: "registry:block",
		description: "A pie chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-legend.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-separator-none",
		type: "registry:block",
		description: "A pie chart with no separator",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-separator-none.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-simple",
		type: "registry:block",
		description: "A simple pie chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-simple.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-pie-stacked",
		type: "registry:block",
		description: "A pie chart with stacked sections",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-pie-stacked.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-pie"],
	},
	{
		name: "chart-radar-default",
		type: "registry:block",
		description: "A radar chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-default.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-dots",
		type: "registry:block",
		description: "A radar chart with dots",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-dots.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-grid-circle",
		type: "registry:block",
		description: "A radar chart with a grid and circle",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-grid-circle.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-grid-circle-fill",
		type: "registry:block",
		description: "A radar chart with a grid and circle fill",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-grid-circle-fill.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-grid-circle-no-lines",
		type: "registry:block",
		description: "A radar chart with a grid and circle fill",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-grid-circle-no-lines.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-grid-custom",
		type: "registry:block",
		description: "A radar chart with a custom grid",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-grid-custom.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-grid-fill",
		type: "registry:block",
		description: "A radar chart with a grid filled",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-grid-fill.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-grid-none",
		type: "registry:block",
		description: "A radar chart with no grid",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-grid-none.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-icons",
		type: "registry:block",
		description: "A radar chart with icons",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-icons.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-label-custom",
		type: "registry:block",
		description: "A radar chart with a custom label",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-label-custom.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-legend",
		type: "registry:block",
		description: "A radar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-legend.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-lines-only",
		type: "registry:block",
		description: "A radar chart with lines only",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-lines-only.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-multiple",
		type: "registry:block",
		description: "A radar chart with multiple data",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-multiple.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radar-radius",
		type: "registry:block",
		description: "A radar chart with a radius axis",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radar-radius.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radar"],
	},
	{
		name: "chart-radial-grid",
		type: "registry:block",
		description: "A radial chart with a grid",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radial-grid.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radial"],
	},
	{
		name: "chart-radial-label",
		type: "registry:block",
		description: "A radial chart with a label",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radial-label.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radial"],
	},
	{
		name: "chart-radial-shape",
		type: "registry:block",
		description: "A radial chart with a custom shape",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radial-shape.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radial"],
	},
	{
		name: "chart-radial-simple",
		type: "registry:block",
		description: "A radial chart",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radial-simple.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radial"],
	},
	{
		name: "chart-radial-stacked",
		type: "registry:block",
		description: "A radial chart with stacked sections",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radial-stacked.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radial"],
	},
	{
		name: "chart-radial-text",
		type: "registry:block",
		description: "A radial chart with text",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-radial-text.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-radial"],
	},
	{
		name: "chart-tooltip-advanced",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-advanced.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
	{
		name: "chart-tooltip-default",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-default.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
	{
		name: "chart-tooltip-formatter",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-formatter.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
	{
		name: "chart-tooltip-icons",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-icons.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
	{
		name: "chart-tooltip-indicator-line",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-indicator-line.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
	{
		name: "chart-tooltip-indicator-none",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-indicator-none.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
	{
		name: "chart-tooltip-label-custom",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-label-custom.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
	{
		name: "chart-tooltip-label-formatter",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-label-formatter.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
	{
		name: "chart-tooltip-label-none",
		type: "registry:block",
		description: "A stacked bar chart with a legend",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("chart"),
		],
		files: [
			{
				path: "charts/chart-tooltip-label-none.tsx",
				type: "registry:block",
			},
		],
		categories: ["charts", "charts-tooltip"],
	},
];
