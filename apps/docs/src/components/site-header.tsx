import Link from "next/link";
import { CommandMenu } from "@/components/command-menu";
import { GitHubLink } from "@/components/github-link";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { siteConfig } from "@/lib/config";
import { source } from "@/lib/source";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Separator } from "@/registry/new-york-v4/ui/separator";

export function SiteHeader() {
  const pageTree = source.pageTree;

  return (
    <header className="sticky py-2 top-0 z-50 w-full bg-background">
      <div className="container-wrapper px-6 3xl:fixed:px-0">
        <div className="flex h-(--header-height) items-center **:data-[slot=separator]:h-4! 3xl:fixed:container">
          <MobileNav
            tree={pageTree}
            items={siteConfig.navItems}
            className="flex lg:hidden"
          />
          <Button
            nativeButton={false}
            variant="ghost"
            size="icon"
            className="hidden size-8 lg:flex"
            render={
              <Link href="/">
                <Icons.logo className="size-5" />
                <span className="sr-only">{siteConfig.name}</span>
              </Link>
            }
          />
          <MainNav
            items={siteConfig.navItems.filter((item) => !item.isExternal)}
            className="hidden lg:flex"
          />
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <CommandMenu
              tree={pageTree}
              navItems={siteConfig.navItems.filter((item) => !item.isExternal)}
            />
            <Separator
              orientation="vertical"
              className="ml-2 hidden lg:block"
            />
            <GitHubLink />
            <Separator orientation="vertical" className="hidden 3xl:flex" />
            <ModeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
