"use client";

import { ChevronRightIcon, MoreHorizontalIcon, PlusIcon } from "lucide-react";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/registry/new-york-v4/ui/sidebar";

export function NavWorkspaces({
	workspaces,
}: {
	workspaces: {
		name: string;
		emoji: React.ReactNode;
		pages: {
			name: string;
			emoji: React.ReactNode;
		}[];
	}[];
}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Workspaces</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{workspaces.map((workspace) => (
						<Collapsible key={workspace.name}>
							<SidebarMenuItem>
								<SidebarMenuButton render={<a href="#" />}>
									<span>{workspace.emoji}</span>
									<span>{workspace.name}</span>
								</SidebarMenuButton>
								<SidebarMenuAction
									render={<CollapsibleTrigger />}
									className="left-2 bg-sidebar-accent text-sidebar-accent-foreground data-open:rotate-90"
									showOnHover
								>
									<ChevronRightIcon />
								</SidebarMenuAction>
								<SidebarMenuAction showOnHover>
									<PlusIcon />
								</SidebarMenuAction>
								<CollapsibleContent>
									<SidebarMenuSub>
										{workspace.pages.map((page) => (
											<SidebarMenuSubItem key={page.name}>
												<SidebarMenuSubButton render={<a href="#" />}>
													<span>{page.emoji}</span>
													<span>{page.name}</span>
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							</SidebarMenuItem>
						</Collapsible>
					))}
					<SidebarMenuItem>
						<SidebarMenuButton className="text-sidebar-foreground/70">
							<MoreHorizontalIcon />
							<span>More</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
