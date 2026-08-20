"use client";

import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/config";
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

const EXTERNALS = siteConfig.navItems.filter((item) => item.isExternal);

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
			<SidebarContent className="no-scrollbar mx-auto w-(--sidebar-menu-width) gap-0.5 overflow-x-hidden px-2">
				<div className="sticky top-0 z-10 h-16 shrink-0 bg-linear-to-b from-background via-background/80 to-background/50 blur-xs" />
				<SidebarGroup className="mb-5 py-0">
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
										{externalLink.label}
										<ExternalLinkIcon />
									</Link>
								}
								key={`external-link-${externalLink.label}`}
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
