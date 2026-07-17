import type { Registry, RegistryItem } from "shadcn/schema";
import { siteConfig } from "@/lib/config";
import { getRegistryItemInstallationAlias } from "@/lib/utils";
import { examples } from "./registry-examples";
import { ui } from "./registry-ui";
import { css, cssVars } from "./shared";

// Shared between index and style for backward compatibility.
export const HEROCN_REGISTRY_STYLE = {
	type: "registry:style",
	dependencies: ["@base-ui/react", "class-variance-authority", "lucide-react"],
	devDependencies: ["tw-animate-css"],
	registryDependencies: ["utils", getRegistryItemInstallationAlias("ui")],
	cssVars,
	css,
	files: [],
} satisfies Omit<RegistryItem, "name">;

export const registry = {
	name: "herocn",
	homepage: siteConfig.url,
	items: [
		{
			name: "index",
			...HEROCN_REGISTRY_STYLE,
		},
		{
			name: "style",
			...HEROCN_REGISTRY_STYLE,
		},
		...ui,
		...examples,
	] satisfies Registry["items"],
} satisfies Registry;
