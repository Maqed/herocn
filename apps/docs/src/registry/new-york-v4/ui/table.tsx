"use client";

import type * as React from "react";

import { cn } from "@/lib/utils";

function Table({
	className,
	containerClassName,
	variant = "primary",
	...props
}: React.ComponentProps<"table"> & {
	variant?: "primary" | "secondary";
	containerClassName?: string;
}) {
	return (
		<div
			data-slot="table-container"
			data-variant={variant}
			className={cn(
				"group/table no-scrollbar relative w-full overflow-x-auto",
				variant === "primary" && "rounded-3xl bg-surface-secondary p-1",
				containerClassName,
			)}
		>
			<table
				data-slot="table"
				className={cn("w-full caption-bottom text-sm", className)}
				{...props}
			/>
		</div>
	);
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
	return (
		<thead
			data-slot="table-header"
			className={cn(
				"group-data-[variant=primary]/table:bg-surface-secondary",
				className,
			)}
			{...props}
		/>
	);
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
	return (
		<tbody
			data-slot="table-body"
			className={cn(
				"[&_tr:last-child]:border-b-0",
				"group-data-[variant=primary]/table:[&_tr:first-child_td:first-child]:rounded-ss-3xl group-data-[variant=primary]/table:[&_tr:first-child_td:last-child]:rounded-se-3xl group-data-[variant=primary]/table:[&_tr:last-child_td:first-child]:rounded-es-3xl group-data-[variant=primary]/table:[&_tr:last-child_td:last-child]:rounded-ee-3xl",
				className,
			)}
			{...props}
		/>
	);
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
	return (
		<tfoot
			data-slot="table-footer"
			className={cn(
				"[&_tr]:[&_td]:!bg-transparent font-medium group-data-[variant=secondary]/table:border-border/50 group-data-[variant=secondary]/table:border-t [&>tr]:last:border-b-0",
				className,
			)}
			{...props}
		/>
	);
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
	return (
		<tr
			data-slot="table-row"
			className={cn(
				"border-border/50 border-b transition-colors data-[state=selected]:[&_td]:bg-surface/10",
				"group-data-[variant=primary]/table:hover:[&_td]:bg-surface/40",
				"group-data-[variant=secondary]/table:hover:[&_td]:bg-default/50",
				className,
			)}
			{...props}
		/>
	);
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
	return (
		<th
			data-slot="table-head"
			className={cn(
				"relative px-4 py-2.5 text-start font-medium text-muted-foreground text-xs",
				"group-data-[variant=secondary]/table:bg-surface-secondary group-data-[variant=secondary]/table:last:rounded-e-xl group-data-[variant=secondary]/table:first:rounded-s-xl",
				"[&:has([role=checkbox])]:pe-0",
				className,
			)}
			{...props}
		/>
	);
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
	return (
		<td
			data-slot="table-cell"
			className={cn(
				"px-4 py-3 align-middle text-foreground text-sm",
				"group-data-[variant=primary]/table:bg-surface",
				"[&:has([role=checkbox])]:pe-0",
				className,
			)}
			{...props}
		/>
	);
}

function TableCaption({
	className,
	...props
}: React.ComponentProps<"caption">) {
	return (
		<caption
			data-slot="table-caption"
			className={cn("my-1.5 text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

export {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
};
