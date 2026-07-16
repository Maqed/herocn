import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";

const attachmentVariants = cva(
	"group/attachment relative flex w-fit min-w-0 max-w-full shrink-0 flex-wrap rounded-2xl border bg-surface shadow-md transition-colors focus-within:ring-1 focus-within:ring-ring/50 has-[>a,>button]:hover:bg-muted/50 data-[state=error]:border-destructive/30 data-[state=idle]:border-dashed",
	{
		variants: {
			size: {
				default:
					"gap-3.5 text-sm has-data-[slot=attachment-content]:px-4 has-data-[slot=attachment-content]:py-3.5",
				sm: "gap-3.5 text-sm has-data-[slot=attachment-content]:px-3.5 has-data-[slot=attachment-content]:py-3",
				xs: "gap-2.5 text-sm has-data-[slot=attachment-content]:px-3 has-data-[slot=attachment-content]:py-2.5",
			},
			orientation: {
				horizontal: "min-w-40 items-center",
				vertical: "w-24 flex-col has-data-[slot=attachment-content]:w-30",
			},
		},
	},
);

function Attachment({
	className,
	state = "done",
	size = "default",
	orientation = "horizontal",
	...props
}: React.ComponentProps<"div"> &
	VariantProps<typeof attachmentVariants> & {
		state?: "idle" | "uploading" | "processing" | "error" | "done";
	}) {
	return (
		<div
			data-slot="attachment"
			data-state={state}
			data-size={size}
			data-orientation={orientation}
			className={cn(attachmentVariants({ size, orientation }), className)}
			{...props}
		/>
	);
}

const attachmentMediaVariants = cva(
	"relative flex aspect-square shrink-0 items-center justify-center gap-2 overflow-hidden text-foreground group-has-data-[slot=attachment-description]/attachment:translate-y-0.5 group-has-data-[slot=attachment-description]/attachment:self-start group-data-[orientation=vertical]/attachment:w-full group-data-[state=error]/attachment:bg-destructive/10 group-data-[state=error]/attachment:text-destructive group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! [&_svg:not([class*='size-'])]:size-5.5 group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6 group-data-[size=sm]/attachment:[&_svg:not([class*='size-'])]:size-4.5 group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
	{
		variants: {
			variant: {
				icon: "rounded-xl bg-default p-3 group-data-[size=sm]/attachment:p-2.5 group-data-[size=xs]/attachment:p-2.5",
				image:
					"w-10 rounded-lg opacity-60 group-data-[size=sm]/attachment:w-8 group-data-[size=xs]/attachment:w-6 group-data-[size=xs]/attachment:rounded-md group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 [&_img]:size-full [&_img]:object-cover",
			},
		},
		defaultVariants: {
			variant: "icon",
		},
	},
);

function AttachmentMedia({
	className,
	variant = "icon",
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>) {
	return (
		<div
			data-slot="attachment-media"
			data-variant={variant}
			className={cn(attachmentMediaVariants({ variant }), className)}
			{...props}
		/>
	);
}

function AttachmentContent({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="attachment-content"
			className={cn(
				"min-w-0 max-w-full flex-1 leading-tight group-data-[orientation=vertical]/attachment:px-1",
				className,
			)}
			{...props}
		/>
	);
}

function AttachmentTitle({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="attachment-title"
			className={cn(
				"group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer block min-w-0 max-w-full truncate font-medium text-sm leading-snug",
				className,
			)}
			{...props}
		/>
	);
}

function AttachmentDescription({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="attachment-description"
			className={cn(
				"mt-0.5 block min-w-0 truncate text-start text-muted-foreground text-sm group-data-[state=error]/attachment:text-destructive/80",
				"max-w-full",
				className,
			)}
			{...props}
		/>
	);
}

function AttachmentActions({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="attachment-actions"
			className={cn(
				"relative z-20 flex shrink-0 items-center group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:end-3 group-data-[orientation=vertical]/attachment:top-3 group-data-[orientation=vertical]/attachment:gap-1",
				className,
			)}
			{...props}
		/>
	);
}

function AttachmentAction({
	className,
	variant,
	size = "icon-xs",
	...props
}: React.ComponentProps<typeof Button>) {
	return (
		<Button
			data-slot="attachment-action"
			variant={variant ?? "ghost"}
			size={size}
			className={cn(className)}
			{...props}
		/>
	);
}

function AttachmentTrigger({
	className,
	render,
	type,
	...props
}: useRender.ComponentProps<"button">) {
	return useRender({
		defaultTagName: "button",
		props: mergeProps<"button">(
			{
				type: render ? type : (type ?? "button"),
				className: cn("absolute inset-0 z-10 outline-none", className),
			},
			props,
		),
		render,
		state: {
			slot: "attachment-trigger",
		},
	});
}

function AttachmentGroup({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="attachment-group"
			className={cn(
				"scroll-fade-x scrollbar-none flex min-w-0 snap-x snap-mandatory scroll-px-1 gap-3 overflow-x-auto overscroll-x-contain py-1 *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Attachment,
	AttachmentAction,
	AttachmentActions,
	AttachmentContent,
	AttachmentDescription,
	AttachmentGroup,
	AttachmentMedia,
	AttachmentTitle,
	AttachmentTrigger,
};
