import { cn } from "cn";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { charts } from "@/app/(app)/charts/charts";
import {
	ChartDisplay,
	getCachedRegistryItem,
	getChartHighlightedCode,
} from "@/components/chart-display";
import { PAGES_METADATA, siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";

export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

interface ChartPageProps {
	params: Promise<{
		type: string;
	}>;
}

const chartTypes = [
	"area",
	"bar",
	"line",
	"pie",
	"radar",
	"radial",
	"tooltip",
] as const;
type ChartType = (typeof chartTypes)[number];

export async function generateStaticParams() {
	return chartTypes.map((type) => ({
		type,
	}));
}

export async function generateMetadata({
	params,
}: ChartPageProps): Promise<Metadata> {
	const { type } = await params;

	if (!chartTypes.includes(type as ChartType)) {
		return notFound();
	}

	const page = PAGES_METADATA.get(`/charts/${type}`);
	const fallbackTitle = `${type.charAt(0).toUpperCase() + type.slice(1)} Charts`;
	const title = page?.title ?? fallbackTitle;
	const description = page?.description;

	return {
		title,
		description,
		alternates: {
			canonical: absoluteUrl(`/charts/${type}`),
		},
		openGraph: {
			title,
			description,
			url: absoluteUrl(`/charts/${type}`),
			siteName: siteConfig.name,
			images: absoluteUrl("/og/charts/image.webp"),
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [absoluteUrl("/og/charts/image.webp")],
		},
	};
}

export default async function ChartPage({ params }: ChartPageProps) {
	const { type } = await params;

	if (!chartTypes.includes(type as ChartType)) {
		return notFound();
	}

	const chartType = type as ChartType;
	const chartList = charts[chartType];

	// Prefetch all chart data in parallel for better performance.
	// Charts are rendered via iframes, so we only need the metadata and highlighted code.
	const chartDataPromises = chartList.map(async (chart) => {
		const registryItem = await getCachedRegistryItem(chart.id);
		if (!registryItem) {
			return null;
		}

		const highlightedCode = await getChartHighlightedCode(
			registryItem.files?.[0]?.content ?? "",
		);
		if (!highlightedCode) {
			return null;
		}

		return {
			...registryItem,
			highlightedCode,
			fullWidth: chart.fullWidth,
		};
	});

	const prefetchedCharts = await Promise.all(chartDataPromises);

	return (
		<div className="grid flex-1 gap-12 pb-24 lg:gap-24">
			<h2 className="sr-only">
				{type.charAt(0).toUpperCase() + type.slice(1)} Charts
			</h2>
			<div className="grid flex-1 scroll-mt-20 items-stretch gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
				{prefetchedCharts.map((chart, index) => {
					if (!chart) {
						return (
							<div
								key={`empty-${index}`}
								className="hidden aspect-square w-full rounded-lg border border-dashed xl:block"
							/>
						);
					}
					return (
						<ChartDisplay
							key={chart.name}
							chart={chart}
							className={cn(chart.fullWidth && "md:col-span-2 lg:col-span-3")}
						/>
					);
				})}
			</div>
		</div>
	);
}
