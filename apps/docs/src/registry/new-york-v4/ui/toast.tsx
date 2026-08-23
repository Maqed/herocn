"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import {
	CircleCheckIcon,
	InfoIcon,
	Loader2Icon,
	OctagonXIcon,
	TriangleAlertIcon,
	XIcon,
} from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";

const toast = ToastPrimitive.createToastManager();

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
	return <ToastPrimitive.Provider {...props} />;
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
	return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />;
}

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
	return (
		<ToastPrimitive.Viewport
			data-slot="toast-viewport"
			className={cn(
				"pointer-events-none fixed inset-x-4 bottom-4 z-50 mx-auto w-auto max-w-sm outline-none sm:start-auto sm:end-4 sm:mx-0 sm:w-full",
				className,
			)}
			{...props}
		/>
	);
}

function getToastRootClasses() {
	return cn(
		"group/toast pointer-events-auto absolute inset-inline-0 z-[calc(1000-var(--toast-index))] flex w-full origin-bottom select-none flex-row items-start justify-start gap-1.5 rounded-3xl bg-surface px-4 py-3 text-foreground shadow-xl outline-none will-change-transform focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		"[--gap:var(--toast-gap,8px)] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc((var(--toast-dir)*(var(--toast-offset-y)+var(--toast-index)*var(--gap)))+var(--toast-swipe-movement-y))] [--peek:0.5rem] [--scale:calc(max(0,1-(var(--toast-index)*var(--toast-scale-factor,0.05))))] [--shrink:calc(1-var(--scale))]",
		"bottom-0 origin-bottom [--toast-dir:-1] after:top-full",
		"transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-dir)*(var(--toast-index)*var(--peek)+(var(--shrink)*var(--height))))))_scale(var(--scale))] h-(--height) [transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms,box-shadow_150ms]",
		"after:absolute after:start-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
		"data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))] data-expanded:h-(--toast-height)",
		"data-starting-style:transform-[translateY(calc(var(--toast-dir)*-150%))] data-limited:pointer-events-none data-limited:opacity-0",
		"[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(calc(var(--toast-dir)*-150%))]",
		"data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",
		"data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
		"data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
		"data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",
		"data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",
		"data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
		"data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
		"data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",
		"**:data-[slot=toast-title]:text-foreground",
		"[&[data-type=success]_[data-slot=toast-title]]:text-success-soft-foreground",
		"[&[data-type=info]_[data-slot=toast-title]]:text-primary-soft-foreground",
		"[&[data-type=warning]_[data-slot=toast-title]]:text-warning-soft-foreground",
		"[&[data-type=error]_[data-slot=toast-title]]:text-destructive-soft-foreground",
	);
}

function Toast({ className, ...props }: ToastPrimitive.Root.Props) {
	return (
		<ToastPrimitive.Root
			data-slot="toast"
			className={cn(getToastRootClasses(), className)}
			{...props}
		/>
	);
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
	return (
		<ToastPrimitive.Content
			data-slot="toast-content"
			className={cn(
				"flex h-full min-w-0 grow items-center gap-3 overflow-hidden transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
				className,
			)}
			{...props}
		/>
	);
}

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
	return (
		<ToastPrimitive.Title
			data-slot="toast-title"
			className={cn("font-medium text-sm", className)}
			{...props}
		/>
	);
}

function ToastDescription({
	className,
	...props
}: ToastPrimitive.Description.Props) {
	return (
		<ToastPrimitive.Description
			data-slot="toast-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

function ToastAction({
	className,
	render = <Button variant="tertiary" size="sm" />,
	...props
}: ToastPrimitive.Action.Props) {
	return (
		<ToastPrimitive.Action
			data-slot="toast-action"
			render={render}
			className={cn("shrink-0", className)}
			{...props}
		/>
	);
}

function ToastClose({
	className,
	children,
	...props
}: ToastPrimitive.Close.Props) {
	return (
		<ToastPrimitive.Close
			data-slot="toast-close"
			aria-label="Close toast"
			render={<Button variant="tertiary" size="icon-xs" />}
			className={cn(
				"pointer-events-none absolute -end-1 -top-1 z-10 size-5 border border-border bg-surface opacity-0 transition-opacity duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/toast:pointer-events-auto group-hover/toast:opacity-100 group-focus-visible/toast:pointer-events-auto group-focus-visible/toast:opacity-100",
				className,
			)}
			{...props}
		>
			{children ?? <XIcon className="size-3" aria-hidden="true" />}
		</ToastPrimitive.Close>
	);
}

function ToastIcon({ type }: { type: string | undefined }) {
	let icon: React.ReactNode = null;

	if (type === "success") {
		icon = <CircleCheckIcon aria-hidden="true" />;
	}

	if (type === "info") {
		icon = <InfoIcon aria-hidden="true" />;
	}

	if (type === "warning") {
		icon = <TriangleAlertIcon aria-hidden="true" />;
	}

	if (type === "error") {
		icon = <OctagonXIcon className="text-destructive" aria-hidden="true" />;
	}

	if (type === "loading") {
		icon = <Loader2Icon className="animate-spin" aria-hidden="true" />;
	}

	if (!icon) {
		return null;
	}

	return (
		<span
			data-type={type}
			data-slot="toast-icon"
			className={cn(
				"flex shrink-0 items-center justify-center p-0.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
				"data-[type=success]:text-success-soft-foreground",
				"data-[type=warning]:text-warning-soft-foreground",
				"data-[type=error]:text-destructive-soft-foreground",
				"data-[type=info]:text-primary-soft-foreground",
			)}
		>
			{icon}
		</span>
	);
}

function ToastList() {
	const { toasts } = ToastPrimitive.useToastManager();

	return toasts.map((toastItem) => (
		<Toast key={toastItem.id} toast={toastItem}>
			<ToastContent>
				<ToastIcon type={toastItem.type} />
				<div className="flex min-w-0 flex-1 flex-col gap-1">
					<ToastTitle />
					<ToastDescription />
					<ToastAction className="mt-2 self-start sm:hidden" />
				</div>
				<ToastClose />
			</ToastContent>
			<ToastAction className="hidden sm:flex" />
		</Toast>
	));
}

function Toaster({
	children,
	toastManager = toast,
	...props
}: ToastPrimitive.Provider.Props) {
	return (
		<ToastProvider toastManager={toastManager} {...props}>
			{children}
			<ToastPortal>
				<ToastViewport>
					<ToastList />
				</ToastViewport>
			</ToastPortal>
		</ToastProvider>
	);
}

const createToastManager = ToastPrimitive.createToastManager;
const useToastManager = ToastPrimitive.useToastManager;

export {
	createToastManager,
	Toast,
	ToastAction,
	ToastClose,
	ToastContent,
	ToastDescription,
	Toaster,
	ToastPortal,
	ToastProvider,
	ToastTitle,
	ToastViewport,
	toast,
	useToastManager,
};
