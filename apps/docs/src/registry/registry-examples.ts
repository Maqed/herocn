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
    name: "textarea-demo",
    type: "registry:example",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "examples/textarea-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-variants",
    type: "registry:example",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "examples/textarea-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-states",
    type: "registry:example",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "examples/textarea-states.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-field",
    type: "registry:example",
    registryDependencies: ["field", "textarea"],
    files: [
      {
        path: "examples/textarea-field.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-button",
    type: "registry:example",
    registryDependencies: ["button", "textarea"],
    files: [
      {
        path: "examples/textarea-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-rtl",
    type: "registry:example",
    registryDependencies: ["field", "textarea"],
    files: [
      {
        path: "examples/textarea-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-in-surface",
    type: "registry:example",
    registryDependencies: ["button", "card", "field", "textarea"],
    files: [
      {
        path: "examples/textarea-in-surface.tsx",
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
    name: "button-group-demo",
    type: "registry:example",
    registryDependencies: ["button", "button-group", "dropdown-menu"],
    files: [
      {
        path: "examples/button-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-orientation",
    type: "registry:example",
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "examples/button-group-orientation.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-size",
    type: "registry:example",
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "examples/button-group-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-separator",
    type: "registry:example",
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "examples/button-group-separator.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-split",
    type: "registry:example",
    registryDependencies: ["button", "button-group"],
    files: [
      {
        path: "examples/button-group-split.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-input",
    type: "registry:example",
    registryDependencies: ["button", "button-group", "input"],
    files: [
      {
        path: "examples/button-group-input.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-input-group",
    type: "registry:example",
    registryDependencies: ["button", "button-group", "input-group", "tooltip"],
    files: [
      {
        path: "examples/button-group-input-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-dropdown",
    type: "registry:example",
    registryDependencies: ["button", "button-group", "dropdown-menu"],
    files: [
      {
        path: "examples/button-group-dropdown.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-select",
    type: "registry:example",
    registryDependencies: ["button", "button-group", "input", "select"],
    files: [
      {
        path: "examples/button-group-select.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-popover",
    type: "registry:example",
    registryDependencies: [
      "button",
      "button-group",
      "field",
      "popover",
      "textarea",
    ],
    files: [
      {
        path: "examples/button-group-popover.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-rtl",
    type: "registry:example",
    registryDependencies: ["button", "button-group", "dropdown-menu"],
    files: [
      {
        path: "examples/button-group-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-text",
    type: "registry:example",
    registryDependencies: ["button-group", "input", "label"],
    files: [
      {
        path: "examples/button-group-text.tsx",
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
    name: "separator-demo",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "examples/separator-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-vertical",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "examples/separator-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-menu",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "examples/separator-menu.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-list",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "examples/separator-list.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-surface",
    type: "registry:example",
    registryDependencies: ["separator", "surface"],
    files: [
      {
        path: "examples/separator-surface.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-rtl",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "examples/separator-rtl.tsx",
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
  {
    name: "input-group-demo",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-variants",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-variants.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-invalid",
    type: "registry:example",
    registryDependencies: ["field", "input-group"],
    files: [
      {
        path: "examples/input-group-invalid.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-inline-start",
    type: "registry:example",
    registryDependencies: ["field", "input-group"],
    files: [
      {
        path: "examples/input-group-inline-start.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-inline-end",
    type: "registry:example",
    registryDependencies: ["field", "input-group"],
    files: [
      {
        path: "examples/input-group-inline-end.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-block-start",
    type: "registry:example",
    registryDependencies: ["field", "input-group"],
    files: [
      {
        path: "examples/input-group-block-start.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-block-end",
    type: "registry:example",
    registryDependencies: ["field", "input-group"],
    files: [
      {
        path: "examples/input-group-block-end.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-icon",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-text",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-button",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-spinner",
    type: "registry:example",
    registryDependencies: ["input-group", "spinner"],
    files: [
      {
        path: "examples/input-group-spinner.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-textarea",
    type: "registry:example",
    registryDependencies: ["input-group"],
    files: [
      {
        path: "examples/input-group-textarea.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-dropdown",
    type: "registry:example",
    registryDependencies: ["dropdown-menu", "input-group"],
    files: [
      {
        path: "examples/input-group-dropdown.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-rtl",
    type: "registry:example",
    registryDependencies: ["field", "input-group", "spinner"],
    files: [
      {
        path: "examples/input-group-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-group-in-surface",
    type: "registry:example",
    registryDependencies: ["card", "input-group"],
    files: [
      {
        path: "examples/input-group-in-surface.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-demo",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-ghost",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-ghost.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-sizes",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-sizes.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-disabled",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-rtl",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "examples/toggle-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-demo",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-sizes",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-sizes.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-spacing",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-spacing.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-vertical",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-disabled",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-custom",
    type: "registry:example",
    registryDependencies: ["toggle-group", "field"],
    files: [
      {
        path: "examples/toggle-group-custom.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-rtl",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "examples/toggle-group-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-demo",
    type: "registry:example",
    registryDependencies: ["label", "switch"],
    files: [
      {
        path: "examples/switch-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-description",
    type: "registry:example",
    registryDependencies: ["field", "switch"],
    files: [
      {
        path: "examples/switch-description.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-choice-card",
    type: "registry:example",
    registryDependencies: ["field", "switch"],
    files: [
      {
        path: "examples/switch-choice-card.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-disabled",
    type: "registry:example",
    registryDependencies: ["field", "switch"],
    files: [
      {
        path: "examples/switch-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-invalid",
    type: "registry:example",
    registryDependencies: ["field", "switch"],
    files: [
      {
        path: "examples/switch-invalid.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-sizes",
    type: "registry:example",
    registryDependencies: ["field", "switch"],
    files: [
      {
        path: "examples/switch-sizes.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-rtl",
    type: "registry:example",
    registryDependencies: ["field", "switch"],
    files: [
      {
        path: "examples/switch-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-demo",
    type: "registry:example",
    registryDependencies: ["@herocn/slider"],
    files: [
      {
        path: "examples/slider-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-range",
    type: "registry:example",
    registryDependencies: ["@herocn/slider"],
    files: [
      {
        path: "examples/slider-range.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-multiple",
    type: "registry:example",
    registryDependencies: ["@herocn/slider"],
    files: [
      {
        path: "examples/slider-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-vertical",
    type: "registry:example",
    registryDependencies: ["@herocn/slider"],
    files: [
      {
        path: "examples/slider-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-controlled",
    type: "registry:example",
    registryDependencies: ["@herocn/label", "@herocn/slider"],
    files: [
      {
        path: "examples/slider-controlled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-disabled",
    type: "registry:example",
    registryDependencies: ["@herocn/slider"],
    files: [
      {
        path: "examples/slider-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-rtl",
    type: "registry:example",
    registryDependencies: ["@herocn/slider"],
    files: [
      {
        path: "examples/slider-rtl.tsx",
        type: "registry:example",
      },
    ],
  },
];
