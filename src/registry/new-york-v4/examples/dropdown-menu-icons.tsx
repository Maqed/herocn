"use client";

import {
	CreditCardIcon,
	LogOutIcon,
	SettingsIcon,
	UserIcon,
} from "lucide-react";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

export default function DropdownMenuIcons() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger render={<Button variant="tertiary" />}>
				Open
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<UserIcon />
					Profile
				</DropdownMenuItem>
				<DropdownMenuItem>
					<CreditCardIcon />
					Billing
				</DropdownMenuItem>
				<DropdownMenuItem>
					<SettingsIcon />
					Settings
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">
					<LogOutIcon />
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
