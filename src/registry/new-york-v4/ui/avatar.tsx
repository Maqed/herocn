"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

function Avatar({
	className,
	size = "default",
	...props
}: AvatarPrimitive.Root.Props & {
	size?: "default" | "sm" | "lg";
}) {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			data-size={size}
			className={cn(
				"group/avatar relative flex size-10 shrink-0 select-none rounded-full after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-12 data-[size=sm]:size-8 dark:after:mix-blend-lighten",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			className={cn(
				"aspect-square size-full rounded-full object-cover",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarFallback({
	className,
	...props
}: AvatarPrimitive.Fallback.Props) {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={cn(
				"flex size-full items-center justify-center rounded-full bg-muted text-muted-foreground text-sm group-data-[size=lg]/avatar:text-base group-data-[size=sm]/avatar:text-xs",
				className,
			)}
			{...props}
		/>
	);
}

export const avatarVariants = cva("absolute", {
	variants: {
		variant: {
			default: "bg-default text-default-foreground",
			primary: "bg-primary text-primary-foreground",
			success: "bg-success text-success-foreground",
			warning: "bg-warning text-warning-foreground",
			destructive: "bg-destructive text-destructive-foreground",
		},
		position: {
			"bottom-end": "end-0 bottom-0",
			"bottom-start": "start-0 bottom-0",
			"top-end": "end-0 top-0",
			"top-start": "start-0 top-0",
		},
	},
	defaultVariants: {
		variant: "default",
		position: "bottom-end",
	},
});

function AvatarBadge({
	className,
	variant,
	position,
	...props
}: React.ComponentProps<"span"> & VariantProps<typeof avatarVariants>) {
	return (
		<span
			data-slot="avatar-badge"
			className={cn(
				"z-10 inline-flex select-none items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background",
				"group-data-[size=sm]/avatar:size-2.5 group-data-[size=sm]/avatar:text-[6px] group-data-[size=sm]/avatar:[&>svg]:hidden",
				"group-data-[size=default]/avatar:size-3 group-data-[size=default]/avatar:text-[8px] group-data-[size=default]/avatar:[&>svg]:size-2.5",
				"group-data-[size=lg]/avatar:size-3.5 group-data-[size=lg]/avatar:text-[10px] group-data-[size=lg]/avatar:[&>svg]:size-2.5",
				avatarVariants({ variant, position }),
				className,
			)}
			{...props}
		/>
	);
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="avatar-group"
			className={cn(
				"group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
				className,
			)}
			{...props}
		/>
	);
}

function AvatarGroupCount({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="avatar-group-count"
			className={cn(
				"relative flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground text-sm ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-12 group-has-data-[size=sm]/avatar-group:size-8 group-has-data-[size=lg]/avatar-group:text-base group-has-data-[size=sm]/avatar-group:text-xs [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarImage,
};
