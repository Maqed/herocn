"use client";

import { PlusIcon } from "lucide-react";

import type * as React from "react";

import { Calendars } from "@/registry/new-york-v4/blocks/sidebar-12/components/calendars";
import { DatePicker } from "@/registry/new-york-v4/blocks/sidebar-12/components/date-picker";
import { NavUser } from "@/registry/new-york-v4/blocks/sidebar-12/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarSeparator,
} from "@/registry/new-york-v4/ui/sidebar";

// This is sample data.
const data = {
	user: {
		name: "Maqed",
		email: "maqed@example.com",
		avatar: "https://github.com/maqed.png",
	},
	calendars: [
		{
			name: "My Calendars",
			items: ["Personal", "Work", "Family"],
		},
		{
			name: "Favorites",
			items: ["Holidays", "Birthdays"],
		},
		{
			name: "Other",
			items: ["Travel", "Reminders", "Deadlines"],
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader className="h-16 border-sidebar-border border-b">
				<NavUser user={data.user} />
			</SidebarHeader>
			<SidebarContent className="gap-0">
				<DatePicker />
				<SidebarSeparator className="mx-0" />
				<Calendars calendars={data.calendars} />
			</SidebarContent>
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton>
							<PlusIcon />
							<span>New Calendar</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
