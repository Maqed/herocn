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

const viewportPlacements = {
	bottom: "bottom-4 left-1/2 -translate-x-1/2",
	"bottom-start": "bottom-4 start-4",
	"bottom-end": "bottom-4 end-4",
	top: "top-4 left-1/2 -translate-x-1/2",
	"top-start": "top-4 start-4",
	"top-end": "top-4 end-4",
} as const;

type ToastPlacement = keyof typeof viewportPlacements;

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
	return <ToastPrimitive.Provider {...props} />;
}

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
	return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />;
}

function ToastViewport({
	className,
	placement = "bottom",
	width = 460,
	gap = 8,
	scaleFactor = 0.05,
	style,
	onMouseLeave,
	...props
}: ToastPrimitive.Viewport.Props & {
	placement?: ToastPlacement;
	width?: number | string;
	gap?: number;
	scaleFactor?: number;
}) {
	return (
		<ToastPrimitive.Viewport
			data-slot="toast-viewport"
			className={cn(
				"pointer-events-none fixed z-50 w-[calc(100vw-2rem)] outline-none sm:w-auto sm:min-w-[var(--toast-width)]",
				viewportPlacements[placement],
				className,
			)}
			onMouseLeave={(event) => {
				onMouseLeave?.(event);
				// On touch devices the browser fires a stray `mouseleave` on the
				// viewport right after a tap completes, collapsing the stack the
				// tap just expanded. Block the default collapse on hover-less
				// devices; tapping outside the viewport still collapses it.
				if (window.matchMedia("(hover: none)").matches) {
					event.preventBaseUIHandler?.();
				}
			}}
			style={
				{
					"--toast-width": typeof width === "number" ? `${width}px` : width,
					"--toast-gap": `${gap}px`,
					"--toast-scale-factor": `${scaleFactor}`,
					...(style as React.CSSProperties),
				} as React.CSSProperties
			}
			{...props}
		/>
	);
}

function getToastRootClasses(placement: ToastPlacement) {
	const isTop = placement.startsWith("top");

	return cn(
		"group/toast pointer-events-auto absolute inset-inline-0 z-[calc(1000-var(--toast-index))] flex w-full origin-bottom select-none flex-row items-start justify-start gap-1.5 rounded-3xl bg-surface px-4 py-3 text-foreground shadow-xl outline-none will-change-transform focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
		"[--gap:var(--toast-gap,8px)] [--height:var(--toast-frontmost-height,var(--toast-height))] [--offset-y:calc((var(--toast-dir)*(var(--toast-offset-y)+var(--toast-index)*var(--gap)))+var(--toast-swipe-movement-y))] [--peek:0.5rem] [--scale:calc(max(0,1-(var(--toast-index)*var(--toast-scale-factor,0.05))))] [--shrink:calc(1-var(--scale))]",
		isTop
			? "top-0 origin-top [--toast-dir:1] after:bottom-full"
			: "bottom-0 origin-bottom [--toast-dir:-1] after:top-full",
		"h-(--height) [transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-dir)*(var(--toast-index)*var(--peek)+(var(--shrink)*var(--height))))))_scale(var(--scale))] [transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]",
		"after:absolute after:start-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
		"data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",
		"data-limited:pointer-events-none data-limited:opacity-0 data-starting-style:[transform:translateY(calc(var(--toast-dir)*-150%))]",
		"[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(calc(var(--toast-dir)*-150%))]",
		"data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
		"data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
		"data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
		"data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
		"data-expanded:data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
		"data-expanded:data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
		"data-expanded:data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
		"data-expanded:data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
		"data-[frontmost=false]:pointer-events-none data-[frontmost=false]:overflow-hidden",
		"[&_[data-slot=toast-title]]:text-foreground",
		"[&[data-type=success]_[data-slot=toast-title]]:text-success-soft-foreground",
		"[&[data-type=info]_[data-slot=toast-title]]:text-primary-soft-foreground",
		"[&[data-type=warning]_[data-slot=toast-title]]:text-warning-soft-foreground",
		"[&[data-type=error]_[data-slot=toast-title]]:text-destructive-soft-foreground",
	);
}

function Toast({
	className,
	placement = "bottom",
	...props
}: ToastPrimitive.Root.Props & {
	placement?: ToastPlacement;
}) {
	return (
		<ToastPrimitive.Root
			data-slot="toast"
			className={cn(getToastRootClasses(placement), className)}
			{...props}
		/>
	);
}

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
	return (
		<ToastPrimitive.Content
			data-slot="toast-content"
			className={cn(
				"flex h-full min-w-0 grow flex-col items-start justify-center gap-1 self-center overflow-hidden transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] data-behind:opacity-0 data-expanded:opacity-100",
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
			className={cn("font-medium text-sm leading-5", className)}
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
		icon = <OctagonXIcon aria-hidden="true" />;
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

function ToastList({ placement = "bottom" }: { placement?: ToastPlacement }) {
	const { toasts } = ToastPrimitive.useToastManager();

	return toasts.map((toastItem, index) => {
		const isFrontmost = index === 0;

		return (
			<Toast
				key={toastItem.id}
				toast={toastItem}
				placement={placement}
				data-frontmost={isFrontmost}
				inert={!isFrontmost}
				tabIndex={isFrontmost ? 0 : -1}
			>
				<ToastIcon type={toastItem.type} />
				<ToastContent>
					<ToastTitle />
					<ToastDescription />
					<ToastAction className="mt-2 self-start sm:hidden" />
				</ToastContent>
				<ToastAction className="hidden sm:flex" />
				<ToastClose />
			</Toast>
		);
	});
}

function Toaster({
	children,
	placement = "bottom",
	width = 460,
	gap = 8,
	scaleFactor = 0.05,
	toastManager = toast,
	...props
}: ToastPrimitive.Provider.Props & {
	placement?: ToastPlacement;
	width?: number | string;
	gap?: number;
	scaleFactor?: number;
}) {
	return (
		<ToastProvider toastManager={toastManager} {...props}>
			{children}
			<ToastPortal>
				<ToastViewport
					placement={placement}
					width={width}
					gap={gap}
					scaleFactor={scaleFactor}
				>
					<ToastList placement={placement} />
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
