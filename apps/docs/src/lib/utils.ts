export { cn } from "cn";

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function getRegistryItemInstallationAlias(itemName: string) {
	return `https://herocn.dev/r/${itemName}.json`;
}
