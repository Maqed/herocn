import type { Metadata } from "next";

import { BlockDisplay } from "@/components/block-display";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
	alternates: {
		canonical: "/blocks",
	},
};

const FEATURED_BLOCKS = [
	"dashboard-01",
	"sidebar-07",
	"sidebar-03",
	"login-03",
	"login-04",
];

export default function BlocksPage() {
	return (
		<div className="flex flex-col gap-12 pt-8 pb-24 md:gap-24">
			{FEATURED_BLOCKS.map((name) => (
				<BlockDisplay name={name} key={name} />
			))}
		</div>
	);
}
