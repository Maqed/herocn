"use client";

import { cn } from "cn";
import {
	AreaChartIcon,
	BarChartBigIcon,
	HexagonIcon,
	LineChartIcon,
	MousePointer2Icon,
	PieChartIcon,
	RadarIcon,
} from "lucide-react";

import { ChartCodeViewer } from "@/components/chart-code-viewer";
import { ChartCopyButton } from "@/components/chart-copy-button";
import type { Chart } from "@/components/chart-display";
import { Separator } from "@/registry/new-york-v4/ui/separator";

export function ChartToolbar({
	chart,
	className,
	children,
}: {
	chart: Chart;
} & React.ComponentProps<"div">) {
	return (
		<div className={cn("flex items-center gap-2", className)}>
			<div className="flex items-center gap-1.5 pl-1 text-[13px] text-muted-foreground [&>svg]:size-3.5">
				<ChartTitle chart={chart} />
			</div>
			<div className="ml-auto flex items-center gap-2">
				<ChartCopyButton
					name={chart.name}
					code={chart.files?.[0]?.content ?? ""}
				/>
				<Separator
					orientation="vertical"
					className="mx-0 mt-1.5 hidden h-4! md:flex"
				/>
				<ChartCodeViewer chart={chart}>{children}</ChartCodeViewer>
			</div>
		</div>
	);
}

function ChartTitle({ chart }: { chart: Chart }) {
	if (chart.name.includes("chart-line")) {
		return (
			<>
				<LineChartIcon /> Line Chart
			</>
		);
	}

	if (chart.name.includes("chart-bar")) {
		return (
			<>
				<BarChartBigIcon /> Bar Chart
			</>
		);
	}

	if (chart.name.includes("chart-pie")) {
		return (
			<>
				<PieChartIcon /> Pie Chart
			</>
		);
	}

	if (chart.name.includes("chart-area")) {
		return (
			<>
				<AreaChartIcon /> Area Chart
			</>
		);
	}

	if (chart.name.includes("chart-radar")) {
		return (
			<>
				<HexagonIcon /> Radar Chart
			</>
		);
	}

	if (chart.name.includes("chart-radial")) {
		return (
			<>
				<RadarIcon /> Radial Chart
			</>
		);
	}

	if (chart.name.includes("chart-tooltip")) {
		return (
			<>
				<MousePointer2Icon />
				Tooltip
			</>
		);
	}

	return chart.name;
}
