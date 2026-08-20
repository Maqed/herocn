import { PlusIcon } from "lucide-react";

import {
	Avatar,
	AvatarFallback,
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

export default function EmptyAvatarGroup() {
	return (
		<Empty>
			<EmptyHeader>
				<EmptyMedia>
					<div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
						<Avatar>
							<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
							<AvatarFallback>Mqd</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>CN</AvatarFallback>
						</Avatar>
						<Avatar>
							<AvatarImage
								src="https://github.com/evilrabbit.png"
								alt="@evilrabbit"
							/>
							<AvatarFallback>ER</AvatarFallback>
						</Avatar>
					</div>
				</EmptyMedia>
				<EmptyTitle>No Team Members</EmptyTitle>
				<EmptyDescription>
					Invite your team to collaborate on this project.
				</EmptyDescription>
			</EmptyHeader>
			<EmptyContent>
				<Button size="sm">
					<PlusIcon data-icon="inline-start" />
					Invite Members
				</Button>
			</EmptyContent>
		</Empty>
	);
}
