import { PlusIcon } from "lucide-react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

export default function ItemAvatar() {
	return (
		<div className="flex w-full max-w-lg flex-col gap-6">
			<Item variant="outline">
				<ItemMedia>
					<Avatar className="size-10">
						<AvatarImage src="https://github.com/evilrabbit.png" alt="" />
						<AvatarFallback>ER</AvatarFallback>
					</Avatar>
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Evil Rabbit</ItemTitle>
					<ItemDescription>Last seen 5 months ago</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button
						size="icon-sm"
						variant="outline"
						className="rounded-full"
						aria-label="Invite"
					>
						<PlusIcon />
					</Button>
				</ItemActions>
			</Item>
			<Item variant="outline">
				<ItemMedia>
					<div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
						<Avatar className="hidden sm:flex">
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar className="hidden sm:flex">
							<AvatarImage
								src="https://github.com/maxleiter.png"
								alt="@maxleiter"
							/>
							<AvatarFallback>LR</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
							<AvatarFallback>Mqd</AvatarFallback>
						</Avatar>
					</div>
				</ItemMedia>
				<ItemContent>
					<ItemTitle>No team members</ItemTitle>
					<ItemDescription>
						Invite your team to collaborate on this project.
					</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button size="sm" variant="outline">
						Invite
					</Button>
				</ItemActions>
			</Item>
		</div>
	);
}
