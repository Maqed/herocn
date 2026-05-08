import type { Registry } from "shadcn/schema";
import { getRegistryItemInstallationAlias } from "@/lib/utils";

export const examples: Registry["items"] = [
	{
		name: "card-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("card")],
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
		registryDependencies: [getRegistryItemInstallationAlias("card")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("badge"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("button")],
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
		registryDependencies: [getRegistryItemInstallationAlias("button")],
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
		registryDependencies: [getRegistryItemInstallationAlias("button")],
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
		registryDependencies: [getRegistryItemInstallationAlias("button")],
		files: [
			{
				path: "examples/button-icons.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "button-render",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("button")],
		files: [
			{
				path: "examples/button-render.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "button-rtl",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("button")],
		files: [
			{
				path: "examples/button-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("skeleton")],
		files: [
			{
				path: "examples/skeleton-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-avatar",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("skeleton")],
		files: [
			{
				path: "examples/skeleton-avatar.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-card",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("skeleton"),
		],
		files: [
			{
				path: "examples/skeleton-card.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-text",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("skeleton")],
		files: [
			{
				path: "examples/skeleton-text.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-form",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("skeleton")],
		files: [
			{
				path: "examples/skeleton-form.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-table",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("skeleton")],
		files: [
			{
				path: "examples/skeleton-table.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-animation-types",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("skeleton")],
		files: [
			{
				path: "examples/skeleton-animation-types.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-single-shimmer",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("skeleton")],
		files: [
			{
				path: "examples/skeleton-single-shimmer.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "skeleton-rtl",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("skeleton")],
		files: [
			{
				path: "examples/skeleton-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "badge-rtl",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("badge")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
		],
		files: [
			{
				path: "examples/input-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("select"),
			getRegistryItemInstallationAlias("textarea"),
		],
		files: [
			{
				path: "examples/field-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-input",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
		],
		files: [
			{
				path: "examples/field-input.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-textarea",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("textarea"),
		],
		files: [
			{
				path: "examples/field-textarea.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-select",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("select"),
		],
		files: [
			{
				path: "examples/field-select.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-slider",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("slider"),
		],
		files: [
			{
				path: "examples/field-slider.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-fieldset",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
		],
		files: [
			{
				path: "examples/field-fieldset.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-checkbox",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/field-checkbox.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "checkbox-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "examples/checkbox-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "checkbox-basic",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/checkbox-basic.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "checkbox-variants",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/checkbox-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "checkbox-description",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/checkbox-description.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "checkbox-disabled",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/checkbox-disabled.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "checkbox-invalid",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/checkbox-invalid.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "checkbox-in-surface",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("surface"),
		],
		files: [
			{
				path: "examples/checkbox-in-surface.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "checkbox-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "examples/checkbox-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-radio",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("radio-group"),
		],
		files: [
			{
				path: "examples/field-radio.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "radio-group-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("radio-group"),
		],
		files: [
			{
				path: "examples/radio-group-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "radio-group-variants",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("radio-group"),
		],
		files: [
			{
				path: "examples/radio-group-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "radio-group-description",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("radio-group"),
		],
		files: [
			{
				path: "examples/radio-group-description.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "radio-group-disabled",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("radio-group"),
		],
		files: [
			{
				path: "examples/radio-group-disabled.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "radio-group-invalid",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("radio-group"),
		],
		files: [
			{
				path: "examples/radio-group-invalid.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "radio-group-in-surface",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("radio-group"),
			getRegistryItemInstallationAlias("surface"),
		],
		files: [
			{
				path: "examples/radio-group-in-surface.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "radio-group-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("radio-group"),
		],
		files: [
			{
				path: "examples/radio-group-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-switch",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("switch"),
		],
		files: [
			{
				path: "examples/field-switch.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-choice-card",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("radio-group"),
		],
		files: [
			{
				path: "examples/field-choice-card.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-group",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/field-group.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "field-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("checkbox"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("select"),
			getRegistryItemInstallationAlias("textarea"),
		],
		files: [
			{
				path: "examples/field-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "textarea-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("textarea")],
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
		registryDependencies: [getRegistryItemInstallationAlias("textarea")],
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
		registryDependencies: [getRegistryItemInstallationAlias("textarea")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("textarea"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("textarea"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("textarea"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("textarea"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("collapsible"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("surface")],
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
		registryDependencies: [getRegistryItemInstallationAlias("collapsible")],
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
		registryDependencies: [getRegistryItemInstallationAlias("collapsible")],
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
		registryDependencies: [getRegistryItemInstallationAlias("collapsible")],
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
		registryDependencies: [getRegistryItemInstallationAlias("collapsible")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [getRegistryItemInstallationAlias("avatar")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("badge")],
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
		registryDependencies: [getRegistryItemInstallationAlias("badge")],
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
		registryDependencies: [getRegistryItemInstallationAlias("badge")],
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
		registryDependencies: [getRegistryItemInstallationAlias("badge")],
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
		registryDependencies: [getRegistryItemInstallationAlias("badge")],
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
		registryDependencies: [getRegistryItemInstallationAlias("surface")],
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
		registryDependencies: [getRegistryItemInstallationAlias("surface")],
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
		registryDependencies: [getRegistryItemInstallationAlias("input")],
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
		registryDependencies: [getRegistryItemInstallationAlias("input")],
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
		registryDependencies: [getRegistryItemInstallationAlias("input")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("badge"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("input-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
		],
		files: [
			{
				path: "examples/input-button-group.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "input-in-surface",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("surface"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/input-in-surface.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "button-group-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("input"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("input-group"),
			getRegistryItemInstallationAlias("tooltip"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("select"),
		],
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
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("popover"),
			getRegistryItemInstallationAlias("textarea"),
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("dropdown-menu"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("tabs"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("tabs")],
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
		registryDependencies: [getRegistryItemInstallationAlias("tabs")],
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
		registryDependencies: [getRegistryItemInstallationAlias("tabs")],
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
		registryDependencies: [getRegistryItemInstallationAlias("tabs")],
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
		registryDependencies: [getRegistryItemInstallationAlias("tabs")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("tabs"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("select")],
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
		registryDependencies: [getRegistryItemInstallationAlias("select")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("select"),
			getRegistryItemInstallationAlias("surface"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("select")],
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
		registryDependencies: [getRegistryItemInstallationAlias("select")],
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
		registryDependencies: [getRegistryItemInstallationAlias("select")],
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
		registryDependencies: [getRegistryItemInstallationAlias("select")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("select"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("select")],
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
		registryDependencies: [getRegistryItemInstallationAlias("separator")],
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
		registryDependencies: [getRegistryItemInstallationAlias("separator")],
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
		registryDependencies: [getRegistryItemInstallationAlias("separator")],
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
		registryDependencies: [getRegistryItemInstallationAlias("separator")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("separator"),
			getRegistryItemInstallationAlias("surface"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("separator")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("popover"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("popover"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("popover"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("popover"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("popover"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("popover"),
		],
		files: [
			{
				path: "examples/popover-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "progress-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("progress")],
		files: [
			{
				path: "examples/progress-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "progress-label",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("progress")],
		files: [
			{
				path: "examples/progress-label.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "progress-controlled",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("progress"),
			getRegistryItemInstallationAlias("slider"),
		],
		files: [
			{
				path: "examples/progress-controlled.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "progress-sizes",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("progress")],
		files: [
			{
				path: "examples/progress-sizes.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "progress-variants",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("progress")],
		files: [
			{
				path: "examples/progress-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "progress-rtl",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("progress")],
		files: [
			{
				path: "examples/progress-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "tooltip-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("tooltip"),
		],
		files: [
			{
				path: "examples/tooltip-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "tooltip-sides",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("tooltip"),
		],
		files: [
			{
				path: "examples/tooltip-sides.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "tooltip-arrow",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("tooltip"),
		],
		files: [
			{
				path: "examples/tooltip-arrow.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "tooltip-keyboard",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("tooltip"),
		],
		files: [
			{
				path: "examples/tooltip-keyboard.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "tooltip-disabled",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("tooltip"),
		],
		files: [
			{
				path: "examples/tooltip-disabled.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "tooltip-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("tooltip"),
		],
		files: [
			{
				path: "examples/tooltip-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "input-group-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("input-group")],
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
		registryDependencies: [getRegistryItemInstallationAlias("input-group")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input-group"),
		],
		files: [
			{
				path: "examples/input-group-invalid.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "input-group-disabled",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input-group"),
		],
		files: [
			{
				path: "examples/input-group-disabled.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "input-group-inline-start",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input-group"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("input-group")],
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
		registryDependencies: [getRegistryItemInstallationAlias("input-group")],
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
		registryDependencies: [getRegistryItemInstallationAlias("input-group")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("input-group"),
			getRegistryItemInstallationAlias("spinner"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("input-group")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("dropdown-menu"),
			getRegistryItemInstallationAlias("input-group"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input-group"),
			getRegistryItemInstallationAlias("spinner"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("card"),
			getRegistryItemInstallationAlias("input-group"),
		],
		files: [
			{
				path: "examples/input-group-in-surface.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("item"),
		],
		files: [
			{
				path: "examples/item-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-variants",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("item")],
		files: [
			{
				path: "examples/item-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-sizes",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("item")],
		files: [
			{
				path: "examples/item-sizes.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-icon",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("item"),
		],
		files: [
			{
				path: "examples/item-icon.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-avatar",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("item"),
		],
		files: [
			{
				path: "examples/item-avatar.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-image",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("item")],
		files: [
			{
				path: "examples/item-image.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-group",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("item"),
		],
		files: [
			{
				path: "examples/item-group.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-header",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("item")],
		files: [
			{
				path: "examples/item-header.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-link",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("item")],
		files: [
			{
				path: "examples/item-link.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-dropdown",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dropdown-menu"),
			getRegistryItemInstallationAlias("item"),
		],
		files: [
			{
				path: "examples/item-dropdown.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "item-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("item"),
		],
		files: [
			{
				path: "examples/item-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "kbd-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("kbd")],
		files: [
			{
				path: "examples/kbd-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "kbd-variants",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("kbd")],
		files: [
			{
				path: "examples/kbd-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "kbd-group",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("kbd")],
		files: [
			{
				path: "examples/kbd-group.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "kbd-button",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("kbd"),
		],
		files: [
			{
				path: "examples/kbd-button.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "kbd-tooltip",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("button-group"),
			getRegistryItemInstallationAlias("tooltip"),
			getRegistryItemInstallationAlias("kbd"),
		],
		files: [
			{
				path: "examples/kbd-tooltip.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "kbd-input-group",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("input-group"),
			getRegistryItemInstallationAlias("kbd"),
		],
		files: [
			{
				path: "examples/kbd-input-group.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "kbd-rtl",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("kbd")],
		files: [
			{
				path: "examples/kbd-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "toggle-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("toggle")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle-group")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle-group")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle-group")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle-group")],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle-group")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("toggle-group"),
			getRegistryItemInstallationAlias("field"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("toggle-group")],
		files: [
			{
				path: "examples/toggle-group-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "label-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "examples/label-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "label-in-field",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "examples/label-in-field.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "label-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("switch"),
		],
		files: [
			{
				path: "examples/label-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "switch-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("switch"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("switch"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("switch"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("switch"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("switch"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("switch"),
		],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("switch"),
		],
		files: [
			{
				path: "examples/switch-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "spinner-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("spinner")],
		files: [
			{
				path: "examples/spinner-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "spinner-variants",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("spinner")],
		files: [
			{
				path: "examples/spinner-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "spinner-sizes",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("spinner")],
		files: [
			{
				path: "examples/spinner-sizes.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "spinner-button",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("spinner"),
		],
		files: [
			{
				path: "examples/spinner-button.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "spinner-badge",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("badge"),
			getRegistryItemInstallationAlias("spinner"),
		],
		files: [
			{
				path: "examples/spinner-badge.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "spinner-input-group",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("input-group"),
			getRegistryItemInstallationAlias("spinner"),
		],
		files: [
			{
				path: "examples/spinner-input-group.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "spinner-empty",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("empty"),
			getRegistryItemInstallationAlias("spinner"),
		],
		files: [
			{
				path: "examples/spinner-empty.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "empty-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("empty"),
		],
		files: [
			{
				path: "examples/empty-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "empty-outline",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("empty"),
		],
		files: [
			{
				path: "examples/empty-outline.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "empty-background",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("empty"),
		],
		files: [
			{
				path: "examples/empty-background.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "empty-avatar",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("empty"),
		],
		files: [
			{
				path: "examples/empty-avatar.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "empty-avatar-group",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("avatar"),
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("empty"),
		],
		files: [
			{
				path: "examples/empty-avatar-group.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "empty-input-group",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("empty"),
			getRegistryItemInstallationAlias("input-group"),
			getRegistryItemInstallationAlias("kbd"),
		],
		files: [
			{
				path: "examples/empty-input-group.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "empty-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("empty"),
		],
		files: [
			{
				path: "examples/empty-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "spinner-rtl",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("spinner")],
		files: [
			{
				path: "examples/spinner-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "slider-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("slider")],
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
		registryDependencies: [getRegistryItemInstallationAlias("slider")],
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
		registryDependencies: [getRegistryItemInstallationAlias("slider")],
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
		registryDependencies: [getRegistryItemInstallationAlias("slider")],
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
		registryDependencies: [
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("slider"),
		],
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
		registryDependencies: [getRegistryItemInstallationAlias("slider")],
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
		registryDependencies: [getRegistryItemInstallationAlias("slider")],
		files: [
			{
				path: "examples/slider-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("alert")],
		files: [
			{
				path: "examples/alert-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-variants",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("alert")],
		files: [
			{
				path: "examples/alert-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-action",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("alert"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/alert-action.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-colors",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("alert")],
		files: [
			{
				path: "examples/alert-colors.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-rtl",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("alert")],
		files: [
			{
				path: "examples/alert-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-dialog-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("alert-dialog"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/alert-dialog-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-dialog-basic",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("alert-dialog"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/alert-dialog-basic.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-dialog-variants",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("alert-dialog"),
		],
		files: [
			{
				path: "examples/alert-dialog-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-dialog-small",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("alert-dialog"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/alert-dialog-small.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-dialog-with-media",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("alert-dialog"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/alert-dialog-with-media.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-dialog-small-with-media",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("alert-dialog"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/alert-dialog-small-with-media.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-dialog-destructive",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("alert-dialog"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/alert-dialog-destructive.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "alert-dialog-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("alert-dialog"),
			getRegistryItemInstallationAlias("button"),
		],
		files: [
			{
				path: "examples/alert-dialog-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "dialog-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dialog"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "examples/dialog-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "dialog-close-button",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dialog"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "examples/dialog-close-button.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "dialog-no-close-button",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dialog"),
		],
		files: [
			{
				path: "examples/dialog-no-close-button.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "dialog-sticky-footer",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dialog"),
		],
		files: [
			{
				path: "examples/dialog-sticky-footer.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "dialog-scrollable-content",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dialog"),
		],
		files: [
			{
				path: "examples/dialog-scrollable-content.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "dialog-overlay-variant",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dialog"),
		],
		files: [
			{
				path: "examples/dialog-overlay-variant.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "dialog-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("dialog"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
		],
		files: [
			{
				path: "examples/dialog-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sheet-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("label"),
			getRegistryItemInstallationAlias("sheet"),
		],
		files: [
			{
				path: "examples/sheet-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sheet-side",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("sheet"),
		],
		files: [
			{
				path: "examples/sheet-side.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sheet-overlay-variant",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("sheet"),
		],
		files: [
			{
				path: "examples/sheet-overlay-variant.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sheet-no-close-button",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("sheet"),
		],
		files: [
			{
				path: "examples/sheet-no-close-button.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sheet-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("field"),
			getRegistryItemInstallationAlias("input"),
			getRegistryItemInstallationAlias("sheet"),
		],
		files: [
			{
				path: "examples/sheet-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sonner-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("sonner"),
		],
		files: [
			{
				path: "examples/sonner-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sonner-types",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("sonner"),
		],
		files: [
			{
				path: "examples/sonner-types.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sonner-description",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("sonner"),
		],
		files: [
			{
				path: "examples/sonner-description.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "sonner-position",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("sonner"),
		],
		files: [
			{
				path: "examples/sonner-position.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "scroll-area-demo",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("scroll-area"),
			getRegistryItemInstallationAlias("separator"),
		],
		files: [
			{
				path: "examples/scroll-area-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "scroll-area-horizontal",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("scroll-area")],
		files: [
			{
				path: "examples/scroll-area-horizontal.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "scroll-area-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("scroll-area"),
			getRegistryItemInstallationAlias("separator"),
		],
		files: [
			{
				path: "examples/scroll-area-rtl.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-demo",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("combobox")],
		files: [
			{
				path: "examples/combobox-demo.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-variants",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("combobox")],
		files: [
			{
				path: "examples/combobox-variants.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-surface",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("combobox"),
			getRegistryItemInstallationAlias("surface"),
		],
		files: [
			{
				path: "examples/combobox-surface.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-multiple",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("combobox")],
		files: [
			{
				path: "examples/combobox-multiple.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-groups",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("combobox")],
		files: [
			{
				path: "examples/combobox-groups.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-clear",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("combobox")],
		files: [
			{
				path: "examples/combobox-clear.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-invalid",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("combobox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/combobox-invalid.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-disabled",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("combobox")],
		files: [
			{
				path: "examples/combobox-disabled.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-auto-highlight",
		type: "registry:example",
		registryDependencies: [getRegistryItemInstallationAlias("combobox")],
		files: [
			{
				path: "examples/combobox-auto-highlight.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-popup",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("button"),
			getRegistryItemInstallationAlias("combobox"),
		],
		files: [
			{
				path: "examples/combobox-popup.tsx",
				type: "registry:example",
			},
		],
	},
	{
		name: "combobox-rtl",
		type: "registry:example",
		registryDependencies: [
			getRegistryItemInstallationAlias("combobox"),
			getRegistryItemInstallationAlias("field"),
		],
		files: [
			{
				path: "examples/combobox-rtl.tsx",
				type: "registry:example",
			},
		],
	},
];
