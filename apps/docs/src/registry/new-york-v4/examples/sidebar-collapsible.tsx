"use client";

import {
	BadgeCheck,
	Bell,
	Bookmark,
	ChevronsUpDown,
	Clock,
	CreditCard,
	HelpCircle,
	Home,
	Inbox,
	LogOut,
	Search,
	Settings,
	Sparkles,
	Star,
} from "lucide-react";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
	useSidebar,
} from "@/registry/new-york-v4/ui/sidebar";

function NavUser({
	user,
}: {
	user: {
		name: string;
		email: string;
		avatar: string;
	};
}) {
	const { isMobile } = useSidebar();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<SidebarMenuButton
								size="lg"
								className="data-popup-open:bg-sidebar-accent data-popup-open:text-sidebar-accent-foreground"
							/>
						}
					>
						<Avatar className="size-8 rounded-lg">
							<AvatarImage src={user.avatar} alt={user.name} />
							<AvatarFallback className="rounded-lg">Mqd</AvatarFallback>
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-medium">{user.name}</span>
							<span className="truncate text-xs">{user.email}</span>
						</div>
						<ChevronsUpDown className="ml-auto size-4" />
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="min-w-56"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuGroup>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<Avatar className="size-8 rounded-lg">
										<AvatarImage src={user.avatar} alt={user.name} />
										<AvatarFallback className="rounded-lg">Mqd</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">{user.name}</span>
										<span className="truncate text-xs">{user.email}</span>
									</div>
								</div>
							</DropdownMenuLabel>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<Sparkles />
								Upgrade to Pro
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<BadgeCheck />
								Account
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CreditCard />
								Billing
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Bell />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<LogOut />
								Log out
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

export default function SidebarCollapsible() {
	return (
		<SidebarProvider>
			<Sidebar collapsible="icon">
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size="lg" tooltip="herocn">
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 144 144"
										width={144}
										height={144}
										fill="none"
										className="size-4"
									>
										<title>herocn Logo</title>
										<g
											stroke="currentColor"
											strokeWidth={16}
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M25 45 L25 80 L55 100 V65 L80 50 V135 L120 120 V35 L80 50 V10 L25 45 Z" />
											<line x1={120} y1={80} x2={80} y2={125} />
											<line x1={120} y1={45} x2={80} y2={90} />
										</g>
									</svg>
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">herocn</span>
									<span className="truncate text-xs">Enterprise</span>
								</div>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarGroupLabel>General</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton isActive tooltip="Dashboard">
									<Home />
									<span>Dashboard</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Inbox">
									<Inbox />
									<span>Inbox</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Search">
									<Search />
									<span>Search</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup>
						<SidebarGroupLabel>Projects</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Starred">
									<Star />
									<span>Starred</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Recent">
									<Clock />
									<span>Recent</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Bookmarks">
									<Bookmark />
									<span>Bookmarks</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
					<SidebarGroup>
						<SidebarGroupLabel>Account</SidebarGroupLabel>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Settings">
									<Settings />
									<span>Settings</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Notifications">
									<Bell />
									<span>Notifications</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<SidebarMenuButton tooltip="Help">
									<HelpCircle />
									<span>Help</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarFooter>
					<NavUser
						user={{
							name: "Maqed",
							email: "m@example.com",
							avatar: "https://github.com/Maqed.png",
						}}
					/>
				</SidebarFooter>
				<SidebarRail />
			</Sidebar>
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ms-1" />
					</div>
				</header>
			</SidebarInset>
		</SidebarProvider>
	);
}
