import {
	CircleAlertIcon,
	CircleCheckIcon,
	CircleDashedIcon,
} from "lucide-react";
import Link from "next/link";
import type * as React from "react";

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/components/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/components/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/components/progress",
		description:
			"Displays an indicator showing the completion progress of a task.",
	},
	{
		title: "Scroll-area",
		href: "/docs/components/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/components/tabs",
		description:
			"A set of layered sections of content displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/components/tooltip",
		description:
			"A popup that displays information related to an element on hover or focus.",
	},
];

export default function NavigationMenuDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="w-96">
							<ListItem href="/docs" title="Introduction">
								Re-usable components built with Tailwind CSS.
							</ListItem>
							<ListItem href="/docs/installation" title="Installation">
								How to install dependencies and structure your app.
							</ListItem>
							<ListItem href="/docs/components/typography" title="Typography">
								Styles for headings, paragraphs, lists...etc
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem className="hidden md:flex">
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							{components.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[200px]">
							<li>
								<NavigationMenuLink
									className="flex-row items-center gap-2"
									render={<Link href="#" />}
								>
									<CircleAlertIcon />
									Backlog
								</NavigationMenuLink>
								<NavigationMenuLink
									className="flex-row items-center gap-2"
									render={<Link href="#" />}
								>
									<CircleDashedIcon />
									To Do
								</NavigationMenuLink>
								<NavigationMenuLink
									className="flex-row items-center gap-2"
									render={<Link href="#" />}
								>
									<CircleCheckIcon />
									Done
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						render={<Link href="/docs" />}
					>
						Docs
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ListItem({
	title,
	children,
	href,
	className,
	...props
}: React.ComponentPropsWithRef<"li"> & { href: string }) {
	return (
		<li className={className} {...props}>
			<NavigationMenuLink render={<Link href={href} />}>
				<div className="flex flex-col gap-1 text-sm">
					<div className="font-medium leading-none">{title}</div>
					<div className="line-clamp-2 text-muted-foreground">{children}</div>
				</div>
			</NavigationMenuLink>
		</li>
	);
}
