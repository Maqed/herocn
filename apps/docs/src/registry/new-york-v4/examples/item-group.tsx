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
	ItemGroup,
	ItemMedia,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

const people = [
	{
		username: "0xMaqed",
		avatar: "https://github.com/Maqed.png",
		role: "Copy/Paster",
	},
	{
		username: "shadcn",
		avatar: "https://github.com/shadcn.png",
		role: "Creator of shadcn",
	},
	{
		username: "maxleiter",
		avatar: "https://github.com/maxleiter.png",
		role: "SWE",
	},
];

export default function ItemGroupExample() {
	return (
		<ItemGroup className="max-w-sm">
			{people.map((person) => (
				<Item key={person.username} variant="outline">
					<ItemMedia>
						<Avatar>
							<AvatarImage src={person.avatar} alt="" />
							<AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
						</Avatar>
					</ItemMedia>
					<ItemContent className="gap-1">
						<ItemTitle>{person.username}</ItemTitle>
						<ItemDescription>{person.role}</ItemDescription>
					</ItemContent>
					<ItemActions>
						<Button variant="ghost" size="icon" className="rounded-full">
							<PlusIcon />
						</Button>
					</ItemActions>
				</Item>
			))}
		</ItemGroup>
	);
}
