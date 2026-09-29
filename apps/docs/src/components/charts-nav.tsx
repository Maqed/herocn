"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ScrollArea, ScrollBar } from "@/registry/new-york-v4/ui/scroll-area";

const links = [
	{
		name: "Area Charts",
		href: "/charts/area",
	},
	{
		name: "Bar Charts",
		href: "/charts/bar",
	},
	{
		name: "Line Charts",
		href: "/charts/line",
	},
	{
		name: "Pie Charts",
		href: "/charts/pie",
	},
	{
		name: "Radar Charts",
		href: "/charts/radar",
	},
	{
		name: "Radial Charts",
		href: "/charts/radial",
	},
	{
		name: "Tooltips",
		href: "/charts/tooltip",
	},
];

export function ChartsNav({
	className,
	...props
}: React.ComponentProps<"div">) {
	const pathname = usePathname();

	return (
		<div className="relative overflow-hidden">
			<ScrollArea className="max-w-[600px] lg:max-w-none">
				<div className={cn("flex items-center", className)} {...props}>
					{links.map((link) => (
						<Link
							href={`${link.href}#charts`}
							key={link.href}
							data-active={pathname === link.href}
							className={cn(
								"flex h-7 shrink-0 items-center justify-center px-4 text-center font-medium text-base text-muted-foreground transition-colors hover:text-primary data-[active=true]:text-primary",
							)}
						>
							{link.name}
						</Link>
					))}
				</div>
				<ScrollBar orientation="horizontal" className="invisible" />
			</ScrollArea>
		</div>
	);
}
