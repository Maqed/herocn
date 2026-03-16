import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-variants",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-sizes",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-sizes.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-icons",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-icons.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "collapsible-demo",
    type: "registry:example",
    registryDependencies: ["collapsible"],
    files: [
      {
        path: "examples/collapsible-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "collapsible-basic",
    type: "registry:example",
    registryDependencies: ["collapsible"],
    files: [
      {
        path: "examples/collapsible-basic.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "collapsible-settings",
    type: "registry:example",
    registryDependencies: ["collapsible"],
    files: [
      {
        path: "examples/collapsible-settings.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "collapsible-file-tree",
    type: "registry:example",
    registryDependencies: ["collapsible"],
    files: [
      {
        path: "examples/collapsible-file-tree.tsx",
        type: "registry:example",
      },
    ],
  },
];
