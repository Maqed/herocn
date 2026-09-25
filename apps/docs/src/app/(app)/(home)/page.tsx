import type { Metadata } from "next";
import Link from "next/link";
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/page-header";
import { PAGES_METADATA, siteConfig } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";
import { buttonVariants } from "@/registry/new-york-v4/ui/button";
import { CardsDemo } from "./cards";

export const metadata: Metadata = {
	title: { absolute: PAGES_METADATA.get("/")?.title ?? siteConfig.name },
	description: PAGES_METADATA.get("/")?.description,
	alternates: {
		canonical: absoluteUrl("/"),
	},
	openGraph: {
		type: "website",
		url: absoluteUrl("/"),
		siteName: siteConfig.name,
		locale: "en_US",
		title: PAGES_METADATA.get("/")?.title,
		description: PAGES_METADATA.get("/")?.description,
		images: absoluteUrl("/og/image.webp"),
	},
	twitter: {
		card: "summary_large_image",
		title: PAGES_METADATA.get("/")?.title,
		description: PAGES_METADATA.get("/")?.description,
		images: [absoluteUrl("/og/image.webp")],
	},
};

export default function HomePage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: siteConfig.name,
		url: absoluteUrl("/"),
		description: siteConfig.description,
	};

	return (
		<div className="flex flex-1 flex-col">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
				}}
			/>
			<PageHeader>
				<PageHeaderHeading>
					<span>HeroUI's design system.</span>
					<br />
					<span className="text-muted-foreground">shadcn's abstraction.</span>
				</PageHeaderHeading>
				<PageHeaderDescription>
					shadcn's way of building components, but with the look and feel of
					HeroUI.
				</PageHeaderDescription>
				<PageActions>
					<Link href="/docs/installation" className={buttonVariants()}>
						Install
					</Link>
					<Link
						href="/docs/components"
						className={buttonVariants({ variant: "secondary" })}
					>
						View components
					</Link>
				</PageActions>
			</PageHeader>
			<section className="mx-auto w-full max-w-[2400px] px-4 xl:px-8">
				<CardsDemo />
			</section>
		</div>
	);
}
