import type { Registry } from "shadcn/schema";
import { siteConfig } from "@/lib/config";
import { examples } from "./registry-examples";
import { ui } from "./registry-ui";
import { css, cssVars } from "./shared";

// Shared between index and style for backward compatibility.
const MAQEDUI_STYLE = {
  type: "registry:style" as const,
  dependencies: ["class-variance-authority", "lucide-react"],
  devDependencies: ["tw-animate-css"],
  registryDependencies: ["utils"],
  cssVars,
  css,
  files: [],
};

export const registry = {
  name: "maqedui/ui",
  homepage: siteConfig.url,
  items: [
    {
      name: "index",
      ...MAQEDUI_STYLE,
    },
    {
      name: "style",
      ...MAQEDUI_STYLE,
    },
    ...ui,
    ...examples,
  ] satisfies Registry["items"],
} satisfies Registry;
