"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";

function AlertDialog({ ...props }: AlertDialogPrimitive.Root.Props) {
	return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({ ...props }: AlertDialogPrimitive.Trigger.Props) {
	return (
		<AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
	);
}

function AlertDialogPortal({ ...props }: AlertDialogPrimitive.Portal.Props) {
	return (
		<AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
	);
}

function AlertDialogOverlay({
	className,
	variant = "opaque",
	...props
}: AlertDialogPrimitive.Backdrop.Props & {
	variant?: "opaque" | "blur" | "transparent";
}) {
	return (
		<AlertDialogPrimitive.Backdrop
			data-slot="alert-dialog-overlay"
			data-variant={variant}
			className={cn(
				"fixed inset-0 isolate z-50 opacity-100 transition-opacity duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] data-[variant=blur]:bg-black/50 data-[variant=opaque]:bg-black/50 data-ending-style:opacity-0 data-starting-style:opacity-0 data-[variant=blur]:backdrop-blur-md data-ending-style:duration-100 dark:data-[variant=blur]:bg-black/60 dark:data-[variant=opaque]:bg-black/60",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogContent({
	className,
	overlayVariant = "opaque",
	size = "default",
	...props
}: AlertDialogPrimitive.Popup.Props & {
	size?: "default" | "sm";
	overlayVariant?: "opaque" | "blur" | "transparent";
}) {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay variant={overlayVariant} />
			<AlertDialogPrimitive.Popup
				data-slot="alert-dialog-content"
				data-size={size}
				className={cn(
					"group/alert-dialog-content fixed start-1/2 top-1/2 z-50 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col rounded-3xl bg-popover p-6 text-popover-foreground outline-none ring-1 ring-foreground/5 transition-[opacity,scale,translate] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-starting-style:translate-y-[calc(-50%+0.25rem)] data-ending-style:scale-[0.95] data-starting-style:scale-[1.05] data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-100 data-[size=default]:sm:max-w-md rtl:translate-x-1/2",
					className,
				)}
				{...props}
			/>
		</AlertDialogPortal>
	);
}

function AlertDialogHeader({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cn("flex flex-col gap-3", className)}
			{...props}
		/>
	);
}

function AlertDialogFooter({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cn(
				"mt-5 flex flex-row items-center justify-end gap-2",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogMedia({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="alert-dialog-media"
			className={cn(
				"flex size-10 shrink-0 select-none items-center justify-center rounded-3xl bg-muted *:[svg:not([class*='size-'])]:size-5.5",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogTitle({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
	return (
		<AlertDialogPrimitive.Title
			data-slot="alert-dialog-title"
			className={cn("font-medium text-base text-foreground", className)}
			{...props}
		/>
	);
}

function AlertDialogDescription({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
	return (
		<AlertDialogPrimitive.Description
			data-slot="alert-dialog-description"
			className={cn(
				"text-balance text-muted-foreground text-sm leading-[1.43] md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function AlertDialogAction({
	className,
	...props
}: React.ComponentProps<typeof Button>) {
	return (
		<Button
			data-slot="alert-dialog-action"
			className={cn(className)}
			{...props}
		/>
	);
}

function AlertDialogCancel({
	className,
	variant = "tertiary",
	size = "default",
	...props
}: AlertDialogPrimitive.Close.Props &
	Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
	return (
		<AlertDialogPrimitive.Close
			data-slot="alert-dialog-cancel"
			className={cn(className)}
			render={<Button variant={variant} size={size} />}
			{...props}
		/>
	);
}

export {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogTitle,
	AlertDialogTrigger,
};
