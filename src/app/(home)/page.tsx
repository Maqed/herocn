import type { Metadata } from "next";
import Link from "next/link";
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
		<div className="flex w-full flex-col justify-center gap-4 py-4 text-center">
			<h1 className="font-bold text-4xl">
				<span>HeroUI's design system.</span>
				<br />
				<span className="text-muted-foreground">shadcn's abstraction.</span>
			</h1>
			<div className="mb-25 flex items-center justify-center gap-3">
				<Button
					nativeButton={false}
					render={<Link href="/docs/installation">Install</Link>}
				/>
				<Button
					nativeButton={false}
					variant="secondary"
					render={<Link href="/docs/components">View components</Link>}
				/>
			</div>
			<section className="container mx-auto w-full px-4">
				<RootComponents />
			</section>
		</div>
	);
}
