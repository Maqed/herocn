"use client";

import { ChevronDownIcon, PlusIcon } from "lucide-react";

import * as React from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar";

export function TeamSwitcher({
	teams,
}: {
	teams: {
		name: string;
		logo: React.ReactNode;
		plan: string;
	}[];
}) {
	const [activeTeam, setActiveTeam] = React.useState(teams[0]);
	if (!activeTeam) {
		return null;
	}
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<SidebarMenuButton className="w-fit px-1.5 aria-expanded:bg-muted aria-expanded:text-foreground" />
						}
					>
						<div className="flex aspect-square size-5 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
							{activeTeam.logo}
						</div>
						<span className="truncate font-medium">{activeTeam.name}</span>
						<ChevronDownIcon className="opacity-50" />
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start" side="bottom" sideOffset={4}>
						<DropdownMenuGroup>
							<DropdownMenuLabel className="text-muted-foreground text-xs">
								Teams
							</DropdownMenuLabel>
							{teams.map((team, index) => (
								<DropdownMenuItem
									key={team.name}
									onClick={() => setActiveTeam(team)}
									className="gap-2 p-2"
								>
									<div className="flex size-6 items-center justify-center rounded-xs border">
										{team.logo}
									</div>
									{team.name}
									<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
								</DropdownMenuItem>
							))}
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem className="gap-2 p-2">
								<div className="flex size-6 items-center justify-center rounded-md border bg-background">
									<PlusIcon className="size-4" />
								</div>
								<div className="font-medium text-muted-foreground">
									Add team
								</div>
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
