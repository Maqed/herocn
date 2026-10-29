"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import type { source } from "@/lib/source";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/registry/new-york-v4/ui/command";
import { Spinner } from "@/registry/new-york-v4/ui/spinner";

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

/** Wait for a typing pause before loading the static search client + index. */
const INDEX_SEARCH_IDLE_MS = 500;

type IndexSearchComponent = React.ComponentType<{
	query: string;
	listedPageUrls: Set<string>;
	runCommand: (command: () => unknown) => void;
	onLoadingChange?: (loading: boolean) => void;
}>;

function loadIndexSearchModule() {
	return import("@/components/command-menu-index-search").then(
		(mod) => mod.CommandMenuIndexSearch,
	);
}

export function CommandMenuDialog({
	tree,
	navItems,
	open,
	onOpenChange,
	...props
}: {
	tree: typeof source.pageTree;
	navItems?: { href: string; label: string; isExternal?: boolean }[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const [indexSearchQuery, setIndexSearchQuery] = React.useState("");
	const [indexSearchLoading, setIndexSearchLoading] = React.useState(false);
	const [IndexSearch, setIndexSearch] =
		React.useState<IndexSearchComponent | null>(null);
	const router = useRouter();
	const indexIdleTimerRef =
		React.useRef<ReturnType<typeof setTimeout>>(undefined);
	const indexLoadGenerationRef = React.useRef(0);

	const cancelIndexSearch = React.useCallback(() => {
		indexLoadGenerationRef.current += 1;
		if (indexIdleTimerRef.current) {
			clearTimeout(indexIdleTimerRef.current);
			indexIdleTimerRef.current = undefined;
		}
		setIndexSearch(null);
		setIndexSearchQuery("");
		setIndexSearchLoading(false);
	}, []);

	const startIndexSearch = React.useCallback((query: string) => {
		indexLoadGenerationRef.current += 1;
		const loadId = indexLoadGenerationRef.current;
		setIndexSearchQuery(query);
		setIndexSearchLoading(true);

		void loadIndexSearchModule().then((Component) => {
			if (loadId !== indexLoadGenerationRef.current) {
				return;
			}
			setIndexSearch(() => Component);
		});
	}, []);

	const handleSearchChange = React.useCallback(
		(value: string) => {
			if (indexIdleTimerRef.current) {
				clearTimeout(indexIdleTimerRef.current);
				indexIdleTimerRef.current = undefined;
			}

			const trimmed = value.trim();
			if (!trimmed) {
				cancelIndexSearch();
				return;
			}

			if (IndexSearch) {
				setIndexSearchQuery(value);
				return;
			}

			if (indexSearchLoading) {
				setIndexSearchQuery(value);
				return;
			}

			indexIdleTimerRef.current = setTimeout(() => {
				indexIdleTimerRef.current = undefined;
				startIndexSearch(value);
			}, INDEX_SEARCH_IDLE_MS);
		},
		[IndexSearch, cancelIndexSearch, indexSearchLoading, startIndexSearch],
	);

	const commandFilter = React.useCallback(
		(value: string, searchValue: string, keywords?: string[]) => {
			const extendValue = `${value} ${keywords?.join(" ") ?? ""}`;
			if (extendValue.toLowerCase().includes(searchValue.toLowerCase())) {
				return 1;
			}
			return 0;
		},
		[],
	);

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

	const listedPageUrls = React.useMemo(
		() =>
			new Set(
				groupedItems.flatMap((group) => group.items.map((item) => item.url)),
			),
		[groupedItems],
	);

	const runCommand = React.useCallback(
		(command: () => unknown) => {
			cancelIndexSearch();
			onOpenChange(false);
			command();
		},
		[cancelIndexSearch, onOpenChange],
	);

	React.useEffect(() => {
		if (!open) {
			cancelIndexSearch();
		}
	}, [open, cancelIndexSearch]);

	React.useEffect(() => {
		return () => {
			if (indexIdleTimerRef.current) {
				clearTimeout(indexIdleTimerRef.current);
			}
		};
	}, []);

	return (
		<CommandDialog open={open} onOpenChange={onOpenChange} {...props}>
			<Command filter={commandFilter}>
				<div className="relative">
					<CommandInput
						placeholder="Search documentation…"
						onValueChange={handleSearchChange}
					/>
					{indexSearchLoading ? (
						<div className="pointer-events-none absolute top-1/2 right-3 z-10 flex -translate-y-1/2 items-center justify-center">
							<Spinner size="sm" className="text-muted-foreground" />
						</div>
					) : null}
				</div>
				<CommandList>
					<CommandEmpty>
						{indexSearchLoading ? "Searching…" : "No results found."}
					</CommandEmpty>
					{groupedItems.map((group) => (
						<CommandGroup key={group.value} heading={group.value}>
							{group.items.map((item) => (
								<CommandItem
									key={item.value}
									className="flex w-full items-center"
									keywords={item.keywords}
									value={item.value}
									onSelect={() => runCommand(() => router.push(item.url))}
								>
									{item.label}
								</CommandItem>
							))}
						</CommandGroup>
					))}
					{IndexSearch && indexSearchQuery.trim() ? (
						<IndexSearch
							query={indexSearchQuery}
							listedPageUrls={listedPageUrls}
							runCommand={runCommand}
							onLoadingChange={setIndexSearchLoading}
						/>
					) : null}
				</CommandList>
			</Command>
		</CommandDialog>
	);
}
