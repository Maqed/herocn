"use client";
import { useDocsSearch } from "fumadocs-core/search/client";
import { staticClient } from "fumadocs-core/search/client/orama-static";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
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

function plainText(value: string) {
	return value
		.replace(/<\/?mark>/gi, "")
		.replace(/\*\*(.*?)\*\*/g, "$1")
		.replace(/__(.*?)__/g, "$1")
		.replace(/[`*]/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

const searchClient = staticClient();

type DocsSearchQuery = Awaited<ReturnType<typeof useDocsSearch>>["query"];

export function CommandMenu({
	tree,
	navItems,
	...props
}: {
	tree: typeof source.pageTree;
	navItems?: { href: string; label: string; isExternal?: boolean }[];
}) {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();
	const { search, setSearch, query } = useDocsSearch({
		client: searchClient,
	});

	const searchTimeoutRef =
		React.useRef<ReturnType<typeof setTimeout>>(undefined);

	const handleSearchChange = React.useCallback(
		(value: string) => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}

			searchTimeoutRef.current = setTimeout(() => {
				setSearch(value);
			}, 300);
		},
		[setSearch],
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

	const runCommand = (command: () => unknown) => {
		setOpen(false);
		command();
	};

	React.useEffect(() => {
		if (!open) setSearch("");
	}, [open, setSearch]);

	React.useEffect(() => {
		return () => {
			if (searchTimeoutRef.current) {
				clearTimeout(searchTimeoutRef.current);
			}
		};
	}, []);

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
				<Command filter={commandFilter}>
					<CommandInput
						placeholder="Search documentation…"
						onValueChange={handleSearchChange}
					/>
					<CommandList>
						<CommandEmpty>
							{query.error
								? "Search index unavailable."
								: query.isLoading
									? "Searching…"
									: "No results found."}
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
						<SearchResults
							listedPageUrls={listedPageUrls}
							query={query}
							runCommand={runCommand}
							search={search}
						/>
					</CommandList>
				</Command>
			</CommandDialog>
		</>
	);
}

function SearchResults({
	search,
	query,
	listedPageUrls,
	runCommand,
}: {
	search: string;
	query: DocsSearchQuery;
	listedPageUrls: Set<string>;
	runCommand: (command: () => unknown) => void;
}) {
	const router = useRouter();

	const uniqueResults = React.useMemo(() => {
		if (!query.data || !Array.isArray(query.data)) {
			return [];
		}

		return query.data
			.filter((item) => item.type !== "page" || !listedPageUrls.has(item.url))
			.filter(
				(item, index, self) =>
					!(
						item.type === "text" &&
						plainText(item.content).trim().split(/\s+/).length <= 1
					) &&
					index ===
						self.findIndex(
							(other) => plainText(other.content) === plainText(item.content),
						),
			);
	}, [listedPageUrls, query.data]);

	if (!search.trim()) {
		return null;
	}

	if (!query.data || query.data === "empty") {
		return null;
	}

	if (uniqueResults.length === 0) {
		return null;
	}

	return (
		<CommandGroup heading="Search Results">
			{uniqueResults.map((item) => {
				const content = plainText(item.content);

				return (
					<CommandItem
						key={item.id}
						className="flex w-full items-center"
						data-type={item.type}
						keywords={[content]}
						value={`${content} ${item.type}`}
						onSelect={() => runCommand(() => router.push(item.url))}
					>
						<span className="line-clamp-2 min-w-0 text-sm">{content}</span>
					</CommandItem>
				);
			})}
		</CommandGroup>
	);
}
