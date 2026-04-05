---
description: Guide for adding new components to the herocn registry
globs: apps/docs/src/registry/**
alwaysApply: false
---

# Adding Components to the Registry

## Step 1 — Add the entry to `registry-ui.ts`

Every component must be registered in `apps/docs/src/registry/registry-ui.ts`. The minimum shape is:

```ts
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
}
```

- `name` — kebab-case, matches the filename under `new-york-v4/ui/`
- `dependencies` — npm packages the component imports at runtime
- `files[].path` — relative to the `new-york-v4/` folder

## Step 2 — Check `shared.ts` for required extras

`apps/docs/src/registry/shared.ts` exports two objects:

| Export    | What it contains                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------- |
| `cssVars` | Custom color tokens: `--default`, `--snow`, `--eclipse`, `--success`, `--warning`, `--destructive-foreground`, etc. |
| `css`     | Custom Tailwind utilities: `@utility pressible`, `@utility focus-ring`                                              |

### Include `cssVars` when the component uses a custom color token

The `button` component uses `bg-default`, `text-destructive-foreground`, etc., so its entry spreads the full `cssVars` object:

```ts
import { css, cssVars } from "./shared";

{
  name: "button",
  type: "registry:ui",
  dependencies: ["@base-ui/react"],
  files: [{ path: "ui/button.tsx", type: "registry:ui" }],
  cssVars, // ← needed: component uses --default, --destructive-foreground, etc.
  css,     // ← needed: component uses `pressible` utility class
}
```

### Include only the specific `css` utility when needed

If a component only uses one utility (e.g. `focus-ring` but not `pressible`), cherry-pick it:

```ts
import { css } from "./shared";

{
  name: "dropdown-menu",
  // ...
  css: {
    "@utility focus-ring": css["@utility focus-ring"],
  },
}
```

### Skip both when the component uses neither

Plain components like `avatar` or `collapsible` that don't reference any custom tokens or utilities omit both fields entirely.

## Step 3 — `registryDependencies` (other registry items, not npm)

`dependencies` / `devDependencies` are **npm packages**. `registryDependencies` are **other items from this registry** so tools like `shadcn add` know which component files to pull in together.

### When to add

- **`registry-ui.ts` (`registry:ui`)** — Add when the UI file imports another registry UI module under `@/registry/new-york-v4/ui/...`. List the **`name`** of each of those entries from `registry-ui.ts` (kebab-case, e.g. `separator`, `button`). If the component only uses npm imports and `@/lib/utils`, omit `registryDependencies`.

- **`registry-examples.ts` (`registry:example`)** — Add for **every** registry UI component the example imports from `@/registry/new-york-v4/ui/...`, using the same `name` values as in `registry-ui.ts`. Examples typically always set this field because demos compose multiple components.

- **`index` / `style` (`registry:style`)** — The shared style object in `apps/docs/src/registry/index.ts` already sets `registryDependencies: ["utils", "@herocn/ui"]`. Change that only if the style entry’s contract with the CLI or meta-package layout changes.

### Shape

```ts
{
  name: "card-demo",
  type: "registry:example",
  registryDependencies: ["button", "card", "input", "label"],
  files: [{ path: "examples/card-demo.tsx", type: "registry:example" }],
}
```

Keep the list aligned with actual imports: if you add or remove a `@/registry/new-york-v4/ui/...` import in the source file, update `registryDependencies` the same way.

## Quick checklist

- [ ] Entry added to `registry-ui.ts`
- [ ] `cssVars` included if component references `--default`, `--success`, `--warning`, `--snow`, `--eclipse`, or `--destructive-foreground`
- [ ] `css` (full or partial) included if component uses `pressible` or `focus-ring` utility classes
- [ ] No extra fields added when neither custom token nor utility is used
- [ ] `registryDependencies` set on examples (and on UI items that import other registry UI modules); lists match `@/registry/new-york-v4/ui/...` imports
