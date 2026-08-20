import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

export default function ItemLink() {
	return (
		<div className="flex w-full max-w-md flex-col gap-4">
			<Item render={<a href="#" aria-label="Open documentation" />}>
				<ItemContent>
					<ItemTitle>Visit our documentation</ItemTitle>
					<ItemDescription>
						Learn how to get started with our components.
					</ItemDescription>
				</ItemContent>
				<ItemActions>
					<ChevronRightIcon className="size-4 rtl:rotate-180" />
				</ItemActions>
			</Item>
			<Item
				variant="outline"
				render={
					<a
						href="#"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Open external resource in a new tab"
					/>
				}
			>
				<ItemContent>
					<ItemTitle>External resource</ItemTitle>
					<ItemDescription>
						Opens in a new tab with security attributes.
					</ItemDescription>
				</ItemContent>
				<ItemActions>
					<ExternalLinkIcon className="size-4" />
				</ItemActions>
			</Item>
		</div>
	);
}
