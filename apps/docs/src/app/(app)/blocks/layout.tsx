import type { Metadata } from "next";
import Link from "next/link";

import { BlocksNav } from "@/components/blocks-nav";
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/page-header";
import { siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";

const title = "Building Blocks for the Web";
const description =
	"Clean, modern building blocks. Copy and paste into your apps. Works with all React frameworks. Open Source. Free forever.";

export const metadata: Metadata = {
	title,
	description,
	alternates: {
		canonical: absoluteUrl("/blocks"),
	},
	openGraph: {
		title,
		description,
		url: absoluteUrl("/blocks"),
		siteName: siteConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
	},
};

export default function BlocksLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<PageHeader className="pt-6 md:pt-10 lg:pt-12">
				<PageHeaderHeading>{title}</PageHeaderHeading>
				<PageHeaderDescription className="text-muted-foreground">
					{description}
				</PageHeaderDescription>
				<PageActions>
					<Button
						nativeButton={false}
						render={<Link href="#blocks">Browse Blocks</Link>}
					/>
					<Button
						nativeButton={false}
						variant="secondary"
						render={<Link href="/docs/components">View Components</Link>}
					/>
				</PageActions>
			</PageHeader>
			<div
				id="blocks"
				className="mx-auto w-full max-w-[2400px] scroll-mt-24 px-4 xl:px-8"
			>
				<div className="flex items-center justify-between gap-4 py-4">
					<BlocksNav />
					<Button
						nativeButton={false}
						variant="secondary"
						size="sm"
						className="me-7 hidden lg:flex"
						render={<Link href="/blocks/sidebar">Browse all blocks</Link>}
					/>
				</div>
			</div>
			<div className="mx-auto w-full max-w-[2400px] flex-1 px-4 xl:px-8">
				{children}
			</div>
		</>
	);
}
