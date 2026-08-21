const COMPONENT_TYPES: Record<string, string> = {
  ui: "registry:ui",
  example: "registry:example",
  hook: "registry:hook",
  style: "registry:style",
};

export function normalizeSlug(raw: string): string {
  return raw
    .trim()
    .replace(/^\/+/, "")
    .replace(/^docs\/?/, "")
    .replace(/\/?index\.mdx$/, "")
    .replace(/\/+$/, "");
}

export function normalizeName(raw: string): string {
  return raw.trim().toLowerCase();
}

export function normalizeType(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const key = raw.trim().toLowerCase();
  if (key.startsWith("registry:")) return key;
  return COMPONENT_TYPES[key];
}
