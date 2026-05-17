"use client";

import type * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

function Drawer({
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
	return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
	return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
	return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
	return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
	className,
	variant = "opaque",
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay> & {
	variant?: "opaque" | "blur" | "transparent";
}) {
	return (
		<DrawerPrimitive.Overlay
			data-slot="drawer-overlay"
			data-variant={variant}
			className={cn(
				"data-open:fade-in-0 data-closed:fade-out-0 fixed inset-0 isolate z-50 duration-100 data-closed:animate-out data-open:animate-in data-[variant=blur]:bg-black/50 data-[variant=opaque]:bg-black/80 data-[variant=blur]:backdrop-blur-md dark:data-[variant=blur]:bg-black/60 dark:data-[variant=opaque]:bg-black/90",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerContent({
	className,
	children,
	overlayVariant = "opaque",
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Content> & {
	overlayVariant?: "opaque" | "blur" | "transparent";
}) {
	return (
		<DrawerPortal data-slot="drawer-portal">
			<DrawerOverlay variant={overlayVariant} />
			<DrawerPrimitive.Content
				data-slot="drawer-content"
				className={cn(
					"group/drawer-content fixed z-50 flex h-auto flex-col bg-popover bg-clip-padding text-popover-foreground text-sm shadow-lg data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=left]:start-0 data-[vaul-drawer-direction=right]:end-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:h-auto data-[vaul-drawer-direction=left]:h-full data-[vaul-drawer-direction=right]:h-full data-[vaul-drawer-direction=top]:h-auto data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=right]:border-s data-[vaul-drawer-direction=left]:border-e data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm",
					className,
				)}
				{...props}
			>
				<div className="mx-auto mt-4 hidden h-1 w-9 shrink-0 rounded-xs bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
				{children}
				<div className="mx-auto mb-2 hidden h-1 w-9 shrink-0 rounded-xs bg-muted group-data-[vaul-drawer-direction=top]/drawer-content:block" />
			</DrawerPrimitive.Content>
		</DrawerPortal>
	);
}

function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="drawer-header"
			className={cn(
				"flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-start",
				className,
			)}
			{...props}
		/>
	);
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="drawer-footer"
			className={cn("mt-auto flex justify-end gap-2 p-4", className)}
			{...props}
		/>
	);
}

function DrawerTitle({
	className,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
	return (
		<DrawerPrimitive.Title
			data-slot="drawer-title"
			className={cn("font-medium text-base text-foreground", className)}
			{...props}
		/>
	);
}

function DrawerDescription({
	className,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
	return (
		<DrawerPrimitive.Description
			data-slot="drawer-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

export {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerPortal,
	DrawerTitle,
	DrawerTrigger,
};
