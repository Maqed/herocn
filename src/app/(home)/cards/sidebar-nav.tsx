import {
	ActivityIcon,
	ArrowLeftRightIcon,
	BellIcon,
	BookOpenIcon,
	BuildingIcon,
	CalendarIcon,
	ChartColumnIcon,
	ChartLineIcon,
	ChartPieIcon,
	CircleQuestionMarkIcon,
	CreditCardIcon,
	FileTextIcon,
	GlobeIcon,
	MessageCircleIcon,
	PaletteIcon,
	ShieldIcon,
	TargetIcon,
	TrendingUpIcon,
	UserIcon,
	WalletIcon,
} from "lucide-react";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { Card } from "@/registry/new-york-v4/ui/card";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar";

function SidebarSection({
	label,
	children,
	className,
}: {
	label: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<Card className={cn("w-full overflow-hidden rounded-3xl py-0", className)}>
			<SidebarProvider className="min-h-0">
				<Sidebar collapsible="none" className="w-full bg-transparent">
					<SidebarContent className="gap-0 overflow-hidden">
						<SidebarGroup>
							<SidebarGroupLabel>{label}</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu className="gap-1">{children}</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</Sidebar>
			</SidebarProvider>
		</Card>
	);
}

export function SidebarNav() {
	return (
		<div className="grid w-full grid-cols-2 gap-4 xl:gap-6">
			<SidebarSection
				label="Overview"
				className="xl:col-start-1 xl:row-start-2"
			>
				<SidebarMenuItem>
					<SidebarMenuButton isActive>
						<ChartColumnIcon strokeWidth={2} />
						Analytics
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<ArrowLeftRightIcon strokeWidth={2} />
						Transactions
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<TrendingUpIcon strokeWidth={2} />
						Investments
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<BuildingIcon strokeWidth={2} />
						Accounts
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<ChartPieIcon strokeWidth={2} />
						Spending
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarSection>

			<SidebarSection
				label="Planning"
				className="xl:col-start-1 xl:row-start-1"
			>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<FileTextIcon strokeWidth={2} />
						Documents
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<WalletIcon strokeWidth={2} />
						Budget
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<ChartLineIcon strokeWidth={2} />
						Reports
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<TargetIcon strokeWidth={2} />
						Goals
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<CalendarIcon strokeWidth={2} />
						Calendar
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarSection>

			<SidebarSection
				label="Support"
				className="flex xl:col-start-2 xl:row-start-1"
			>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<CircleQuestionMarkIcon strokeWidth={2} />
						Help Center
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<BookOpenIcon strokeWidth={2} />
						Docs
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<MessageCircleIcon strokeWidth={2} />
						Contact Us
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<ActivityIcon strokeWidth={2} />
						Status
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<GlobeIcon strokeWidth={2} />
						Community
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarSection>

			<SidebarSection
				label="Account"
				className="flex xl:col-start-2 xl:row-start-2"
			>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<UserIcon strokeWidth={2} />
						Profile
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton isActive>
						<CreditCardIcon strokeWidth={2} />
						Billing
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<BellIcon strokeWidth={2} />
						Notifications
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<ShieldIcon strokeWidth={2} />
						Security
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton>
						<PaletteIcon strokeWidth={2} />
						Appearance
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarSection>
		</div>
	);
}
