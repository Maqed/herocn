"use client";

import {
	CheckIcon,
	ChevronsUpDownIcon,
	GalleryVerticalEndIcon,
} from "lucide-react";

import * as React from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/registry/new-york-v4/ui/sidebar";

export function VersionSwitcher({
	versions,
	defaultVersion,
}: {
	versions: string[];
	defaultVersion: string;
}) {
	const [selectedVersion, setSelectedVersion] = React.useState(defaultVersion);
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<SidebarMenuButton
								size="lg"
								className="data-open:bg-sidebar-accent data-open:text-sidebar-accent-foreground"
							/>
						}
					>
						<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
							<GalleryVerticalEndIcon className="size-4" />
						</div>
						<div className="flex flex-col gap-0.5 leading-none">
							<span className="font-medium">Documentation</span>
							<span className="">v{selectedVersion}</span>
						</div>
						<ChevronsUpDownIcon className="ml-auto" />
					</DropdownMenuTrigger>
					<DropdownMenuContent align="start">
						{versions.map((version) => (
							<DropdownMenuItem
								key={version}
								onSelect={() => setSelectedVersion(version)}
							>
								v{version}{" "}
								{version === selectedVersion && (
									<CheckIcon className="ml-auto" />
								)}
							</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
