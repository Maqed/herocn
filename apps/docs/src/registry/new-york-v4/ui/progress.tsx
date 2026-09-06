"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";

import { cn } from "cn";

function Progress({
	className,
	children,
	variant = "primary",
	size = "default",
	value,
	...props
}: ProgressPrimitive.Root.Props & {
	variant?: "default" | "primary" | "success" | "warning" | "destructive";
	size?: "sm" | "default" | "lg";
}) {
	return (
		<ProgressPrimitive.Root
			value={value}
			data-slot="progress"
			data-variant={variant}
			data-size={size}
			className={cn("group/progress flex flex-wrap gap-3", className)}
			{...props}
		>
			{children}
			<ProgressTrack>
				<ProgressIndicator />
			</ProgressTrack>
		</ProgressPrimitive.Root>
	);
}

function ProgressTrack({ className, ...props }: ProgressPrimitive.Track.Props) {
	return (
		<ProgressPrimitive.Track
			className={cn(
				"relative flex w-full items-center overflow-x-hidden rounded-sm bg-default",
				"group-data-[size=default]/progress:h-2 group-data-[size=lg]/progress:h-3 group-data-[size=sm]/progress:h-1 group-data-[size=lg]/progress:rounded-md group-data-[size=sm]/progress:rounded-xs",
				className,
			)}
			data-slot="progress-track"
			{...props}
		/>
	);
}

function ProgressIndicator({
	className,
	...props
}: ProgressPrimitive.Indicator.Props) {
	return (
		<ProgressPrimitive.Indicator
			data-slot="progress-indicator"
			className={cn(
				"h-full rounded-sm transition-[width] duration-300 ease-out motion-reduce:transition-none",
				"group-data-[variant=default]/progress:bg-default-foreground",
				"group-data-[variant=primary]/progress:bg-primary",
				"group-data-[variant=success]/progress:bg-success",
				"group-data-[variant=warning]/progress:bg-warning",
				"group-data-[variant=destructive]/progress:bg-destructive",
				"group-data-[size=lg]/progress:rounded-md group-data-[size=sm]/progress:rounded-xs",
				className,
			)}
			{...props}
		/>
	);
}

function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props) {
	return (
		<ProgressPrimitive.Label
			className={cn("font-medium text-sm", className)}
			data-slot="progress-label"
			{...props}
		/>
	);
}

function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props) {
	return (
		<ProgressPrimitive.Value
			className={cn("ms-auto text-sm tabular-nums", className)}
			data-slot="progress-value"
			{...props}
		/>
	);
}

export {
	Progress,
	ProgressIndicator,
	ProgressLabel,
	ProgressTrack,
	ProgressValue,
};
