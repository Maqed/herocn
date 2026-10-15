import { cn } from "cn";
import { ChevronRightIcon } from "lucide-react";
import type * as React from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible";

function Trace({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="trace"
			className={cn(
				"flex w-full min-w-0 flex-col gap-3 *:has-[>[data-slot=trace-line]]:flex *:has-[>[data-slot=trace-line]]:w-fit *:has-[>[data-slot=trace-line]]:min-w-0 *:has-[>[data-slot=trace-line]]:max-w-full *:has-[>[data-slot=trace-line]]:rounded-lg *:has-[>[data-slot=trace-line]]:text-start *:has-[>[data-slot=trace-line]]:outline-none *:has-[>[data-slot=trace-line]]:focus-visible:ring-[3px] *:has-[>[data-slot=trace-line]]:focus-visible:ring-ring/50",
				className,
			)}
			{...props}
		/>
	);
}

function TraceLine({
	className,
	status,
	...props
}: React.ComponentProps<"span"> & {
	status?: "running" | "error" | "pending";
}) {
	return (
		<span
			data-slot="trace-line"
			data-status={status}
			className={cn(
				"data-[status=running]:*:data-[slot=trace-title]:shimmer flex w-fit min-w-0 max-w-full in-[a,button]:cursor-pointer items-center gap-2 in-[a:hover,button:hover]:text-foreground text-muted-foreground text-sm transition-colors data-[status=error]:in-[a:hover,button:hover]:text-destructive data-[status=error]:text-destructive data-[status=pending]:opacity-60",
				className,
			)}
			{...props}
		/>
	);
}

function TraceIcon({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="trace-icon"
			aria-hidden="true"
			className={cn(
				"flex size-4 shrink-0 items-center justify-center [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [[data-slot=trace-title]~&]:-ms-1",
				className,
			)}
			{...props}
		/>
	);
}

function TraceTitle({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="trace-title"
			className={cn("motion-reduce:shimmer-none min-w-0 truncate", className)}
			{...props}
		/>
	);
}

function TraceDescription({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="trace-description"
			className={cn(
				"shrink-0 text-muted-foreground/70 tabular-nums",
				className,
			)}
			{...props}
		/>
	);
}

function TraceCollapsible({
	className,
	...props
}: Omit<React.ComponentProps<typeof Collapsible>, "open"> &
	(
		| { open?: undefined }
		| {
				open: boolean;
				onOpenChange: NonNullable<
					React.ComponentProps<typeof Collapsible>["onOpenChange"]
				>;
		  }
	)) {
	return (
		<Collapsible
			data-slot="trace-collapsible"
			className={cn("flex w-full min-w-0 flex-col", className)}
			{...props}
		/>
	);
}

function TraceCollapsibleTrigger({
	className,
	children,
	...props
}: React.ComponentProps<typeof CollapsibleTrigger>) {
	return (
		<CollapsibleTrigger
			data-slot="trace-collapsible-trigger"
			className={cn(
				"group/trace-collapsible-trigger flex w-fit min-w-0 max-w-full cursor-pointer items-center gap-1 rounded-lg text-start text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 has-[[data-status=error]]:text-destructive",
				className,
			)}
			{...props}
		>
			{children}
			<TraceIcon className="transition-transform group-aria-expanded/trace-collapsible-trigger:rotate-90">
				<ChevronRightIcon />
			</TraceIcon>
		</CollapsibleTrigger>
	);
}

function TraceCollapsibleContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof CollapsibleContent>) {
	return (
		<CollapsibleContent
			data-slot="trace-collapsible-content"
			className="h-(--collapsible-panel-height) min-w-0 overflow-hidden transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0"
			{...props}
		>
			<div
				data-slot="trace-collapsible-content-inner"
				className={cn(
					"wrap-break-word ms-[calc(--spacing(2)-1px)] mt-2.5 mb-1 min-w-0 border-s ps-4 pe-1 text-muted-foreground leading-relaxed",
					className,
				)}
			>
				{children}
			</div>
		</CollapsibleContent>
	);
}

export {
	Trace,
	TraceCollapsible,
	TraceCollapsibleContent,
	TraceCollapsibleTrigger,
	TraceDescription,
	TraceIcon,
	TraceLine,
	TraceTitle,
};
