"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";

function Dialog({ ...props }: DialogPrimitive.Root.Props) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: DialogPrimitive.Trigger.Props) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: DialogPrimitive.Portal.Props) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: DialogPrimitive.Close.Props) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
	className,
	variant = "opaque",
	...props
}: DialogPrimitive.Backdrop.Props & {
	variant?: "opaque" | "blur" | "transparent";
}) {
	return (
		<DialogPrimitive.Backdrop
			data-slot="dialog-overlay"
			data-variant={variant}
			className={cn(
				"fixed inset-0 isolate z-50 opacity-100 transition-opacity duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] data-[variant=blur]:bg-black/50 data-[variant=opaque]:bg-black/50 data-ending-style:opacity-0 data-starting-style:opacity-0 data-[variant=blur]:backdrop-blur-md data-ending-style:duration-100 dark:data-[variant=blur]:bg-black/60 dark:data-[variant=opaque]:bg-black/60",
				className,
			)}
			{...props}
		/>
	);
}

function DialogContent({
	className,
	children,
	overlayVariant = "opaque",
	showCloseButton = true,
	...props
}: DialogPrimitive.Popup.Props & {
	showCloseButton?: boolean;
	overlayVariant?: "opaque" | "blur" | "transparent";
}) {
	return (
		<DialogPortal>
			<DialogOverlay variant={overlayVariant} />
			<DialogPrimitive.Popup
				data-slot="dialog-content"
				className={cn(
					"fixed start-1/2 top-[calc(50%-0.75rem*var(--nested-dialogs,0))] z-50 flex w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 scale-[calc(1-0.04*var(--nested-dialogs,0))] flex-col gap-5 rounded-3xl bg-popover p-6 text-popover-foreground text-sm outline-none ring-1 ring-foreground/5 transition-[opacity,scale,translate] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-black/5 after:opacity-0 data-starting-style:translate-y-[calc(-50%+0.25rem)] data-ending-style:scale-[calc(0.95-0.04*var(--nested-dialogs,0))] data-starting-style:scale-[calc(1.05-0.04*var(--nested-dialogs,0))] data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-100 data-nested-dialog-open:after:opacity-100 sm:max-w-md rtl:translate-x-1/2 dark:after:bg-white/10",
					className,
				)}
				{...props}
			>
				{children}
				{showCloseButton && (
					<DialogPrimitive.Close
						data-slot="dialog-close"
						render={
							<Button
								variant="tertiary"
								className="absolute end-4 top-4"
								size="icon-xs"
							/>
						}
					>
						<XIcon />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Popup>
		</DialogPortal>
	);
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="dialog-header"
			className={cn("flex flex-col gap-3", className)}
			{...props}
		/>
	);
}

function DialogFooter({
	className,
	showCloseButton = false,
	children,
	...props
}: React.ComponentProps<"div"> & {
	showCloseButton?: boolean;
}) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn("flex flex-row items-center justify-end gap-2", className)}
			{...props}
		>
			{children}
			{showCloseButton && (
				<DialogPrimitive.Close
					data-slot="close-button"
					render={<Button variant="outline" />}
				>
					Close
				</DialogPrimitive.Close>
			)}
		</div>
	);
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cn("font-medium text-base leading-none", className)}
			{...props}
		/>
	);
}

function DialogDescription({
	className,
	...props
}: DialogPrimitive.Description.Props) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cn(
				"text-muted-foreground text-sm leading-[1.43] *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
				className,
			)}
			{...props}
		/>
	);
}

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
