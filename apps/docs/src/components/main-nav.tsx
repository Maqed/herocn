"use client";

import { cn } from "cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu";
import { Icons } from "./icons";

export function MainNav({
	items,
	className,
	...props
}: React.ComponentProps<"nav"> & {
	items: { href: string; label: string }[];
}) {
	const pathname = usePathname();

	return (
		<nav className={cn("items-center gap-0", className)} {...props}>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuLink
							className={cn(navigationMenuTriggerStyle(), "px-1.5")}
							data-active={pathname === "/"}
							render={
								<Link href="/">
									<Icons.logo className="size-5" />
									<span className="sr-only">{siteConfig.name}</span>
								</Link>
							}
						/>
					</NavigationMenuItem>
					{items.map((item) => (
						<NavigationMenuItem key={item.href}>
							<NavigationMenuLink
								className={cn(navigationMenuTriggerStyle())}
								data-active={pathname.startsWith(item.href)}
								render={<Link href={item.href} />}
							>
								{item.label}
							</NavigationMenuLink>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	);
}
