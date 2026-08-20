import { hooks } from "@/registry/registry-hooks";
import { ui } from "@/registry/registry-ui";
import { getRegistryItem } from "./registry";

export async function getPackage(name: string) {
	const item = await getRegistryItem(name);

	if (!item) {
		throw new Error(`Package "${name}" not found`);
	}

	return item;
}

export async function getAllPackageNames(): Promise<string[]> {
	return [...ui, ...hooks].map((item) => item.name);
}
