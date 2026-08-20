"use client";

import { MenuIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

function useActiveItem(itemIds: string[]) {
	const [activeId, setActiveId] = React.useState<string | null>(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				}
			},
			{ rootMargin: "0% 0% -80% 0%" },
		);

		for (const id of itemIds ?? []) {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		}

		return () => {
			for (const id of itemIds ?? []) {
				const element = document.getElementById(id);
				if (element) {
					observer.unobserve(element);
				}
			}
		};
	}, [itemIds]);

	return activeId;
}

export function DocsTableOfContents({
	toc,
	variant = "list",
	className,
}: {
	toc: {
		title?: React.ReactNode;
		url: string;
		depth: number;
	}[];
	variant?: "dropdown" | "list";
	className?: string;
}) {
	const [open, setOpen] = React.useState(false);
	const itemIds = React.useMemo(
		() => toc.map((item) => item.url.replace("#", "")),
		[toc],
	);
	const activeHeading = useActiveItem(itemIds);

	if (!toc?.length) {
		return null;
	}

	if (variant === "dropdown") {
		return (
			<DropdownMenu open={open} onOpenChange={setOpen}>
				<DropdownMenuTrigger
					render={
						<Button
							variant="outline"
							size="sm"
							className={cn("h-8 md:h-7", className)}
						>
							<MenuIcon /> On This Page
						</Button>
					}
				/>
				<DropdownMenuContent
					align="start"
					className="no-scrollbar max-h-[70svh]"
				>
					{toc.map((item) => (
						<DropdownMenuItem
							key={item.url}
							render={<a href={item.url}>{item.title}</a>}
							onClick={() => {
								setOpen(false);
							}}
							data-depth={item.depth}
							className="data-[depth=3]:pl-6 data-[depth=4]:pl-8"
						/>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<div className={cn("flex flex-col gap-2 p-4 pt-0 text-sm", className)}>
			<p className="sticky top-0 h-6 bg-background font-medium text-muted-foreground text-xs">
				On This Page
			</p>
			{toc.map((item) => (
				<a
					key={item.url}
					href={item.url}
					className="text-[0.8rem] text-muted-foreground no-underline transition-colors hover:text-foreground data-[depth=3]:pl-4 data-[depth=4]:pl-6 data-[active=true]:font-medium data-[active=true]:text-foreground"
					data-active={item.url === `#${activeHeading}`}
					data-depth={item.depth}
				>
					{item.title}
				</a>
			))}
		</div>
	);
}
