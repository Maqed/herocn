import { InboxIcon } from "lucide-react";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

export default function ItemSizes() {
	return (
		<div className="flex w-full max-w-md flex-col gap-6">
			<Item variant="outline">
				<ItemMedia variant="icon">
					<InboxIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Default size</ItemTitle>
					<ItemDescription>
						The standard size for most use cases.
					</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant="outline" size="sm">
				<ItemMedia variant="icon">
					<InboxIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Small</ItemTitle>
					<ItemDescription>A compact size for dense layouts.</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant="outline" size="xs">
				<ItemMedia variant="icon">
					<InboxIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Extra small</ItemTitle>
					<ItemDescription>The most compact size available.</ItemDescription>
				</ItemContent>
			</Item>
		</div>
	);
}
