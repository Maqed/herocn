# maqedui

Minimal template for building shadcn registry with docs

## Features

- **TypeScript** - For type safety and improved developer experience
- **Biome** - Linting and formatting
- **Husky** - Git hooks for code quality
- **Turborepo** - Optimized monorepo build system

## Getting Started

First, install the dependencies:

```bash
bun install
```

Then, run the development server:

```bash
bun run dev
```

## Git Hooks and Formatting

- Initialize hooks: `bun run prepare`
- Format and lint fix: `bun run check`

## Project Structure

```
maqedui/
├── apps/
│   └── docs/          # Next.js + Fumadocs app with the registry UI
└── packages/
    └── config/       # Shared TypeScript / tooling config
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run check-types`: Check TypeScript types across all apps
- `bun run check`: Run Biome formatting and linting

## Customizing this template

- **Change site name, description, links, and nav**
  - Edit `apps/docs/src/lib/config.ts` to update the site name, description, URLs, social links, and top navigation items.

- **Customize documentation content**
  - Docs live in `apps/docs/content/docs` as MDX files (for example: `index.mdx`, `components/*.mdx`).
  - Adjust frontmatter and meta schemas in `apps/docs/source.config.ts` if you need custom fields.

- **Customize shadcn registry items**
  - Add or edit UI components under `apps/docs/src/registry/new-york-v4/ui`.
  - Add or edit examples under `apps/docs/src/registry/new-york-v4/examples`.
  - Control the exported registry (name, homepage, items) in `apps/docs/src/registry/index.ts` and `apps/docs/registry.json`.

- **Update URLs and deployment metadata**
  - Update the public site URL in `apps/docs/src/lib/config.ts` (`url` field).
  - Update the registry homepage in `apps/docs/registry.json` and `apps/docs/src/registry/index.ts`.
