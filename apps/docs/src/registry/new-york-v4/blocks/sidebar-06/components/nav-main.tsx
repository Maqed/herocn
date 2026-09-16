"use client";

import { MoreHorizontalIcon } from "lucide-react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import {
	SidebarGroup,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/registry/new-york-v4/ui/sidebar";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		url: string;
		icon?: React.ReactNode;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
		}[];
	}[];
}) {
	const { isMobile } = useSidebar();
	return (
		<SidebarGroup>
			<SidebarMenu>
				{items.map((item) => (
					<DropdownMenu key={item.title}>
						<SidebarMenuItem>
							<DropdownMenuTrigger
								render={
									<SidebarMenuButton className="aria-expanded:bg-muted" />
								}
							>
								{item.title} <MoreHorizontalIcon className="ml-auto" />
							</DropdownMenuTrigger>
							{item.items?.length ? (
								<DropdownMenuContent
									side={isMobile ? "bottom" : "right"}
									align={isMobile ? "end" : "start"}
								>
									{item.items.map((item) => (
										<DropdownMenuItem
											key={item.title}
											render={<a href={item.url} />}
										>
											{item.title}
										</DropdownMenuItem>
									))}
								</DropdownMenuContent>
							) : null}
						</SidebarMenuItem>
					</DropdownMenu>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
