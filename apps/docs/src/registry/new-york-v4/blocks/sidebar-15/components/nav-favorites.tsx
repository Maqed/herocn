"use client";

import {
	ArrowUpRightIcon,
	LinkIcon,
	MoreHorizontalIcon,
	StarOffIcon,
	Trash2Icon,
} from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/registry/new-york-v4/ui/sidebar";

export function NavFavorites({
	favorites,
}: {
	favorites: {
		name: string;
		url: string;
		emoji: string;
	}[];
}) {
	const { isMobile } = useSidebar();
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>Favorites</SidebarGroupLabel>
			<SidebarMenu>
				{favorites.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton render={<a href={item.url} title={item.name} />}>
							<span>{item.emoji}</span>
							<span>{item.name}</span>
						</SidebarMenuButton>
						<DropdownMenu>
							<DropdownMenuTrigger
								render={
									<SidebarMenuAction
										showOnHover
										className="aria-expanded:bg-muted"
									/>
								}
							>
								<MoreHorizontalIcon />
								<span className="sr-only">More</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								side={isMobile ? "bottom" : "right"}
								align={isMobile ? "end" : "start"}
							>
								<DropdownMenuItem>
									<StarOffIcon className="text-muted-foreground" />
									<span>Remove from Favorites</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<LinkIcon className="text-muted-foreground" />
									<span>Copy Link</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<ArrowUpRightIcon className="text-muted-foreground" />
									<span>Open in New Tab</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem variant="destructive">
									<Trash2Icon className="text-muted-foreground" />
									<span>Delete</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				))}
				<SidebarMenuItem>
					<SidebarMenuButton className="text-sidebar-foreground/70">
						<MoreHorizontalIcon />
						<span>More</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
}
