import type { Registry } from "shadcn/schema";
import { getRegistryItemInstallationAlias } from "@/lib/utils";
import { css, cssVars } from "./shared";

export const ui: Registry["items"] = [
	{
		name: "alert",
		type: "registry:ui",
		dependencies: ["class-variance-authority"],
		files: [
			{
				path: "ui/alert.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--success": cssVars.light["--success"],
				"--warning": cssVars.light["--warning"],
			},
			dark: {
				"--warning": cssVars.dark["--warning"],
			},
			theme: {
				"--color-success": cssVars.theme["--color-success"],
				"--color-warning": cssVars.theme["--color-warning"],
			},
		},
	},
	{
		name: "alert-dialog",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		registryDependencies: [getRegistryItemInstallationAlias("button")],
		files: [
			{
				path: "ui/alert-dialog.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "avatar",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/avatar.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--eclipse": cssVars.light["--eclipse"],
				"--snow": cssVars.light["--snow"],
				"--default": cssVars.light["--default"],
				"--default-foreground": cssVars.light["--default-foreground"],
				"--destructive-foreground": cssVars.light["--destructive-foreground"],
				"--success": cssVars.light["--success"],
				"--warning": cssVars.light["--warning"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--default-foreground": cssVars.dark["--default-foreground"],
				"--destructive-foreground": cssVars.dark["--destructive-foreground"],
				"--warning": cssVars.dark["--warning"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-default-foreground":
					cssVars.theme["--color-default-foreground"],
				"--color-destructive-foreground":
					cssVars.theme["--color-destructive-foreground"],
				"--color-success": cssVars.theme["--color-success"],
				"--color-warning": cssVars.theme["--color-warning"],
			},
		},
	},
	{
		name: "button",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/button.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--eclipse": cssVars.light["--eclipse"],
				"--snow": cssVars.light["--snow"],
				"--default": cssVars.light["--default"],
				"--default-foreground": cssVars.light["--default-foreground"],
				"--destructive-foreground": cssVars.light["--destructive-foreground"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--default-foreground": cssVars.dark["--default-foreground"],
				"--destructive-foreground": cssVars.dark["--destructive-foreground"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-default-foreground":
					cssVars.theme["--color-default-foreground"],
				"--color-destructive-foreground":
					cssVars.theme["--color-destructive-foreground"],
			},
		},
		css: {
			"@utility pressible": css["@utility pressible"],
			"@utility focus-ring": css["@utility focus-ring"],
		},
	},
	{
		name: "button-group",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		registryDependencies: [getRegistryItemInstallationAlias("separator")],
		files: [
			{
				path: "ui/button-group.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "badge",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/badge.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--eclipse": cssVars.light["--eclipse"],
				"--snow": cssVars.light["--snow"],
				"--default": cssVars.light["--default"],
				"--default-foreground": cssVars.light["--default-foreground"],
				"--destructive-foreground": cssVars.light["--destructive-foreground"],
				"--success": cssVars.light["--success"],
				"--warning": cssVars.light["--warning"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--default-foreground": cssVars.dark["--default-foreground"],
				"--destructive-foreground": cssVars.dark["--destructive-foreground"],
				"--warning": cssVars.dark["--warning"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-default-foreground":
					cssVars.theme["--color-default-foreground"],
				"--color-destructive-foreground":
					cssVars.theme["--color-destructive-foreground"],
				"--color-success": cssVars.theme["--color-success"],
				"--color-warning": cssVars.theme["--color-warning"],
			},
		},
	},
	{
		name: "card",
		type: "registry:ui",
		files: [
			{
				path: "ui/card.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--surface": cssVars.light["--surface"],
				"--surface-secondary": cssVars.light["--surface-secondary"],
				"--surface-tertiary": cssVars.light["--surface-tertiary"],
			},
			dark: {
				"--surface": cssVars.dark["--surface"],
				"--surface-secondary": cssVars.dark["--surface-secondary"],
				"--surface-tertiary": cssVars.dark["--surface-tertiary"],
			},
			theme: {
				"--color-surface": cssVars.theme["--color-surface"],
				"--color-surface-secondary": cssVars.theme["--color-surface-secondary"],
				"--color-surface-tertiary": cssVars.theme["--color-surface-tertiary"],
			},
		},
	},
	{
		name: "checkbox",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/checkbox.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--default": cssVars.light["--default"],
				"--destructive": cssVars.light["--destructive"],
				"--destructive-foreground": cssVars.light["--destructive-foreground"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--destructive": cssVars.dark["--destructive"],
				"--destructive-foreground": cssVars.dark["--destructive-foreground"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-destructive": cssVars.theme["--color-destructive"],
				"--color-destructive-foreground":
					cssVars.theme["--color-destructive-foreground"],
			},
		},
		css: {
			"@utility focus-ring": css["@utility focus-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
	{
		name: "collapsible",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/collapsible.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "combobox",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("input-group"),
		],
		files: [
			{
				path: "ui/combobox.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--default": cssVars.light["--default"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
			},
		},
		css: {
			"@utility focus-field-ring": css["@utility focus-field-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
	{
		name: "context-menu",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		files: [
			{
				path: "ui/context-menu.tsx",
				type: "registry:ui",
			},
		],
		css: {
			"@utility focus-ring": css["@utility focus-ring"],
		},
	},
	{
		name: "popover",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		files: [
			{
				path: "ui/popover.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "progress",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/progress.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--eclipse": cssVars.light["--eclipse"],
				"--snow": cssVars.light["--snow"],
				"--default": cssVars.light["--default"],
				"--default-foreground": cssVars.light["--default-foreground"],
				"--success": cssVars.light["--success"],
				"--warning": cssVars.light["--warning"],
				"--destructive": cssVars.light["--destructive"],
				"--muted-foreground": cssVars.light["--muted-foreground"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--default-foreground": cssVars.dark["--default-foreground"],
				"--warning": cssVars.dark["--warning"],
				"--destructive": cssVars.dark["--destructive"],
				"--muted-foreground": cssVars.dark["--muted-foreground"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-default-foreground":
					cssVars.theme["--color-default-foreground"],
				"--color-success": cssVars.theme["--color-success"],
				"--color-warning": cssVars.theme["--color-warning"],
				"--color-destructive": cssVars.theme["--color-destructive"],
				"--color-muted-foreground": cssVars.theme["--color-muted-foreground"],
			},
		},
	},
	{
		name: "tooltip",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/tooltip.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "dropdown-menu",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		files: [
			{
				path: "ui/dropdown-menu.tsx",
				type: "registry:ui",
			},
		],
		css: {
			"@utility focus-ring": css["@utility focus-ring"],
		},
	},
	{
		name: "empty",
		type: "registry:ui",
		dependencies: ["class-variance-authority"],
		files: [
			{
				path: "ui/empty.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "dialog",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		registryDependencies: [getRegistryItemInstallationAlias("button")],
		files: [
			{
				path: "ui/dialog.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "sheet",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		registryDependencies: [getRegistryItemInstallationAlias("button")],
		files: [
			{
				path: "ui/sheet.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "field",
		type: "registry:ui",
		dependencies: ["class-variance-authority"],
		registryDependencies: [
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("separator"),
		],
		files: [
			{
				path: "ui/field.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "hover-card",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		files: [
			{
				path: "ui/hover-card.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "surface",
		type: "registry:ui",
		files: [
			{
				path: "ui/surface.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--surface": cssVars.light["--surface"],
				"--surface-secondary": cssVars.light["--surface-secondary"],
				"--surface-tertiary": cssVars.light["--surface-tertiary"],
			},
			dark: {
				"--surface": cssVars.dark["--surface"],
				"--surface-secondary": cssVars.dark["--surface-secondary"],
				"--surface-tertiary": cssVars.dark["--surface-tertiary"],
			},
			theme: {
				"--color-surface": cssVars.theme["--color-surface"],
				"--color-surface-secondary": cssVars.theme["--color-surface-secondary"],
				"--color-surface-tertiary": cssVars.theme["--color-surface-tertiary"],
			},
		},
	},
	{
		name: "scroll-area",
		type: "registry:ui",
		files: [
			{
				path: "ui/scroll-area.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "sheet",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		registryDependencies: [getRegistryItemInstallationAlias("button")],
		files: [
			{
				path: "ui/sheet.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "input",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/input.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--eclipse": cssVars.light["--eclipse"],
				"--snow": cssVars.light["--snow"],
				"--default": cssVars.light["--default"],
				"--default-foreground": cssVars.light["--default-foreground"],
				"--destructive-foreground": cssVars.light["--destructive-foreground"],
				"--surface-secondary": cssVars.light["--surface-secondary"],
				"--surface-tertiary": cssVars.light["--surface-tertiary"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--default-foreground": cssVars.dark["--default-foreground"],
				"--destructive-foreground": cssVars.dark["--destructive-foreground"],
				"--surface-secondary": cssVars.dark["--surface-secondary"],
				"--surface-tertiary": cssVars.dark["--surface-tertiary"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-default-foreground":
					cssVars.theme["--color-default-foreground"],
				"--color-destructive-foreground":
					cssVars.theme["--color-destructive-foreground"],
				"--color-surface-secondary": cssVars.theme["--color-surface-secondary"],
				"--color-surface-tertiary": cssVars.theme["--color-surface-tertiary"],
			},
		},
		css: {
			"@utility focus-field-ring": css["@utility focus-field-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
	{
		name: "input-group",
		type: "registry:ui",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("textarea"),
		],
		files: [
			{
				path: "ui/input-group.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--default": cssVars.light["--default"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
			},
		},
		css: {
			"@utility focus-field-ring": css["@utility focus-field-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
	{
		name: "item",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "class-variance-authority"],
		registryDependencies: [getRegistryItemInstallationAlias("separator")],
		files: [
			{
				path: "ui/item.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--surface": cssVars.light["--surface"],
				"--surface-secondary": cssVars.light["--surface-secondary"],
				"--surface-tertiary": cssVars.light["--surface-tertiary"],
			},
			dark: {
				"--surface": cssVars.dark["--surface"],
				"--surface-secondary": cssVars.dark["--surface-secondary"],
				"--surface-tertiary": cssVars.dark["--surface-tertiary"],
			},
			theme: {
				"--color-surface": cssVars.theme["--color-surface"],
				"--color-surface-secondary": cssVars.theme["--color-surface-secondary"],
				"--color-surface-tertiary": cssVars.theme["--color-surface-tertiary"],
			},
		},
		css: {
			"@utility focus-ring": css["@utility focus-ring"],
		},
	},
	{
		name: "kbd",
		type: "registry:ui",
		files: [
			{
				path: "ui/kbd.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--default": cssVars.light["--default"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
			},
		},
	},
	{
		name: "label",
		type: "registry:ui",
		files: [
			{
				path: "ui/label.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "native-select",
		type: "registry:ui",
		dependencies: ["lucide-react"],
		files: [
			{
				path: "ui/native-select.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--default": cssVars.light["--default"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
			},
		},
		css: {
			"@utility focus-field-ring": css["@utility focus-field-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
	{
		name: "select",
		type: "registry:ui",
		dependencies: ["@base-ui/react", "lucide-react"],
		files: [
			{
				path: "ui/select.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--surface-secondary": cssVars.light["--surface-secondary"],
			},
			dark: {
				"--surface-secondary": cssVars.dark["--surface-secondary"],
			},
			theme: {
				"--color-surface-secondary": cssVars.theme["--color-surface-secondary"],
			},
		},
		css: {
			"@utility pressible": css["@utility pressible"],
			"@utility focus-ring": css["@utility focus-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
	{
		name: "separator",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/separator.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "switch",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/switch.tsx",
				type: "registry:ui",
			},
		],
		css: {
			"@utility focus-ring": css["@utility focus-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
	{
		name: "checkbox",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/checkbox.tsx",
				type: "registry:ui",
			},
		],
		css: {
			"@utility focus-ring": css["@utility focus-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
	{
		name: "slider",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/slider.tsx",
				type: "registry:ui",
			},
		],
		css: {
			"@utility focus-ring": css["@utility focus-ring"],
		},
	},
	{
		name: "sonner",
		type: "registry:ui",
		dependencies: ["lucide-react", "next-themes", "sonner"],
		files: [
			{
				path: "ui/sonner.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--surface": cssVars.light["--surface"],
				"--success": cssVars.light["--success"],
				"--warning": cssVars.light["--warning"],
				"--default": cssVars.light["--default"],
				"--default-foreground": cssVars.light["--default-foreground"],
			},
			dark: {
				"--surface": cssVars.dark["--surface"],
				"--warning": cssVars.dark["--warning"],
				"--default": cssVars.dark["--default"],
				"--default-foreground": cssVars.dark["--default-foreground"],
			},
			theme: {
				"--color-surface": cssVars.theme["--color-surface"],
				"--color-success": cssVars.theme["--color-success"],
				"--color-warning": cssVars.theme["--color-warning"],
				"--color-default": cssVars.theme["--color-default"],
				"--color-default-foreground":
					cssVars.theme["--color-default-foreground"],
			},
		},
		css: {
			"@utility pressible": css["@utility pressible"],
		},
	},
	{
		name: "skeleton",
		type: "registry:ui",
		dependencies: ["class-variance-authority"],
		files: [
			{
				path: "ui/skeleton.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--surface-tertiary": cssVars.light["--surface-tertiary"],
			},
			dark: {
				"--surface-tertiary": cssVars.dark["--surface-tertiary"],
			},
			theme: {
				"--color-surface-tertiary": cssVars.theme["--color-surface-tertiary"],
				"--animate-skeleton": cssVars.theme["--animate-skeleton"],
			},
		},
		css: {
			"@keyframes skeleton": css["@keyframes skeleton"],
			".skeleton--shimmer": css[".skeleton--shimmer"],
			".skeleton--shimmer::after": css[".skeleton--shimmer::after"],
			".skeleton--shimmer:has(.skeleton)::after":
				css[".skeleton--shimmer:has(.skeleton)::after"],
			".skeleton--shimmer:has(.skeleton)::before":
				css[".skeleton--shimmer:has(.skeleton)::before"],
			".skeleton--shimmer:has(.skeleton) .skeleton::after":
				css[".skeleton--shimmer:has(.skeleton) .skeleton::after"],
		},
	},
	{
		name: "spinner",
		type: "registry:ui",
		dependencies: ["class-variance-authority"],
		files: [
			{
				path: "ui/spinner.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--success": cssVars.light["--success"],
				"--warning": cssVars.light["--warning"],
			},
			dark: {
				"--warning": cssVars.dark["--warning"],
			},
			theme: {
				"--color-success": cssVars.theme["--color-success"],
				"--color-warning": cssVars.theme["--color-warning"],
			},
		},
	},
	{
		name: "tabs",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/tabs.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--default": cssVars.light["--default"],
				"--surface": cssVars.light["--surface"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--surface": cssVars.dark["--surface"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-surface": cssVars.theme["--color-surface"],
			},
		},
		css: {
			"@utility focus-ring": css["@utility focus-ring"],
		},
	},
	{
		name: "toggle",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		files: [
			{
				path: "ui/toggle.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--eclipse": cssVars.light["--eclipse"],
				"--snow": cssVars.light["--snow"],
				"--default": cssVars.light["--default"],
				"--default-foreground": cssVars.light["--default-foreground"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--default-foreground": cssVars.dark["--default-foreground"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-default-foreground":
					cssVars.theme["--color-default-foreground"],
			},
		},
		css: {
			"@utility pressible": css["@utility pressible"],
			"@utility focus-field-ring": css["@utility focus-field-ring"],
		},
	},
	{
		name: "toggle-group",
		type: "registry:ui",
		dependencies: ["@base-ui/react"],
		registryDependencies: [getRegistryItemInstallationAlias("toggle")],
		files: [
			{
				path: "ui/toggle-group.tsx",
				type: "registry:ui",
			},
		],
	},
	{
		name: "textarea",
		type: "registry:ui",
		files: [
			{
				path: "ui/textarea.tsx",
				type: "registry:ui",
			},
		],
		cssVars: {
			light: {
				"--eclipse": cssVars.light["--eclipse"],
				"--snow": cssVars.light["--snow"],
				"--default": cssVars.light["--default"],
				"--default-foreground": cssVars.light["--default-foreground"],
				"--destructive-foreground": cssVars.light["--destructive-foreground"],
			},
			dark: {
				"--default": cssVars.dark["--default"],
				"--default-foreground": cssVars.dark["--default-foreground"],
				"--destructive-foreground": cssVars.dark["--destructive-foreground"],
			},
			theme: {
				"--color-default": cssVars.theme["--color-default"],
				"--color-default-foreground":
					cssVars.theme["--color-default-foreground"],
				"--color-destructive-foreground":
					cssVars.theme["--color-destructive-foreground"],
			},
		},
		css: {
			"@utility focus-field-ring": css["@utility focus-field-ring"],
			"@utility invalid-field-ring": css["@utility invalid-field-ring"],
			"@utility invalid-field-ring-focus":
				css["@utility invalid-field-ring-focus"],
		},
	},
];
