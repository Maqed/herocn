import { CommandMenu } from "@/components/command-menu";
import { GitHubLink } from "@/components/github-link";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { siteConfig } from "@/lib/config";
import { source } from "@/lib/source";
import { Separator } from "@/registry/new-york-v4/ui/separator";

export function SiteHeader() {
	const pageTree = source.pageTree;

	return (
		<header className="sticky top-0 z-50 w-full bg-background py-2">
			<div className="container-wrapper 3xl:fixed:px-0 px-6">
				<div className="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:data-[orientation=vertical]:self-auto **:data-[slot=separator]:h-4!">
					<MobileNav
						tree={pageTree}
						items={siteConfig.navItems}
						className="flex lg:hidden"
					/>
					<MainNav
						items={siteConfig.navItems.filter(
							(item) => !item.isExternal && !item.notShownInHeader,
						)}
						className="hidden lg:flex"
					/>
					<div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
						<CommandMenu
							tree={pageTree}
							navItems={siteConfig.navItems.filter((item) => !item.isExternal)}
						/>
						<Separator orientation="vertical" className="hidden lg:block" />
						<GitHubLink />
						<Separator orientation="vertical" className="hidden lg:block" />
						<ModeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}
