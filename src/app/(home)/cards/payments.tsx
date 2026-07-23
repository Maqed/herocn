import {
	ArrowRightIcon,
	CalendarIcon,
	EllipsisIcon,
	RefreshCwIcon,
	SettingsIcon,
} from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/registry/new-york-v4/ui/breadcrumb";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Card, CardContent, CardHeader } from "@/registry/new-york-v4/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemMedia,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

export function Payments() {
	return (
		<Card>
			<CardHeader className="flex flex-col gap-3">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="#">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<DropdownMenu>
								<DropdownMenuTrigger
									render={
										<Button
											size="icon-sm"
											variant="ghost"
											aria-label="Account options"
										/>
									}
								>
									<EllipsisIcon strokeWidth={2} />
									<span className="sr-only">Account options</span>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="start">
									<DropdownMenuGroup>
										<DropdownMenuItem>Profile</DropdownMenuItem>
										<DropdownMenuItem>Statements</DropdownMenuItem>
										<DropdownMenuItem>Documents</DropdownMenuItem>
									</DropdownMenuGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>Payments</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</CardHeader>
			<CardContent>
				<ItemGroup>
					<div role="listitem" className="w-full">
						<Item variant="secondary" render={<a href="#" />}>
							<ItemMedia variant="icon">
								<SettingsIcon strokeWidth={2} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Change transfer limit</ItemTitle>
								<ItemDescription>
									Adjust how much you can send from your balance.
								</ItemDescription>
							</ItemContent>
							<ArrowRightIcon
								className="size-4 shrink-0 text-muted-foreground"
								strokeWidth={2}
							/>
						</Item>
					</div>
					<div role="listitem" className="w-full">
						<Item variant="secondary" render={<a href="#" />}>
							<ItemMedia variant="icon">
								<CalendarIcon strokeWidth={2} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Scheduled transfers</ItemTitle>
								<ItemDescription>
									Set up a transfer to send at a later date.
								</ItemDescription>
							</ItemContent>
							<ArrowRightIcon
								className="size-4 shrink-0 text-muted-foreground"
								strokeWidth={2}
							/>
						</Item>
					</div>
					<div role="listitem" className="w-full">
						<Item variant="secondary" render={<a href="#" />}>
							<ItemMedia variant="icon">
								<RefreshCwIcon strokeWidth={2} />
							</ItemMedia>
							<ItemContent>
								<ItemTitle>Recurring card payments</ItemTitle>
								<ItemDescription>
									Manage your repeated card transactions.
								</ItemDescription>
							</ItemContent>
							<ArrowRightIcon
								className="size-4 shrink-0 text-muted-foreground"
								strokeWidth={2}
							/>
						</Item>
					</div>
				</ItemGroup>
			</CardContent>
		</Card>
	);
}
