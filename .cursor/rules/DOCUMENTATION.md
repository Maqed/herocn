# Documentation Guide

This guide defines the conventions for writing component documentation pages (`.mdx` files) in `apps/docs/content/docs/components/`.

---

## File Structure

Every component page must follow this frontmatter + section order:

```mdx
---
title: ComponentName
description: A short, one-sentence description of the component.
---

<ComponentPreview name="component-demo" />

## Installation

...

## Usage

...

## Examples (if applicable)

...

## API Reference
```

---

## Installation Section

Always wrap the installation in a `<CodeTabs>` with two tabs: **Command** (CLI) and **Manual**.

```mdx
## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">Command</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

<CodeBlockCommand command="npx shadcn@latest add @herocn/{name}" />

</TabsContent>

<TabsContent value="manual">

<Steps className="mb-0 pt-2">

<Step>Install the following dependencies:</Step>

<CodeBlockCommand command="npm install @base-ui/react" />

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="{name}" title="components/ui/{name}.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>
```

Replace `{name}` with the registry component name (e.g. `button`, `dropdown-menu`, `avatar`).

---

## `<CodeBlockCommand />` — ALWAYS Use for Commands

**Never use raw fenced code blocks (` ```bash `) for terminal commands.** Always use the `<CodeBlockCommand />` component instead. It automatically generates the equivalent command for `npm`, `pnpm`, `yarn`, and `bun`.

### Syntax

```mdx
<CodeBlockCommand command="npx shadcn@latest add @herocn/{name}" />
```

### How It Works

The component strips the package manager prefix and adapts the command for each manager:

| Input prefix      | npm               | pnpm               | yarn           | bun           |
| ----------------- | ----------------- | ------------------ | -------------- | ------------- |
| `npx ...`         | `npx ...`         | `pnpm dlx ...`     | `yarn ...`     | `bunx ...`    |
| `npm install ...` | `npm install ...` | `pnpm install ...` | `yarn add ...` | `bun add ...` |

### Examples

CLI install command:

```mdx
<CodeBlockCommand command="npx shadcn@latest add @herocn/button" />
```

Dependency install command:

```mdx
<CodeBlockCommand command="npm install @base-ui/react" />
```

---

## `<RenderCSSShared />` — ALWAYS Use for Shared CSS Colors & Utilities

Use `<RenderCSSShared />` inside your docs (typically in the **Installation** manual steps) to render the required shared CSS variables and utilities from `@/registry/shared` as a syntax-highlighted, collapsible `globals.css` code block.

### What It Renders

- `light` generates `:root { ... }`
- `dark` generates `.dark { ... }`
- `theme` generates `@theme inline { ... }`
- `css` generates one CSS block per key (e.g. `@utility ...`) with the declarations defined in `@/registry/shared`

### Props

```ts
light?: (keyof typeof sharedCssVars.light)[];
dark?: (keyof typeof sharedCssVars.dark)[];
theme?: (keyof typeof sharedCssVars.theme)[];
css?: (keyof typeof sharedCss)[];
title?: string; // defaults to "globals.css"
```

### Example (matches `button.mdx`)

```mdx
<RenderCSSShared
  light={["--eclipse", "--snow", "--default", "--default-foreground", "--destructive-foreground"]}
  dark={["--default", "--default-foreground", "--destructive-foreground"]}
  theme={["--color-default", "--color-default-foreground", "--color-destructive-foreground"]}
  css={["@utility pressible", "@utility focus-ring"]}
/>
```

---

## `<ApiRefTable />` — ALWAYS Use for API Reference

**Never use markdown tables for API reference.** Always use the `<ApiRefTable />` component. It renders a styled, interactive table with collapsible rows for descriptions.

### Prop Shape

Each entry in the `props` array supports:

| Field          | Type      | Required | Description                                         |
| -------------- | --------- | -------- | --------------------------------------------------- |
| `name`         | `string`  | yes      | The prop name                                       |
| `type`         | `string`  | yes      | The TypeScript type (as a string)                   |
| `required`     | `boolean` | no       | Whether the prop is required (renders a `*` marker) |
| `description`  | `string`  | no       | Expanded description shown in a collapsible row     |
| `defaultValue` | `string`  | no       | The default value                                   |

### Syntax

```mdx
<ApiRefTable
  props={[
    {
      name: "variant",
      type: '"default" | "outline" | "ghost"',
      defaultValue: '"default"',
    },
    {
      name: "size",
      type: '"default" | "sm" | "lg"',
      defaultValue: '"default"',
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: "false",
      description: "Prevents user interaction with the component.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      required: true,
      description: "Callback fired when the selected value changes.",
    },
  ]}
/>
```

### Formatting Rules

- Wrap string union types in double quotes: `'"default" | "sm" | "lg"'`
- Wrap default string values in double quotes: `'"default"'`
- Use plain `boolean`, `number`, `string` (no quotes) for primitive types
- Use `required: true` only for props that have no default and must be provided

---

## Adding Examples

When adding new examples for a component, two things must be done:

### 1. Create the example file

Place the example `.tsx` file in:

```
apps/docs/src/registry/new-york-v4/examples/{component-name}-{example-name}.tsx
```

For example: `apps/docs/src/registry/new-york-v4/examples/button-variants.tsx`

### 2. Register the example

Add an entry to the `examples` array in `apps/docs/src/registry/registry-examples.ts`:

```ts
{
  name: "{component-name}-{example-name}",
  type: "registry:example",
  registryDependencies: ["@herocn/{component-name}"],
  files: [
    {
      path: "examples/{component-name}-{example-name}.tsx",
      type: "registry:example",
    },
  ],
},
```

- `name` must match the `name` prop passed to `<ComponentPreview name="..." />` in the `.mdx` file.
- `registryDependencies` should list all registry components the example depends on (e.g. `["@herocn/button", "@herocn/avatar"]`).
- The `path` is relative to `apps/docs/src/registry/new-york-v4/`.

---

## RTL Support

When a component has meaningful RTL layout differences, add an RTL section to the docs page and a dedicated example file.

### 1. Add the RTL section in the `.mdx` file

Place the `## RTL` section after all other example sections and before `## Reference`. Pass `direction="rtl"` to `<ComponentPreview />`:

```mdx
## RTL

<ComponentPreview name="button-rtl" direction="rtl" />
```

The `direction="rtl"` prop activates a language selector toolbar (English / Arabic / Hebrew) above the preview and wraps the component in a `DirectionProvider`.

### 2. Create the RTL example file

Place the file at:

```
apps/docs/src/registry/new-york-v4/examples/{component-name}-rtl.tsx
```

#### Required pattern

```tsx
"use client"

import { useTranslation, type Translations } from "@/components/language-selector"

const translations: Translations = {
  en: {
    dir: "ltr",
    values: {
      label: "Label",
    },
  },
  ar: {
    dir: "rtl",
    values: {
      label: "تسمية",
    },
  },
  he: {
    dir: "rtl",
    values: {
      label: "תווית",
    },
  },
}

export function ComponentRtl() {
  const { dir, language, t } = useTranslation(translations, "ar")

  return (
    <div lang={language} dir={dir}>
      {/* render the component using t.label, etc. */}
    </div>
  )
}
```

Key rules:
- Always define all three languages: `en`, `ar`, `he`.
- Use `"use client"` because `useTranslation` is a client hook.
- Apply `lang={language} dir={dir}` on the outermost container element — **not** on individual child components.
- Default to `"ar"` as the initial language in `useTranslation(translations, "ar")`.

### 3. Register the RTL example

Add an entry to `apps/docs/src/registry/registry-examples.ts` with `registryDependencies` that includes all registry components used:

```ts
{
  name: "{component-name}-rtl",
  type: "registry:example",
  registryDependencies: ["@herocn/{component-name}"],
  files: [
    {
      path: "examples/{component-name}-rtl.tsx",
      type: "registry:example",
    },
  ],
},
```

### Directional icons

When rendering icons that should flip in RTL, apply `rtl:rotate-180` via Tailwind. Use `data-icon` to control inline spacing relative to text direction:

| `data-icon` value | Position      | LTR margin | RTL margin |
| ----------------- | ------------- | ---------- | ---------- |
| `"inline-start"`  | Before text   | `mr-*`     | `ml-*`     |
| `"inline-end"`    | After text    | `ml-*`     | `mr-*`     |

```tsx
{/* Arrow that flips direction */}
<ArrowRightIcon className="rtl:rotate-180" data-icon="inline-end" />

{/* Spinner/icon before text */}
<Spinner data-icon="inline-start" />
```

### `LanguageProvider` context

The `<ComponentPreview direction="rtl" />` automatically wraps the preview in a `LanguageProvider`. The `useTranslation` hook reads from this context, so switching languages in the toolbar updates all components inside the preview simultaneously.

---

## Full Example

````mdx
---
title: Button
description: Displays a button or a component that looks like a button.
---

<ComponentPreview name="button-demo" />

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">Command</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

<CodeBlockCommand command="npx shadcn@latest add @herocn/button" />

</TabsContent>

<TabsContent value="manual">

<Steps className="mb-0 pt-2">

<Step>Install the following dependencies:</Step>

<CodeBlockCommand command="npm install @base-ui/react" />

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="button" title="components/ui/button.tsx" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx
import { Button } from "@/components/ui/button";
```
````

```tsx
<Button>Click me</Button>
```

## Examples

### Variants

<ComponentPreview name="button-variants" />

### Sizes

<ComponentPreview name="button-sizes" />

## API Reference

### Button

<ApiRefTable
props={[
{
name: "variant",
type: '"default" | "outline" | "secondary" | "ghost" | "destructive"',
defaultValue: '"default"',
},
{
name: "size",
type: '"default" | "sm" | "lg" | "icon"',
defaultValue: '"default"',
},
]}
/>

```

```
