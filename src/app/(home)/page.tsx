import type { Metadata } from "next";
import Link from "next/link";
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from "@/components/page-header";
import { PAGES_METADATA } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";
import { RootComponents } from "./components";

export const metadata: Metadata = {
	title: PAGES_METADATA.get("/")?.title,
	description: PAGES_METADATA.get("/")?.description,
	openGraph: {
		title: PAGES_METADATA.get("/")?.title,
		description: PAGES_METADATA.get("/")?.description,
		images: absoluteUrl("/og/image.webp"),
	},
};

export default function HomePage() {
	return (
		<div className="flex flex-1 flex-col">
			<PageHeader>
				<PageHeaderHeading className="max-w-4xl">
					<span>HeroUI's design system.</span>
					<br />
					<span className="text-muted-foreground">shadcn's abstraction.</span>
				</PageHeaderHeading>
				<PageHeaderDescription>
					shadcn's way of building components, but with the look and feel of
					HeroUI.
				</PageHeaderDescription>
				<PageActions>
					<Button
						nativeButton={false}
						render={<Link href="/docs/installation">Install</Link>}
					/>
					<Button
						nativeButton={false}
						variant="secondary"
						render={<Link href="/docs/components">View components</Link>}
					/>
				</PageActions>
			</PageHeader>
			<section className="container mx-auto w-full px-4">
				<RootComponents />
			</section>
		</div>
	);
}
