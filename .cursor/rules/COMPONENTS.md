---
description: Guide for adding new components to the maqed-ui registry
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

| Export | What it contains |
|--------|-----------------|
| `cssVars` | Custom color tokens: `--default`, `--snow`, `--eclipse`, `--success`, `--warning`, `--destructive-foreground`, etc. |
| `css` | Custom Tailwind utilities: `@utility pressible`, `@utility focus-ring` |

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

## Quick checklist

- [ ] Entry added to `registry-ui.ts`
- [ ] `cssVars` included if component references `--default`, `--success`, `--warning`, `--snow`, `--eclipse`, or `--destructive-foreground`
- [ ] `css` (full or partial) included if component uses `pressible` or `focus-ring` utility classes
- [ ] No extra fields added when neither custom token nor utility is used
