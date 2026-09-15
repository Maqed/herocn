"use client";

import {
	CameraIcon,
	ChartBarIcon,
	CircleHelpIcon,
	CommandIcon,
	DatabaseIcon,
	FileChartColumnIcon,
	FileIcon,
	FileTextIcon,
	FolderIcon,
	LayoutDashboardIcon,
	ListIcon,
	SearchIcon,
	Settings2Icon,
	UsersIcon,
} from "lucide-react";

import type * as React from "react";

import { NavDocuments } from "@/registry/new-york-v4/blocks/dashboard-01/components/nav-documents";
import { NavMain } from "@/registry/new-york-v4/blocks/dashboard-01/components/nav-main";
import { NavSecondary } from "@/registry/new-york-v4/blocks/dashboard-01/components/nav-secondary";
import { NavUser } from "@/registry/new-york-v4/blocks/dashboard-01/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar";

const data = {
	user: {
		name: "Maqed",
		email: "maqed@example.com",
		avatar: "https://github.com/maqed.png",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "#",
			icon: <LayoutDashboardIcon />,
		},
		{
			title: "Lifecycle",
			url: "#",
			icon: <ListIcon />,
		},
		{
			title: "Analytics",
			url: "#",
			icon: <ChartBarIcon />,
		},
		{
			title: "Projects",
			url: "#",
			icon: <FolderIcon />,
		},
		{
			title: "Team",
			url: "#",
			icon: <UsersIcon />,
		},
	],
	navClouds: [
		{
			title: "Capture",
			icon: <CameraIcon />,
			isActive: true,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
		{
			title: "Proposal",
			icon: <FileTextIcon />,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
		{
			title: "Prompts",
			icon: <FileTextIcon />,
			url: "#",
			items: [
				{
					title: "Active Proposals",
					url: "#",
				},
				{
					title: "Archived",
					url: "#",
				},
			],
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "#",
			icon: <Settings2Icon />,
		},
		{
			title: "Get Help",
			url: "#",
			icon: <CircleHelpIcon />,
		},
		{
			title: "Search",
			url: "#",
			icon: <SearchIcon />,
		},
	],
	documents: [
		{
			name: "Data Library",
			url: "#",
			icon: <DatabaseIcon />,
		},
		{
			name: "Reports",
			url: "#",
			icon: <FileChartColumnIcon />,
		},
		{
			name: "Word Assistant",
			url: "#",
			icon: <FileIcon />,
		},
	],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							className="data-[slot=sidebar-menu-button]:p-1.5!"
							render={<a href="#" />}
						>
							<CommandIcon className="size-5!" />
							<span className="font-semibold text-base">Acme Inc.</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavDocuments items={data.documents} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
