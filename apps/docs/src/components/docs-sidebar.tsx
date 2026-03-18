"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPagesFromFolder } from "@/lib/page-tree";
import type { source } from "@/lib/source";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/registry/new-york-v4/ui/sidebar";

const EXTERNALS = [
  { name: "Roadmap", href: "https://herocn.featurebase.app/" },
];

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-[calc(var(--header-height)+0.6rem)] z-30 hidden h-[calc(100svh-10rem)] overscroll-none bg-transparent [--sidebar-menu-width:--spacing(56)] lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent className="mx-auto no-scrollbar w-(--sidebar-menu-width) overflow-x-hidden px-2">
        <SidebarGroup className="py-0 mb-5">
          <SidebarGroupLabel>Externals</SidebarGroupLabel>
          <SidebarGroupContent>
            {EXTERNALS.map((externalLink) => (
              <SidebarMenuButton
                render={
                  <Link
                    href={externalLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {externalLink.name}
                    <ExternalLinkIcon />
                  </Link>
                }
                key={`external-link-${externalLink.name}`}
              />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        {tree.children.map((item) => {
          const hasLink =
            item.type === "page" ||
            (item.type === "folder" && item.index && item.index.url);

          return (
            <SidebarGroup className="py-0" key={item.$id}>
              {hasLink ? (
                <SidebarMenuButton
                  render={
                    <Link
                      href={
                        item.type === "page"
                          ? item.url
                          : (item.index as { url: string }).url
                      }
                    >
                      {item.name}
                    </Link>
                  }
                />
              ) : (
                <SidebarGroupLabel>{item.name}</SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                {item.type === "folder" && (
                  <SidebarMenu>
                    <SidebarMenuSub>
                      {getPagesFromFolder(item).map((page) => {
                        return (
                          <SidebarMenuSubItem key={page.url}>
                            <SidebarMenuSubButton
                              render={<Link href={page.url}>{page.name}</Link>}
                              isActive={page.url === pathname}
                            />
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </SidebarMenu>
                )}
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
        <div className="sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t from-background via-background/80 to-background/50 blur-xs" />
      </SidebarContent>
    </Sidebar>
  );
}
