"use client";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import type { ComponentProps } from "react";
import * as React from "react";
import type { source } from "@/lib/source";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandDialogTrigger,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
} from "@/registry/new-york-v4/ui/command";

interface PageItem {
  value: string;
  label: string;
  url: string;
  isComponent: boolean;
  keywords?: string[];
}

interface PageGroup {
  value: string;
  items: PageItem[];
}

export function CommandMenu({
  tree,
  navItems,
  ...props
}: ComponentProps<typeof CommandDialog> & {
  tree: typeof source.pageTree;
  navItems?: { href: string; label: string; isExternal?: boolean }[];
}) {
  const [open, setOpen] = React.useState(false);

  // Convert tree structure to grouped items
  const groupedItems = React.useMemo<PageGroup[]>(() => {
    const groups: PageGroup[] = [];

    // Add nav items group
    if (navItems && navItems.length > 0) {
      groups.push({
        items: navItems.map((item) => ({
          isComponent: false,
          keywords: ["nav", "navigation", item.label.toLowerCase()],
          label: item.label,
          url: item.href,
          value: `Navigation ${item.label}`,
        })),
        value: "Pages",
      });
    }

    // Add tree groups
    tree.children.forEach((group) => {
      if (group.type === "folder") {
        const items: PageItem[] = [];
        group.children.forEach((item) => {
          if (item.type === "page") {
            const isComponent = item.url.includes("/components/");
            const itemName = item.name?.toString() || "";
            items.push({
              isComponent,
              keywords: isComponent ? ["component"] : undefined,
              label: itemName,
              url: item.url,
              value: itemName ? `${group.name} ${itemName}` : "",
            });
          }
        });
        if (items.length > 0) {
          groups.push({
            items,
            value:
              typeof group.name === "string" ? group.name : String(group.name),
          });
        }
      }
    });

    return groups;
  }, [tree, navItems]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog onOpenChange={setOpen} open={open} {...props}>
      <CommandDialogTrigger
        render={
          <Button
            variant="outline"
            className="max-md:size-8 max-md:[&_svg:not([class*='size-'])]:size-4.5 max-md:border-none md:pe-10"
            onClick={() => setOpen(true)}
            {...props}
          >
            <span className="hidden xl:inline-flex">
              Search documentation...
            </span>
            <span className="hidden md:inline-flex xl:hidden">Search...</span>
            <span>
              <SearchIcon className="md:hidden" />
            </span>
          </Button>
        }
      ></CommandDialogTrigger>
      <CommandDialogPopup>
        <Command items={groupedItems}>
          <CommandInput placeholder="Search documentation…" />
          <CommandPanel>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              {(group: PageGroup, _index: number) => (
                <CommandGroup items={group.items} key={group.value}>
                  <CommandGroupLabel>{group.value}</CommandGroupLabel>
                  <CommandCollection>
                    {(item: PageItem) => (
                      <CommandItem
                        className="flex w-full items-center"
                        key={item.value}
                        render={
                          <Link
                            href={item.url}
                            onNavigate={() => setOpen(false)}
                          />
                        }
                      >
                        <span className="flex-1">{item.label}</span>
                      </CommandItem>
                    )}
                  </CommandCollection>
                </CommandGroup>
              )}
            </CommandList>
          </CommandPanel>
        </Command>
      </CommandDialogPopup>
    </CommandDialog>
  );
}
