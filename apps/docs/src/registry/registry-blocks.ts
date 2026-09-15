import type { Registry } from "shadcn/schema";
import { getRegistryItemInstallationAlias } from "@/lib/utils";

export const blocks: Registry["items"] = [
	{
		name: "login-03",
		type: "registry:block",
		description: "A login page with a muted background color.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/login-03/page.tsx",
				type: "registry:page",
				target: "app/login/page.tsx",
			},
			{
				path: "blocks/login-03/components/login-form.tsx",
				type: "registry:component",
				target: "components/login-form.tsx",
			},
		],
		categories: ["authentication", "login"],
	},
	{
		name: "login-04",
		type: "registry:block",
		description: "A login page with form and image.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/login-04/page.tsx",
				type: "registry:page",
				target: "app/login/page.tsx",
			},
			{
				path: "blocks/login-04/components/login-form.tsx",
				type: "registry:component",
				target: "components/login-form.tsx",
			},
		],
		categories: ["authentication", "login"],
	},
	{
		name: "sidebar-03",
		type: "registry:block",
		description: "A sidebar with submenus.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
		],
		files: [
			{
				path: "blocks/sidebar-03/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-03/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-07",
		type: "registry:block",
		description: "A sidebar that collapses to icons.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("collapsible"),
			getRegistryItemInstallationAlias("dropdown-menu"),
			getRegistryItemInstallationAlias("avatar"),
		],
		files: [
			{
				path: "blocks/sidebar-07/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-07/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-07/components/nav-main.tsx",
				type: "registry:component",
				target: "components/nav-main.tsx",
			},
			{
				path: "blocks/sidebar-07/components/nav-projects.tsx",
				type: "registry:component",
				target: "components/nav-projects.tsx",
			},
			{
				path: "blocks/sidebar-07/components/nav-user.tsx",
				type: "registry:component",
				target: "components/nav-user.tsx",
			},
			{
				path: "blocks/sidebar-07/components/team-switcher.tsx",
				type: "registry:component",
				target: "components/team-switcher.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "dashboard-01",
		type: "registry:block",
		description: "A dashboard with sidebar, charts and data table.",
		dependencies: [
			"@dnd-kit/core",
			"@dnd-kit/modifiers",
			"@dnd-kit/sortable",
			"@dnd-kit/utilities",
			"@tanstack/react-table",
			"zod",
		],
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("chart"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("select"),
			getRegistryItemInstallationAlias("tabs"),
			getRegistryItemInstallationAlias("table"),
			getRegistryItemInstallationAlias("toggle-group"),
			getRegistryItemInstallationAlias("badge"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("dropdown-menu"),
			getRegistryItemInstallationAlias("drawer"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("sheet"),
			getRegistryItemInstallationAlias("toast"),
		],
		files: [
			{
				path: "blocks/dashboard-01/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/dashboard-01/data.json",
				type: "registry:file",
				target: "app/dashboard/data.json",
			},
			{
				path: "blocks/dashboard-01/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/dashboard-01/components/chart-area-interactive.tsx",
				type: "registry:component",
				target: "components/chart-area-interactive.tsx",
			},
			{
				path: "blocks/dashboard-01/components/data-table.tsx",
				type: "registry:component",
				target: "components/data-table.tsx",
			},
			{
				path: "blocks/dashboard-01/components/nav-documents.tsx",
				type: "registry:component",
				target: "components/nav-documents.tsx",
			},
			{
				path: "blocks/dashboard-01/components/nav-main.tsx",
				type: "registry:component",
				target: "components/nav-main.tsx",
			},
			{
				path: "blocks/dashboard-01/components/nav-secondary.tsx",
				type: "registry:component",
				target: "components/nav-secondary.tsx",
			},
			{
				path: "blocks/dashboard-01/components/nav-user.tsx",
				type: "registry:component",
				target: "components/nav-user.tsx",
			},
			{
				path: "blocks/dashboard-01/components/section-cards.tsx",
				type: "registry:component",
				target: "components/section-cards.tsx",
			},
			{
				path: "blocks/dashboard-01/components/site-header.tsx",
				type: "registry:component",
				target: "components/site-header.tsx",
			},
		],
		categories: ["dashboard"],
		meta: {
			iframeHeight: "1000px",
		},
	},
];
