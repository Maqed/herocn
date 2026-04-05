import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "card-demo",
    type: "registry:example",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "examples/card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-variants",
    type: "registry:example",
    registryDependencies: ["card"],
    files: [
      {
        path: "examples/card-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-small",
    type: "registry:example",
    registryDependencies: ["card"],
    files: [
      {
        path: "examples/card-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-image",
    type: "registry:example",
    registryDependencies: ["badge", "button", "card"],
    files: [
      {
        path: "examples/card-image.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-rtl",
    type: "registry:example",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "examples/card-rtl.tsx",
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
    name: "button-rtl",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "examples/button-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-rtl",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-rtl",
    type: "registry:example",
    registryDependencies: ["field", "input"],
    files: [
      {
        path: "examples/input-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-rtl",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "collapsible-rtl",
    type: "registry:example",
    registryDependencies: ["button", "card", "collapsible"],
    files: [
      {
        path: "examples/collapsible-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-rtl",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "surface-rtl",
    type: "registry:example",
    registryDependencies: ["surface"],
    files: [
      {
        path: "examples/surface-rtl.tsx",
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
  {
    name: "dropdown-menu-demo",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-basic",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-basic.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-submenu",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-submenu.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-shortcuts",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-shortcuts.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-icons",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-icons.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-checkboxes",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-checkboxes.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-checkboxes-icons",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-checkboxes-icons.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-radio-group",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-radio-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-radio-icons",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-radio-icons.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-destructive",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-avatar",
    type: "registry:example",
    registryDependencies: ["avatar", "button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-avatar.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-complex",
    type: "registry:example",
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "examples/dropdown-menu-complex.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-demo",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-basic",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-basic.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-badge",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-badge.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-badge-icon",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-badge-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-group",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-group-count",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-group-count.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-group-count-icon",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-group-count-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-size",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "examples/avatar-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-dropdown",
    type: "registry:example",
    registryDependencies: ["avatar", "button", "dropdown-menu"],
    files: [
      {
        path: "examples/avatar-dropdown.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-demo",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-variants",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-sizes",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-sizes.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-icon",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-colors",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "examples/badge-colors.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "surface-demo",
    type: "registry:example",
    registryDependencies: ["surface"],
    files: [
      {
        path: "examples/surface-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "surface-variants",
    type: "registry:example",
    registryDependencies: ["surface"],
    files: [
      {
        path: "examples/surface-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-demo",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-variants",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-states",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "examples/input-states.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-field",
    type: "registry:example",
    registryDependencies: ["field", "input"],
    files: [
      {
        path: "examples/input-field.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-fieldgroup",
    type: "registry:example",
    registryDependencies: ["button", "field", "input"],
    files: [
      {
        path: "examples/input-fieldgroup.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-badge",
    type: "registry:example",
    registryDependencies: ["badge", "field", "input"],
    files: [
      {
        path: "examples/input-badge.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-input-group",
    type: "registry:example",
    registryDependencies: ["field", "input", "input-group"],
    files: [
      {
        path: "examples/input-input-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-button-group",
    type: "registry:example",
    registryDependencies: ["button", "button-group", "field", "input"],
    files: [
      {
        path: "examples/input-button-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-demo",
    type: "registry:example",
    registryDependencies: ["card", "tabs"],
    files: [
      {
        path: "examples/tabs-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-line",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-line.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-vertical",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-vertical-line",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-vertical-line.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-disabled",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-icons",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "examples/tabs-icons.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-rtl",
    type: "registry:example",
    registryDependencies: ["card", "tabs"],
    files: [
      {
        path: "examples/tabs-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-demo",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-variants",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-surface",
    type: "registry:example",
    registryDependencies: ["select", "surface"],
    files: [
      {
        path: "examples/select-surface.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-groups",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-groups.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-multiple",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-scrollable",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-scrollable.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-disabled",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-invalid",
    type: "registry:example",
    registryDependencies: ["field", "select"],
    files: [
      {
        path: "examples/select-invalid.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-rtl",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "examples/select-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-demo",
    type: "registry:example",
    registryDependencies: ["button", "input", "label", "popover"],
    files: [
      {
        path: "examples/popover-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-basic",
    type: "registry:example",
    registryDependencies: ["button", "popover"],
    files: [
      {
        path: "examples/popover-basic.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-align",
    type: "registry:example",
    registryDependencies: ["button", "popover"],
    files: [
      {
        path: "examples/popover-align.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-form",
    type: "registry:example",
    registryDependencies: ["button", "field", "input", "popover"],
    files: [
      {
        path: "examples/popover-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-with-arrow",
    type: "registry:example",
    registryDependencies: ["button", "popover"],
    files: [
      {
        path: "examples/popover-with-arrow.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-rtl",
    type: "registry:example",
    registryDependencies: ["button", "popover"],
    files: [
      {
        path: "examples/popover-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
];
