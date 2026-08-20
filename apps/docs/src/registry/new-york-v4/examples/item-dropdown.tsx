"use client";

import { ChevronDownIcon } from "lucide-react";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import {
	Item,
	ItemContent,
	ItemMedia,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

const people = [
	{
		username: "0xMaqed",
		avatar: "https://github.com/Maqed.png",
	},
	{
		username: "shadcn",
		avatar: "https://github.com/shadcn.png",
	},
	{
		username: "evilrabbit",
		avatar: "https://github.com/evilrabbit.png",
	},
];

export default function ItemDropdown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger render={<Button variant="tertiary" />}>
				Select <ChevronDownIcon />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-48" align="end">
				<DropdownMenuGroup>
					{people.map((person) => (
						<DropdownMenuItem key={person.username}>
							<Item size="xs" className="w-full p-2">
								<ItemMedia>
									<Avatar className="size-8">
										<AvatarImage src={person.avatar} alt="" />
										<AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
									</Avatar>
								</ItemMedia>
								<ItemContent className="gap-0">
									<ItemTitle>{person.username}</ItemTitle>
								</ItemContent>
							</Item>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
