"use client";

import {
	BadgeCheckIcon,
	BellIcon,
	CreditCardIcon,
	LogOutIcon,
} from "lucide-react";
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
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

export default function DropdownMenuAvatar() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				render={<Button variant="ghost" size="icon" className="rounded-full" />}
			>
				<Avatar>
					<AvatarImage src="https://github.com/maqed.png" alt="Maqed" />
					<AvatarFallback>Mqd</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<BadgeCheckIcon />
						Account
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CreditCardIcon />
						Billing
					</DropdownMenuItem>
					<DropdownMenuItem>
						<BellIcon />
						Notifications
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOutIcon />
					Sign Out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
