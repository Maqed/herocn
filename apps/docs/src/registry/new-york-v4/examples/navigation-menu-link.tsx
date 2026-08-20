import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu";

export default function NavigationMenuLinkDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						render={<Link href="/docs" />}
					>
						Documentation
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						render={<Link href="/docs/components" />}
					>
						Components
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						render={<Link href="/docs/rtl" />}
					>
						RTL
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
