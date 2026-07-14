"use client";

import {
	AudioWaveform,
	BadgeCheck,
	Bell,
	BookOpen,
	Bot,
	ChevronRight,
	ChevronsUpDown,
	Command,
	CreditCard,
	Folder,
	Forward,
	Frame,
	GalleryVerticalEnd,
	LogOut,
	MapIcon,
	MoreHorizontal,
	PieChart,
	Plus,
	Settings2,
	Sparkles,
	SquareTerminal,
	Trash2,
} from "lucide-react";
import * as React from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible";
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
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
	useSidebar,
} from "@/registry/new-york-v4/ui/sidebar";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			addTeam: "Add team",
			teams: "Teams",
			platform: "Platform",
			projects: "Projects",
			viewProject: "View Project",
			shareProject: "Share Project",
			deleteProject: "Delete Project",
			more: "More",
			upgradeToPro: "Upgrade to Pro",
			account: "Account",
			billing: "Billing",
			notifications: "Notifications",
			logOut: "Log out",
			playground: "Playground",
			history: "History",
			starred: "Starred",
			settings: "Settings",
			models: "Models",
			genesis: "Genesis",
			explorer: "Explorer",
			quantum: "Quantum",
			documentation: "Documentation",
			introduction: "Introduction",
			getStarted: "Get Started",
			tutorials: "Tutorials",
			changelog: "Changelog",
			general: "General",
			team: "Team",
			limits: "Limits",
			designEngineering: "Design Engineering",
			salesMarketing: "Sales & Marketing",
			travel: "Travel",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			addTeam: "إضافة فريق",
			teams: "الفرق",
			platform: "المنصة",
			projects: "المشاريع",
			viewProject: "عرض المشروع",
			shareProject: "مشاركة المشروع",
			deleteProject: "حذف المشروع",
			more: "المزيد",
			upgradeToPro: "ترقية إلى Pro",
			account: "الحساب",
			billing: "الفوترة",
			notifications: "الإشعارات",
			logOut: "تسجيل الخروج",
			playground: "ملعب",
			history: "السجل",
			starred: "المميز",
			settings: "الإعدادات",
			models: "النماذج",
			genesis: "جينيسيس",
			explorer: "إكسبلورر",
			quantum: "كوانتوم",
			documentation: "التوثيق",
			introduction: "مقدمة",
			getStarted: "ابدأ",
			tutorials: "الدروس",
			changelog: "سجل التغييرات",
			general: "عام",
			team: "الفريق",
			limits: "الحدود",
			designEngineering: "هندسة التصميم",
			salesMarketing: "المبيعات والتسويق",
			travel: "السفر",
		},
	},
	he: {
		dir: "rtl",
		values: {
			addTeam: "הוסף צוות",
			teams: "צוותים",
			platform: "פלטפורמה",
			projects: "פרויקטים",
			viewProject: "הצג פרויקט",
			shareProject: "שתף פרויקט",
			deleteProject: "מחק פרויקט",
			more: "עוד",
			upgradeToPro: "שדרג ל-Pro",
			account: "חשבון",
			billing: "חיוב",
			notifications: "התראות",
			logOut: "התנתק",
			playground: "מגרש משחקים",
			history: "היסטוריה",
			starred: "מועדפים",
			settings: "הגדרות",
			models: "מודלים",
			genesis: "ג'נסיס",
			explorer: "אקספלורר",
			quantum: "קוונטום",
			documentation: "תיעוד",
			introduction: "מבוא",
			getStarted: "התחל",
			tutorials: "מדריכים",
			changelog: "יומן שינויים",
			general: "כללי",
			team: "צוות",
			limits: "מגבלות",
			designEngineering: "הנדסת עיצוב",
			salesMarketing: "מכירות ושיווק",
			travel: "נסיעות",
		},
	},
};

export function SidebarRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	const teams = [
		{ name: "Acme Inc", logo: GalleryVerticalEnd, plan: "Enterprise" },
		{ name: "Acme Corp.", logo: AudioWaveform, plan: "Startup" },
		{ name: "Evil Corp.", logo: Command, plan: "Free" },
	];

	const navMain = [
		{
			title: t.playground,
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{ title: t.history, url: "#" },
				{ title: t.starred, url: "#" },
				{ title: t.settings, url: "#" },
			],
		},
		{
			title: t.models,
			url: "#",
			icon: Bot,
			items: [
				{ title: t.genesis, url: "#" },
				{ title: t.explorer, url: "#" },
				{ title: t.quantum, url: "#" },
			],
		},
		{
			title: t.documentation,
			url: "#",
			icon: BookOpen,
			items: [
				{ title: t.introduction, url: "#" },
				{ title: t.getStarted, url: "#" },
				{ title: t.tutorials, url: "#" },
				{ title: t.changelog, url: "#" },
			],
		},
		{
			title: t.settings,
			url: "#",
			icon: Settings2,
			items: [
				{ title: t.general, url: "#" },
				{ title: t.team, url: "#" },
				{ title: t.billing, url: "#" },
				{ title: t.limits, url: "#" },
			],
		},
	];

	const projects = [
		{ name: t.designEngineering, url: "#", icon: Frame },
		{ name: t.salesMarketing, url: "#", icon: PieChart },
		{ name: t.travel, url: "#", icon: MapIcon },
	];

	const user = {
		name: "Maqed",
		email: "m@example.com",
		avatar: "https://github.com/Maqed.png",
	};

	return (
		<SidebarProvider lang={language} dir={dir}>
			<Sidebar
				collapsible="icon"
				dir={dir}
				side={dir === "ltr" ? "left" : "right"}
			>
				<SidebarHeader>
					<TeamSwitcher teams={teams} dir={dir} t={t} />
				</SidebarHeader>
				<SidebarContent>
					<NavMain items={navMain} t={t} />
					<NavProjects projects={projects} dir={dir} t={t} />
				</SidebarContent>
				<SidebarFooter>
					<NavUser user={user} dir={dir} t={t} />
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

function TeamSwitcher({
	teams,
	dir,
	t,
}: {
	teams: { name: string; logo: React.ElementType; plan: string }[];
	dir: "ltr" | "rtl";
	t: typeof translations.en.values;
}) {
	const { isMobile } = useSidebar();
	const [activeTeam, setActiveTeam] = React.useState(teams[0]);

	if (!activeTeam) return null;

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
						<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
							<activeTeam.logo className="size-4" />
						</div>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-medium">{activeTeam.name}</span>
							<span className="truncate text-xs">{activeTeam.plan}</span>
						</div>
						<ChevronsUpDown className="ms-auto" />
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="min-w-56"
						align="start"
						side={isMobile ? "bottom" : "inline-end"}
						sideOffset={4}
						dir={dir}
					>
						<DropdownMenuGroup>
							<DropdownMenuLabel className="text-muted-foreground text-xs">
								{t.teams}
							</DropdownMenuLabel>
							{teams.map((team, index) => (
								<DropdownMenuItem
									key={team.name}
									onClick={() => setActiveTeam(team)}
								>
									<div className="flex size-6 items-center justify-center rounded-md border">
										<team.logo className="size-3.5 shrink-0" />
									</div>
									{team.name}
									<DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
								</DropdownMenuItem>
							))}
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<div className="flex size-6 items-center justify-center rounded-md border">
								<Plus className="size-4" />
							</div>
							<div className="font-medium text-muted-foreground">
								{t.addTeam}
							</div>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}

function NavMain({
	items,
	t,
}: {
	items: {
		title: string;
		url: string;
		icon?: React.ElementType;
		isActive?: boolean;
		items?: { title: string; url: string }[];
	}[];
	t: typeof translations.en.values;
}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>{t.platform}</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible key={item.title} defaultOpen={item.isActive}>
						<SidebarMenuItem>
							<CollapsibleTrigger render={<SidebarMenuButton />}>
								{item.icon && <item.icon />}
								<span>{item.title}</span>
								<ChevronRight className="ms-auto transition-transform duration-200 group-data-open/collapsible:rotate-90 rtl:rotate-180" />
							</CollapsibleTrigger>
							<CollapsibleContent>
								<SidebarMenuSub>
									{item.items?.map((subItem) => (
										<SidebarMenuSubItem key={subItem.title}>
											<SidebarMenuSubButton render={<a href={subItem.url} />}>
												<span>{subItem.title}</span>
											</SidebarMenuSubButton>
										</SidebarMenuSubItem>
									))}
								</SidebarMenuSub>
							</CollapsibleContent>
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}

function NavProjects({
	projects,
	dir,
	t,
}: {
	projects: { name: string; url: string; icon: React.ElementType }[];
	dir: "ltr" | "rtl";
	t: typeof translations.en.values;
}) {
	const { isMobile } = useSidebar();

	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>{t.projects}</SidebarGroupLabel>
			<SidebarMenu>
				{projects.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton render={<a href={item.url} />}>
							<item.icon />
							<span>{item.name}</span>
						</SidebarMenuButton>
						<DropdownMenu>
							<DropdownMenuTrigger render={<SidebarMenuAction showOnHover />}>
								<MoreHorizontal />
								<span className="sr-only">{t.more}</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="w-48"
								side={isMobile ? "bottom" : "inline-end"}
								align={isMobile ? "end" : "start"}
								dir={dir}
							>
								<DropdownMenuItem>
									<Folder className="text-muted-foreground" />
									<span>{t.viewProject}</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Forward className="text-muted-foreground" />
									<span>{t.shareProject}</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Trash2 className="text-muted-foreground" />
									<span>{t.deleteProject}</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				))}
				<SidebarMenuItem>
					<SidebarMenuButton className="text-sidebar-foreground/70">
						<MoreHorizontal className="text-sidebar-foreground/70" />
						<span>{t.more}</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	);
}

function NavUser({
	user,
	dir,
	t,
}: {
	user: { name: string; email: string; avatar: string };
	dir: "ltr" | "rtl";
	t: typeof translations.en.values;
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
						<ChevronsUpDown className="ms-auto size-4" />
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "inline-end"}
						align="end"
						sideOffset={4}
						dir={dir}
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
								{t.upgradeToPro}
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<BadgeCheck />
								{t.account}
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CreditCard />
								{t.billing}
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Bell />
								{t.notifications}
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<LogOut />
								{t.logOut}
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
