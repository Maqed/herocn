import type { Metadata } from "next";
import Link from "next/link";

import { ChartsNav } from "@/components/charts-nav";
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/page-header";
import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";
import { buttonVariants } from "@/registry/new-york-v4/ui/button";

const title = "Beautiful Charts & Graphs";
const description =
	"A collection of ready-to-use chart components built with Recharts. From basic charts to rich data displays, copy and paste into your apps.";

export const metadata: Metadata = {
	title,
	description,
	alternates: {
		canonical: absoluteUrl("/charts/area"),
	},
	openGraph: {
		title,
		description,
		url: absoluteUrl("/charts/area"),
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
};

export default function ChartsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<PageHeader>
				<PageHeaderHeading>{title}</PageHeaderHeading>
				<PageHeaderDescription>{description}</PageHeaderDescription>
				<PageActions>
					<Link href="#charts" className={buttonVariants()}>
						Browse Charts
					</Link>
					<Link
						href="/docs/components/chart"
						className={buttonVariants({ variant: "secondary" })}
					>
						Documentation
					</Link>
				</PageActions>
			</PageHeader>
			<div
				id="charts"
				className="mx-auto w-full max-w-[2400px] scroll-mt-24 px-4 xl:px-8"
			>
				<div className="flex items-center justify-between gap-4 py-4">
					<ChartsNav />
				</div>
			</div>
			<div className="mx-auto w-full max-w-[2400px] flex-1 px-4 xl:px-8">
				<div className="container pb-6">
					<section>{children}</section>
				</div>
			</div>
		</>
	);
}
