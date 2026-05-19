"use client";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import * as React from "react";
import type { source } from "@/lib/source";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/registry/new-york-v4/ui/command";

interface PageItem {
	value: string;
	label: string;
	url: string;
	isComponent: boolean;
	keywords?: string[];
}

interface PageGroup {
	value: string;
	items: PageItem[];
}

export function CommandMenu({
	tree,
	navItems,
	...props
}: ComponentProps<typeof CommandDialog> & {
	tree: typeof source.pageTree;
	navItems?: { href: string; label: string; isExternal?: boolean }[];
}) {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();

	const groupedItems = React.useMemo<PageGroup[]>(() => {
		const groups: PageGroup[] = [];

		if (navItems && navItems.length > 0) {
			groups.push({
				items: navItems.map((item) => ({
					isComponent: false,
					keywords: ["nav", "navigation", item.label.toLowerCase()],
					label: item.label,
					url: item.href,
					value: `Navigation ${item.label}`,
				})),
				value: "Pages",
			});
		}

		tree.children.forEach((group) => {
			if (group.type === "folder") {
				const items: PageItem[] = [];
				group.children.forEach((item) => {
					if (item.type === "page") {
						const isComponent = item.url.includes("/components/");
						const itemName = item.name?.toString() || "";
						items.push({
							isComponent,
							keywords: isComponent ? ["component"] : undefined,
							label: itemName,
							url: item.url,
							value: itemName ? `${group.name} ${itemName}` : "",
						});
					}
				});
				if (items.length > 0) {
					groups.push({
						items,
						value:
							typeof group.name === "string" ? group.name : String(group.name),
					});
				}
			}
		});

		return groups;
	}, [tree, navItems]);

	const runCommand = (command: () => unknown) => {
		setOpen(false);
		command();
	};

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
				if (
					(e.target instanceof HTMLElement && e.target.isContentEditable) ||
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement ||
					e.target instanceof HTMLSelectElement
				) {
					return;
				}

				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<Button
				variant="outline"
				className="max-md:size-8 max-md:border-none md:pe-10 max-md:[&_svg:not([class*='size-'])]:size-4.5"
				onClick={() => setOpen(true)}
			>
				<span className="hidden xl:inline-flex">Search documentation...</span>
				<span className="hidden md:inline-flex xl:hidden">Search...</span>
				<span>
					<SearchIcon className="md:hidden" />
				</span>
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen} {...props}>
				<Command>
					<CommandInput placeholder="Search documentation…" />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						{groupedItems.map((group) => (
							<CommandGroup key={group.value} heading={group.value}>
								{group.items.map((item) => (
									<CommandItem
										key={item.value}
										className="flex w-full items-center"
										onSelect={() => runCommand(() => router.push(item.url))}
									>
										{item.label}
									</CommandItem>
								))}
							</CommandGroup>
						))}
					</CommandList>
				</Command>
			</CommandDialog>
		</>
	);
}
