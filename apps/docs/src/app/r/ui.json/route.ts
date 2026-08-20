import { type NextRequest, NextResponse } from "next/server";
import { getRegistryItemInstallationAlias } from "@/lib/utils";
import { ui } from "@/registry/registry-ui";

export const dynamic = "force-static";

export const GET = async (_: NextRequest) => {
	const allDependencies = new Set<string>();
	const allRegistryDependencies = new Set<string>(
		ui.map((c) => getRegistryItemInstallationAlias(c.name)),
	);

	for (const component of ui) {
		for (const dep of component.dependencies ?? []) {
			allDependencies.add(dep);
		}
		for (const dep of component.registryDependencies ?? []) {
			allRegistryDependencies.add(dep);
		}
	}

	return NextResponse.json({
		$schema: "https://ui.shadcn.com/schema/registry-item.json",
		name: "ui",
		type: "registry:ui",
		description: "All UI components from @herocn/ui",
		dependencies: Array.from(allDependencies).sort(),
		registryDependencies: Array.from(allRegistryDependencies).sort(),
	});
};
