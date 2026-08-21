const DEFAULT_BASE_URL = "https://herocn.dev";

export function baseUrl(): string {
  const url = process.env.HEROCN_BASE_URL?.trim() || DEFAULT_BASE_URL;
  return url.replace(/\/+$/, "");
}

export function cacheTtlMs(): number {
  const raw = process.env.HEROCN_CACHE_TTL?.trim();
  if (!raw) return 60 * 60 * 1000;

  const parsed = Number.parseInt(raw, 10);
  if (Number.isNaN(parsed) || parsed <= 0) return 60 * 60 * 1000;

  return parsed * 1000;
}

export const DOCS_INDEX_URL = "llms.txt";
export const REGISTRY_URL = "r/registry.json";

export function docsPageUrl(slug: string): string {
  return `llms.mdx/docs/${slug}/index.mdx`;
}

export function registryItemUrl(name: string): string {
  return `r/${name}.json`;
}

export function installCommand(name: string): string {
  return `npx shadcn@latest add ${baseUrl()}/r/${name}.json`;
}
