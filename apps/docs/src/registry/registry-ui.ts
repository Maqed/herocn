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
    name: "dropdown-menu",
    type: "registry:ui",
    dependencies: ["@base-ui/react"],
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
];
