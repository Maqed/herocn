"use client";

import { CheckIcon, ChevronRightIcon } from "lucide-react";

import * as React from "react";

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
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator,
} from "@/registry/new-york-v4/ui/sidebar";

export function Calendars({
	calendars,
}: {
	calendars: {
		name: string;
		items: string[];
	}[];
}) {
	return (
		<>
			{calendars.map((calendar, index) => (
				<React.Fragment key={calendar.name}>
					<SidebarGroup className="p-0" key={calendar.name}>
						<Collapsible
							defaultOpen={index === 0}
							className="group/collapsible"
						>
							<SidebarGroupLabel
								className="group/label h-auto w-full rounded-none p-4 text-sidebar-foreground text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
								render={<CollapsibleTrigger />}
							>
								{calendar.name}{" "}
								<ChevronRightIcon className="ml-auto transition-transform group-data-open/collapsible:rotate-90" />
							</SidebarGroupLabel>
							<CollapsibleContent>
								<SidebarGroupContent>
									<SidebarMenu>
										{calendar.items.map((item, index) => (
											<SidebarMenuItem key={item}>
												<SidebarMenuButton>
													<div
														data-active={index < 2}
														className="group/calendar-item flex aspect-square size-4 shrink-0 items-center justify-center rounded-sm border border-sidebar-border text-sidebar-primary-foreground data-[active=true]:border-sidebar-primary data-[active=true]:bg-sidebar-primary"
													>
														<CheckIcon className="hidden size-3 group-data-[active=true]/calendar-item:block" />
													</div>
													{item}
												</SidebarMenuButton>
											</SidebarMenuItem>
										))}
									</SidebarMenu>
								</SidebarGroupContent>
							</CollapsibleContent>
						</Collapsible>
					</SidebarGroup>
					<SidebarSeparator className="mx-0" />
				</React.Fragment>
			))}
		</>
	);
}
