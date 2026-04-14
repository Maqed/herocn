"use client";

import { PencilIcon, ShareIcon, TrashIcon } from "lucide-react";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

export default function DropdownMenuDestructive() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger render={<Button variant="tertiary" />}>
				Actions
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<PencilIcon />
						Edit
					</DropdownMenuItem>
					<DropdownMenuItem>
						<ShareIcon />
						Share
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem variant="destructive">
						<TrashIcon />
						Delete
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
