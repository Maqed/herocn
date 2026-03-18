import type { Registry } from "shadcn/schema";
import { siteConfig } from "@/lib/config";
import { examples } from "./registry-examples";
import { ui } from "./registry-ui";
import { css, cssVars } from "./shared";

// Shared between index and style for backward compatibility.
const HEROCN_STYLE = {
  type: "registry:style" as const,
  dependencies: ["@base-ui/react", "class-variance-authority", "lucide-react"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils", "@herocn/ui"],
  cssVars,
  css,
  files: [],
};

export const registry = {
  name: "herocn",
  homepage: siteConfig.url,
  items: [
    {
      name: "index",
      ...HEROCN_STYLE,
    },
    {
      name: "style",
      ...HEROCN_STYLE,
    },
    ...ui,
    ...examples,
  ] satisfies Registry["items"],
} satisfies Registry;
