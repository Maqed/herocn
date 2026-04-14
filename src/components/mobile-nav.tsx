"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { getPagesFromFolder } from "@/lib/page-tree";
import type { source } from "@/lib/source";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export function MobileNav({
	tree,
	items,
	className,
}: {
	tree: typeof source.pageTree;
	items: { href: string; label: string; isExternal?: boolean }[];
	className?: string;
}) {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={
					<Button
						variant="ghost"
						className={cn(
							"extend-touch-target h-8 touch-manipulation items-center justify-start gap-2 p-0 aria-expanded:bg-transparent aria-expanded:text-foreground",
							className,
						)}
					>
						<div className="relative flex h-8 w-4 items-center justify-center">
							<div className="relative size-4">
								<span
									className={cn(
										"absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
										open ? "top-[0.4rem] -rotate-45" : "top-1",
									)}
								/>
								<span
									className={cn(
										"absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
										open ? "top-[0.4rem] rotate-45" : "top-2.5",
									)}
								/>
							</div>
							<span className="sr-only">Toggle Menu</span>
						</div>
						<span className="flex h-8 items-center font-medium text-lg leading-none">
							Menu
						</span>
					</Button>
				}
			/>
			<PopoverContent
				className="no-scrollbar h-(--available-height) w-(--available-width) overflow-y-auto rounded-none border-none bg-background/90 p-0 shadow-none backdrop-blur duration-100 data-open:animate-none!"
				align="start"
				side="bottom"
				alignOffset={-16}
				sideOffset={14}
			>
				<div className="flex flex-col gap-12 overflow-auto px-6 py-6">
					<div className="flex flex-col gap-4">
						<div className="font-medium text-muted-foreground text-sm">
							Menu
						</div>
						<div className="flex flex-col gap-3">
							<MobileLink href="/" onOpenChange={setOpen}>
								Home
							</MobileLink>
							{items.map((item, index) => (
								<MobileLink
									key={`mobile-link-${index}`}
									href={item.href}
									onOpenChange={setOpen}
									isExternal={item?.isExternal}
								>
									{item.label} {item?.isExternal && <ExternalLinkIcon />}
								</MobileLink>
							))}
						</div>
					</div>
					<div className="flex flex-col gap-8">
						{tree?.children?.map((group, index) => {
							if (group.type === "folder") {
								const pages = getPagesFromFolder(group);
								return (
									<div
										key={`${group.$id}-mobile-link`}
										className="flex flex-col gap-4"
									>
										<div className="font-medium text-muted-foreground text-sm">
											{group.name}
										</div>
										<div className="flex flex-col gap-3">
											{pages.map((item) => {
												return (
													<MobileLink
														key={`${item.url}-${index}`}
														href={item.url}
														onOpenChange={setOpen}
														className="flex items-center gap-2"
													>
														{item.name}
													</MobileLink>
												);
											})}
										</div>
									</div>
								);
							}
							return null;
						})}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	isExternal,
	...props
}: LinkProps & {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
	className?: string;
	isExternal?: boolean;
}) {
	const router = useRouter();
	if (isExternal) {
		return (
			<a
				href={href.toString()}
				target="_blank"
				rel="noopener noreferrer"
				className={cn(
					"flex items-center gap-2 font-medium text-2xl",
					className,
				)}
			>
				{children}
			</a>
		);
	}
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			className={cn("flex items-center gap-2 font-medium text-2xl", className)}
			{...props}
		>
			{children}
		</Link>
	);
}
