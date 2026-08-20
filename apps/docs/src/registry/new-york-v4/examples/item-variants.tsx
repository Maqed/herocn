import { InboxIcon } from "lucide-react";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

export default function ItemVariants() {
	return (
		<div className="flex w-full max-w-md flex-col gap-6">
			<Item>
				<ItemMedia variant="icon">
					<InboxIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Default</ItemTitle>
					<ItemDescription>
						Surface background with shadow for emphasis.
					</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant="secondary">
				<ItemMedia variant="icon">
					<InboxIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Secondary</ItemTitle>
					<ItemDescription>
						Secondary surface for layered layouts.
					</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant="tertiary">
				<ItemMedia variant="icon">
					<InboxIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Tertiary</ItemTitle>
					<ItemDescription>
						Tertiary surface for the quietest blocks.
					</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant="outline">
				<ItemMedia variant="icon">
					<InboxIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Outline</ItemTitle>
					<ItemDescription>
						Outlined style with a visible border.
					</ItemDescription>
				</ItemContent>
			</Item>
			<Item variant="transparent">
				<ItemMedia variant="icon">
					<InboxIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Transparent</ItemTitle>
					<ItemDescription>
						No background—spacing and focus styles only.
					</ItemDescription>
				</ItemContent>
			</Item>
		</div>
	);
}
