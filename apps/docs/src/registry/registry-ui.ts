import type { Registry } from "shadcn/schema";
import { css, cssVars } from "./shared";

export const ui: Registry["items"] = [
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
    registryDependencies: ["@herocn/separator"],
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
      "@herocn/button",
      "@herocn/input",
      "@herocn/textarea",
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
