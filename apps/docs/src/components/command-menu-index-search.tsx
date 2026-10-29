"use client";

import { useDocsSearch } from "fumadocs-core/search/client";
import { staticClient } from "fumadocs-core/search/client/orama-static";
import { useRouter } from "next/navigation";
import * as React from "react";
import { CommandGroup, CommandItem } from "@/registry/new-york-v4/ui/command";

function plainText(value: string) {
	return value
		.replace(/<\/?mark>/gi, "")
		.replace(/\*\*(.*?)\*\*/g, "$1")
		.replace(/__(.*?)__/g, "$1")
		.replace(/[`*]/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

export function CommandMenuIndexSearch({
	query,
	listedPageUrls,
	runCommand,
	onLoadingChange,
}: {
	query: string;
	listedPageUrls: Set<string>;
	runCommand: (command: () => unknown) => void;
	onLoadingChange?: (loading: boolean) => void;
}) {
	const router = useRouter();
	const searchClient = React.useMemo(() => staticClient(), []);
	const {
		search,
		setSearch,
		query: searchQuery,
	} = useDocsSearch({
		client: searchClient,
	});

	React.useEffect(() => {
		setSearch(query);
	}, [query, setSearch]);

	React.useEffect(() => {
		onLoadingChange?.(searchQuery.isLoading);
	}, [onLoadingChange, searchQuery.isLoading]);

	const uniqueResults = React.useMemo(() => {
		if (!searchQuery.data || !Array.isArray(searchQuery.data)) {
			return [];
		}

		return searchQuery.data
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
	}, [listedPageUrls, searchQuery.data]);

	if (!search.trim()) {
		return null;
	}

	if (searchQuery.error) {
		return (
			<CommandGroup heading="Search Results">
				<div className="px-3 py-2 text-muted-foreground text-sm">
					Search index unavailable.
				</div>
			</CommandGroup>
		);
	}

	if (!searchQuery.data || searchQuery.data === "empty") {
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
