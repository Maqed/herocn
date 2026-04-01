"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list relative isolate inline-flex items-center justify-center",
  {
    variants: {
      variant: {
        default: [
          "bg-default p-1",
          "rounded-[calc(var(--radius-2xl)+0.25rem)]",
          "group-data-[orientation=horizontal]/tabs:w-full group-data-[orientation=horizontal]/tabs:flex-row",
          "group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:gap-1",
        ],
        line: [
          "rounded-none bg-transparent p-0",
          "group-data-[orientation=horizontal]/tabs:flex-row group-data-[orientation=horizontal]/tabs:overflow-x-auto group-data-[orientation=horizontal]/tabs:[scrollbar-width:none] group-data-[orientation=horizontal]/tabs:border-b group-data-[orientation=horizontal]/tabs:border-border",
          "group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:border-s group-data-[orientation=vertical]/tabs:border-border",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  children,
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      activateOnFocus={true}
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    >
      {children}
      <TabsIndicator />
    </TabsPrimitive.List>
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // Base
        "relative z-1 flex h-8 w-full cursor-pointer select-none items-center justify-center gap-1.5 whitespace-nowrap px-4 text-center text-sm font-medium text-muted-foreground outline-none",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "transition-[color] duration-150 ease-out motion-reduce:transition-none",
        // Default variant: pill shape + vertical min-width
        "group-data-[variant=default]/tabs-list:rounded-3xl",
        "group-data-[variant=default]/tabs-list:group-data-[orientation=vertical]/tabs:min-w-20",
        // Line variant: no rounding
        "group-data-[variant=line]/tabs-list:rounded-none",
        // Selected state
        "data-active:text-foreground",
        // Hover
        "hover:text-foreground/80 data-active:hover:text-foreground",
        // Disabled
        "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
        // Focus visible
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    />
  );
}

function TabsIndicator({ className, ...props }: TabsPrimitive.Indicator.Props) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(
        // Base positioning – tracks the active tab via CSS variables
        "absolute top-0 left-0 -z-1",
        "translate-x-(--active-tab-left) translate-y-(--active-tab-top)",
        "w-(--active-tab-width) h-(--active-tab-height)",
        "transition-[translate,width,height] duration-200 ease-out motion-reduce:transition-none",
        // Default variant: animated pill
        "group-data-[variant=default]/tabs-list:rounded-3xl",
        "group-data-[variant=default]/tabs-list:bg-surface",
        "group-data-[variant=default]/tabs-list:shadow-sm",
        // Line variant: flat, accent coloured, no shadow
        "group-data-[variant=line]/tabs-list:rounded-none",
        "group-data-[variant=line]/tabs-list:bg-ring",
        // Line + horizontal: collapse to a bottom 2px rule
        "group-data-[variant=line]/tabs-list:group-data-[orientation=horizontal]/tabs:top-auto",
        "group-data-[variant=line]/tabs-list:group-data-[orientation=horizontal]/tabs:bottom-0",
        "group-data-[variant=line]/tabs-list:group-data-[orientation=horizontal]/tabs:translate-y-0",
        "group-data-[variant=line]/tabs-list:group-data-[orientation=horizontal]/tabs:h-0.5",
        // Line + vertical: collapse to a start-side 2px rule
        "group-data-[variant=line]/tabs-list:group-data-[orientation=vertical]/tabs:translate-x-0",
        "group-data-[variant=line]/tabs-list:group-data-[orientation=vertical]/tabs:w-0.5",
        "group-data-[variant=line]/tabs-list:group-data-[orientation=vertical]/tabs:start-0",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "w-full flex-1 p-2 outline-none",
        "group-data-[orientation=horizontal]/tabs:mt-4",
        "group-data-[orientation=vertical]/tabs:ms-4",
        className,
      )}
      {...props}
    />
  );
}

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsIndicator,
  TabsContent,
  tabsListVariants,
};
