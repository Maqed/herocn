import { PlusIcon } from "lucide-react";

import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/registry/new-york-v4/ui/empty";

export function EmptyAvatarGroup() {
	return (
		<Empty className="flex-none rounded-3xl bg-surface py-10">
			<EmptyHeader>
				<EmptyMedia>
					<AvatarGroup>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
							<AvatarFallback>Mqd</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage
								src="https://github.com/evilrabbit.png"
								alt="@evilrabbit"
							/>
							<AvatarFallback>ER</AvatarFallback>
						</Avatar>
					</AvatarGroup>
				</EmptyMedia>
				<EmptyTitle>No Team Members</EmptyTitle>
				<EmptyDescription>
					Invite your team to collaborate on this project.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button size="sm">
					<PlusIcon />
					Invite Members
				</Button>
			</EmptyContent>
		</Empty>
	);
}
