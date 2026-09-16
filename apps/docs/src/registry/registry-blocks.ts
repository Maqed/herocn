import type { Registry } from "shadcn/schema";
import { getRegistryItemInstallationAlias } from "@/lib/utils";

export const blocks: Registry["items"] = [
	{
		name: "login-01",
		type: "registry:block",
		description: "A simple login form.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/login-01/page.tsx",
				type: "registry:page",
				target: "app/login/page.tsx",
			},
			{
				path: "blocks/login-01/components/login-form.tsx",
				type: "registry:component",
				target: "components/login-form.tsx",
			},
		],
		categories: ["authentication", "login"],
	},
	{
		name: "login-02",
		type: "registry:block",
		description: "A two column login page with a cover image.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/login-02/page.tsx",
				type: "registry:page",
				target: "app/login/page.tsx",
			},
			{
				path: "blocks/login-02/components/login-form.tsx",
				type: "registry:component",
				target: "components/login-form.tsx",
			},
		],
		categories: ["authentication", "login"],
	},
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
		name: "login-05",
		type: "registry:block",
		description: "A simple email-only login page.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/login-05/page.tsx",
				type: "registry:page",
				target: "app/login/page.tsx",
			},
			{
				path: "blocks/login-05/components/login-form.tsx",
				type: "registry:component",
				target: "components/login-form.tsx",
			},
		],
		categories: ["authentication", "login"],
	},
	{
		name: "signup-01",
		type: "registry:block",
		description: "A simple signup form.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/signup-01/page.tsx",
				type: "registry:page",
				target: "app/signup/page.tsx",
			},
			{
				path: "blocks/signup-01/components/signup-form.tsx",
				type: "registry:component",
				target: "components/signup-form.tsx",
			},
		],
		categories: ["authentication", "signup"],
	},
	{
		name: "signup-02",
		type: "registry:block",
		description: "A two column signup page with a cover image.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/signup-02/page.tsx",
				type: "registry:page",
				target: "app/signup/page.tsx",
			},
			{
				path: "blocks/signup-02/components/signup-form.tsx",
				type: "registry:component",
				target: "components/signup-form.tsx",
			},
		],
		categories: ["authentication", "signup"],
	},
	{
		name: "signup-03",
		type: "registry:block",
		description: "A signup page with a muted background color.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/signup-03/page.tsx",
				type: "registry:page",
				target: "app/signup/page.tsx",
			},
			{
				path: "blocks/signup-03/components/signup-form.tsx",
				type: "registry:component",
				target: "components/signup-form.tsx",
			},
		],
		categories: ["authentication", "signup"],
	},
	{
		name: "signup-04",
		type: "registry:block",
		description: "A signup page with form and image.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/signup-04/page.tsx",
				type: "registry:page",
				target: "app/signup/page.tsx",
			},
			{
				path: "blocks/signup-04/components/signup-form.tsx",
				type: "registry:component",
				target: "components/signup-form.tsx",
			},
		],
		categories: ["authentication", "signup"],
	},
	{
		name: "signup-05",
		type: "registry:block",
		description: "A simple signup form with social providers.",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "blocks/signup-05/page.tsx",
				type: "registry:page",
				target: "app/signup/page.tsx",
			},
			{
				path: "blocks/signup-05/components/signup-form.tsx",
				type: "registry:component",
				target: "components/signup-form.tsx",
			},
		],
		categories: ["authentication", "signup"],
	},
	{
		name: "sidebar-01",
		type: "registry:block",
		description: "A simple sidebar with navigation grouped by section.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
		files: [
			{
				path: "blocks/sidebar-01/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-01/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-01/components/search-form.tsx",
				type: "registry:component",
				target: "components/search-form.tsx",
			},
			{
				path: "blocks/sidebar-01/components/version-switcher.tsx",
				type: "registry:component",
				target: "components/version-switcher.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-02",
		type: "registry:block",
		description: "A sidebar with collapsible sections.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
		files: [
			{
				path: "blocks/sidebar-02/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-02/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-02/components/search-form.tsx",
				type: "registry:component",
				target: "components/search-form.tsx",
			},
			{
				path: "blocks/sidebar-02/components/version-switcher.tsx",
				type: "registry:component",
				target: "components/version-switcher.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
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
		name: "sidebar-04",
		type: "registry:block",
		description: "A floating sidebar with submenus.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
		],
		files: [
			{
				path: "blocks/sidebar-04/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-04/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-05",
		type: "registry:block",
		description: "A sidebar with collapsible submenus.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("collapsible"),
		],
		files: [
			{
				path: "blocks/sidebar-05/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-05/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-05/components/search-form.tsx",
				type: "registry:component",
				target: "components/search-form.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-06",
		type: "registry:block",
		description: "A sidebar with submenus as dropdowns.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
		files: [
			{
				path: "blocks/sidebar-06/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-06/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-06/components/nav-main.tsx",
				type: "registry:component",
				target: "components/nav-main.tsx",
			},
			{
				path: "blocks/sidebar-06/components/sidebar-opt-in-form.tsx",
				type: "registry:component",
				target: "components/sidebar-opt-in-form.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-08",
		type: "registry:block",
		description: "An inset sidebar with secondary navigation.",
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
				path: "blocks/sidebar-08/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-08/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-08/components/nav-main.tsx",
				type: "registry:component",
				target: "components/nav-main.tsx",
			},
			{
				path: "blocks/sidebar-08/components/nav-projects.tsx",
				type: "registry:component",
				target: "components/nav-projects.tsx",
			},
			{
				path: "blocks/sidebar-08/components/nav-secondary.tsx",
				type: "registry:component",
				target: "components/nav-secondary.tsx",
			},
			{
				path: "blocks/sidebar-08/components/nav-user.tsx",
				type: "registry:component",
				target: "components/nav-user.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-09",
		type: "registry:block",
		description: "Collapsible nested sidebars.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("collapsible"),
			getRegistryItemInstallationAlias("dropdown-menu"),
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("switch"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "blocks/sidebar-09/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-09/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-09/components/nav-user.tsx",
				type: "registry:component",
				target: "components/nav-user.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-10",
		type: "registry:block",
		description: "A sidebar in a popover.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("popover"),
			getRegistryItemInstallationAlias("collapsible"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
		files: [
			{
				path: "blocks/sidebar-10/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-10/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-10/components/nav-actions.tsx",
				type: "registry:component",
				target: "components/nav-actions.tsx",
			},
			{
				path: "blocks/sidebar-10/components/nav-favorites.tsx",
				type: "registry:component",
				target: "components/nav-favorites.tsx",
			},
			{
				path: "blocks/sidebar-10/components/nav-main.tsx",
				type: "registry:component",
				target: "components/nav-main.tsx",
			},
			{
				path: "blocks/sidebar-10/components/nav-secondary.tsx",
				type: "registry:component",
				target: "components/nav-secondary.tsx",
			},
			{
				path: "blocks/sidebar-10/components/nav-workspaces.tsx",
				type: "registry:component",
				target: "components/nav-workspaces.tsx",
			},
			{
				path: "blocks/sidebar-10/components/team-switcher.tsx",
				type: "registry:component",
				target: "components/team-switcher.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-11",
		type: "registry:block",
		description: "A sidebar with a collapsible file tree.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("collapsible"),
		],
		files: [
			{
				path: "blocks/sidebar-11/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-11/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-12",
		type: "registry:block",
		description: "A sidebar with a calendar.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("collapsible"),
			getRegistryItemInstallationAlias("calendar"),
			getRegistryItemInstallationAlias("dropdown-menu"),
			getRegistryItemInstallationAlias("avatar"),
		],
		files: [
			{
				path: "blocks/sidebar-12/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-12/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-12/components/calendars.tsx",
				type: "registry:component",
				target: "components/calendars.tsx",
			},
			{
				path: "blocks/sidebar-12/components/date-picker.tsx",
				type: "registry:component",
				target: "components/date-picker.tsx",
			},
			{
				path: "blocks/sidebar-12/components/nav-user.tsx",
				type: "registry:component",
				target: "components/nav-user.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-13",
		type: "registry:block",
		description: "A sidebar in a dialog.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dialog"),
		],
		files: [
			{
				path: "blocks/sidebar-13/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-13/components/settings-dialog.tsx",
				type: "registry:component",
				target: "components/settings-dialog.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-14",
		type: "registry:block",
		description: "A sidebar on the right.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
		],
		files: [
			{
				path: "blocks/sidebar-14/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-14/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-15",
		type: "registry:block",
		description: "A left and right sidebar.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("popover"),
			getRegistryItemInstallationAlias("collapsible"),
			getRegistryItemInstallationAlias("dropdown-menu"),
			getRegistryItemInstallationAlias("calendar"),
			getRegistryItemInstallationAlias("avatar"),
		],
		files: [
			{
				path: "blocks/sidebar-15/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-15/components/calendars.tsx",
				type: "registry:component",
				target: "components/calendars.tsx",
			},
			{
				path: "blocks/sidebar-15/components/date-picker.tsx",
				type: "registry:component",
				target: "components/date-picker.tsx",
			},
			{
				path: "blocks/sidebar-15/components/nav-favorites.tsx",
				type: "registry:component",
				target: "components/nav-favorites.tsx",
			},
			{
				path: "blocks/sidebar-15/components/nav-main.tsx",
				type: "registry:component",
				target: "components/nav-main.tsx",
			},
			{
				path: "blocks/sidebar-15/components/nav-secondary.tsx",
				type: "registry:component",
				target: "components/nav-secondary.tsx",
			},
			{
				path: "blocks/sidebar-15/components/nav-user.tsx",
				type: "registry:component",
				target: "components/nav-user.tsx",
			},
			{
				path: "blocks/sidebar-15/components/nav-workspaces.tsx",
				type: "registry:component",
				target: "components/nav-workspaces.tsx",
			},
			{
				path: "blocks/sidebar-15/components/sidebar-left.tsx",
				type: "registry:component",
				target: "components/sidebar-left.tsx",
			},
			{
				path: "blocks/sidebar-15/components/sidebar-right.tsx",
				type: "registry:component",
				target: "components/sidebar-right.tsx",
			},
			{
				path: "blocks/sidebar-15/components/team-switcher.tsx",
				type: "registry:component",
				target: "components/team-switcher.tsx",
			},
		],
		categories: ["sidebar", "dashboard"],
	},
	{
		name: "sidebar-16",
		type: "registry:block",
		description: "A sidebar with a sticky site header.",
		registryDependencies: [
			getRegistryItemInstallationAlias("sidebar"),
			getRegistryItemInstallationAlias("breadcrumb"),
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("collapsible"),
			getRegistryItemInstallationAlias("dropdown-menu"),
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "blocks/sidebar-16/page.tsx",
				type: "registry:page",
				target: "app/dashboard/page.tsx",
			},
			{
				path: "blocks/sidebar-16/components/app-sidebar.tsx",
				type: "registry:component",
				target: "components/app-sidebar.tsx",
			},
			{
				path: "blocks/sidebar-16/components/nav-main.tsx",
				type: "registry:component",
				target: "components/nav-main.tsx",
			},
			{
				path: "blocks/sidebar-16/components/nav-projects.tsx",
				type: "registry:component",
				target: "components/nav-projects.tsx",
			},
			{
				path: "blocks/sidebar-16/components/nav-secondary.tsx",
				type: "registry:component",
				target: "components/nav-secondary.tsx",
			},
			{
				path: "blocks/sidebar-16/components/nav-user.tsx",
				type: "registry:component",
				target: "components/nav-user.tsx",
			},
			{
				path: "blocks/sidebar-16/components/search-form.tsx",
				type: "registry:component",
				target: "components/search-form.tsx",
			},
			{
				path: "blocks/sidebar-16/components/site-header.tsx",
				type: "registry:component",
				target: "components/site-header.tsx",
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
