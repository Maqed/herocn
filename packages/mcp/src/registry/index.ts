import { REGISTRY_URL, registryItemUrl } from "../config";
import { fetchJson, NotFoundError } from "../http";
import type { RegistryItem } from "../types";

export async function getRegistryItems(): Promise<RegistryItem[]> {
  const data = await fetchJson<{ items: RegistryItem[] }>(REGISTRY_URL);
  return data.items;
}

export async function getRegistryItem(
  name: string,
): Promise<RegistryItem | null> {
  const items = await getRegistryItems();
  return items.find((item) => item.name === name) ?? null;
}

export async function getPackage(name: string): Promise<RegistryItem | null> {
  let pkg: RegistryItem;
  try {
    pkg = await fetchJson<RegistryItem>(registryItemUrl(name));
  } catch (err) {
    if (err instanceof NotFoundError) return null;
    throw err;
  }

  const aggregate = await getRegistryItem(name);

  return {
    ...pkg,
    registryDependencies:
      pkg.registryDependencies ?? aggregate?.registryDependencies,
    cssVars: pkg.cssVars ?? aggregate?.cssVars,
    css: pkg.css ?? aggregate?.css,
  };
}
