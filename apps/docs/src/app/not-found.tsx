import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/registry/new-york-v4/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/registry/new-york-v4/ui/empty";

export const metadata: Metadata = {
	title: "404 — Page Not Found",
	description: "Sorry, the page you're looking for could not be found.",
	robots: {
		index: false,
		follow: false,
	},
};

export default function NotFound() {
	return (
		<>
			<SiteHeader />
			<main className="flex flex-1 flex-col items-center justify-center p-6 text-center">
				<Empty>
					<EmptyHeader className="max-w-none items-center gap-0">
						<EmptyMedia className="relative mb-0 h-63 w-full max-w-165">
							<img
								src="/404.png"
								alt="404 Not Found"
								width={658}
								height={252}
								className="absolute inset-0 block h-full w-full object-cover dark:hidden"
							/>
							<img
								src="/404-dark.png"
								alt="404 Not Found"
								width={658}
								height={252}
								className="absolute inset-0 hidden h-full w-full object-cover dark:block"
							/>
						</EmptyMedia>
						<EmptyTitle className="font-bold text-4xl tracking-tight">
							404
						</EmptyTitle>
						<EmptyDescription className="mt-2 max-w-sm text-balance text-base">
							Sorry, the page you&apos;re looking for could not be found.
						</EmptyDescription>
					</EmptyHeader>
					<EmptyContent className="mt-4">
						<Link className={buttonVariants({ variant: "tertiary" })} href="/">
							Return Home
						</Link>
					</EmptyContent>
				</Empty>
			</main>
		</>
	);
}
