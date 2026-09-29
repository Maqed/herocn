import { cn } from "cn";
import { highlight } from "fumadocs-core/highlight";
import * as React from "react";
import type { registryItemSchema } from "shadcn/schema";
import type { z } from "zod";

import { ChartIframe } from "@/components/chart-iframe";
import { ChartToolbar } from "@/components/chart-toolbar";
import { getRegistryItem } from "@/lib/registry";

export type Chart = z.infer<typeof registryItemSchema> & {
	highlightedCode: React.ReactNode;
};

export function ChartDisplay({
	chart,
	className,
}: {
	chart: Chart;
} & React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"group relative flex flex-col overflow-hidden rounded-xl transition-all duration-200 ease-in-out hover:z-30",
				className,
			)}
		>
			<ChartToolbar
				chart={chart}
				className="relative z-20 flex justify-end px-3 py-2.5"
			/>
			<div className="relative z-10 overflow-hidden rounded-xl bg-background">
				<ChartIframe
					src={`/view/${chart.name}`}
					height={460}
					title={chart.name}
				/>
			</div>
		</div>
	);
}

// Exported for parallel prefetching in page components.
export const getCachedRegistryItem = React.cache(async (name: string) => {
	return await getRegistryItem(name);
});

export const getChartHighlightedCode = React.cache(async (content: string) => {
	if (!content) {
		return null;
	}
	return await highlight(content, { lang: "tsx" });
});
