"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import { CheckIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

function Menubar({
	className,
	variant = "default",
	...props
}: MenubarPrimitive.Props & {
	variant?: "default" | "secondary" | "tertiary" | "outline";
}) {
	return (
		<MenubarPrimitive
			data-slot="menubar"
			data-variant={variant}
			className={cn(
				"group/menubar flex items-center rounded-3xl bg-surface p-1.5",
				variant === "outline" && "border bg-transparent",
				variant === "secondary" && "bg-surface-secondary",
				variant === "tertiary" && "bg-surface-tertiary",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof DropdownMenu>) {
	return <DropdownMenu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({
	...props
}: React.ComponentProps<typeof DropdownMenuGroup>) {
	return <DropdownMenuGroup data-slot="menubar-group" {...props} />;
}

function MenubarPortal({
	...props
}: React.ComponentProps<typeof DropdownMenuPortal>) {
	return <DropdownMenuPortal data-slot="menubar-portal" {...props} />;
}

function MenubarTrigger({
	className,
	...props
}: React.ComponentProps<typeof DropdownMenuTrigger>) {
	return (
		<DropdownMenuTrigger
			data-slot="menubar-trigger"
			className={cn(
				"pressible no-highlight focus-visible:focus-ring inline-flex cursor-pointer select-none items-center justify-center rounded-2xl px-3 py-1.5 font-medium text-sm outline-none transition-all hover:bg-muted data-popup-open:bg-muted group-data-[variant=secondary]/menubar:data-popup-open:brightness-97 group-data-[variant=tertiary]/menubar:data-popup-open:brightness-94 group-data-[variant=secondary]/menubar:hover:brightness-97 group-data-[variant=tertiary]/menubar:hover:brightness-94 dark:group-data-[variant=secondary]/menubar:data-popup-open:brightness-110 dark:group-data-[variant=tertiary]/menubar:data-popup-open:brightness-120 dark:group-data-[variant=secondary]/menubar:hover:brightness-110 dark:group-data-[variant=tertiary]/menubar:hover:brightness-120",
				className,
			)}
			{...props}
		/>
	);
}

function MenubarContent({
	...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
	return <DropdownMenuContent data-slot="menubar-content" {...props} />;
}

function MenubarItem({
	...props
}: React.ComponentProps<typeof DropdownMenuItem>) {
	return <DropdownMenuItem data-slot="menubar-item" {...props} />;
}

function MenubarCheckboxItem({
	className,
	children,
	checked,
	...props
}: MenuPrimitive.CheckboxItem.Props) {
	return (
		<MenuPrimitive.CheckboxItem
			data-slot="menubar-checkbox-item"
			className={cn(
				"no-highlight focus-visible:focus-ring relative flex min-h-9 w-full cursor-default select-none items-center justify-start gap-3 rounded-2xl px-3 py-1.5 text-sm outline-none outline-hidden transition-all hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			checked={checked}
			{...props}
		>
			{children}
			<span
				className="pointer-events-none absolute end-2 flex items-center justify-center"
				data-slot="menubar-checkbox-item-indicator"
			>
				<MenuPrimitive.CheckboxItemIndicator>
					<CheckIcon className="size-4" />
				</MenuPrimitive.CheckboxItemIndicator>
			</span>
		</MenuPrimitive.CheckboxItem>
	);
}

function MenubarRadioGroup({
	...props
}: React.ComponentProps<typeof DropdownMenuRadioGroup>) {
	return <DropdownMenuRadioGroup data-slot="menubar-radio-group" {...props} />;
}

function MenubarRadioItem({
	className,
	children,
	...props
}: MenuPrimitive.RadioItem.Props) {
	return (
		<MenuPrimitive.RadioItem
			data-slot="menubar-radio-item"
			className={cn(
				"no-highlight focus-visible:focus-ring relative flex min-h-9 w-full cursor-default select-none items-center justify-start gap-3 rounded-2xl px-3 py-1.5 ps-1.5 pe-8 text-sm outline-none outline-hidden transition-all hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		>
			{children}
			<span
				className="pointer-events-none absolute end-2 flex items-center justify-center"
				data-slot="menubar-radio-item-indicator"
			>
				<MenuPrimitive.RadioItemIndicator>
					<CheckIcon className="size-4" />
				</MenuPrimitive.RadioItemIndicator>
			</span>
		</MenuPrimitive.RadioItem>
	);
}

function MenubarLabel({
	...props
}: React.ComponentProps<typeof DropdownMenuLabel>) {
	return <DropdownMenuLabel data-slot="menubar-label" {...props} />;
}

function MenubarSeparator({
	...props
}: React.ComponentProps<typeof DropdownMenuSeparator>) {
	return <DropdownMenuSeparator data-slot="menubar-separator" {...props} />;
}

function MenubarShortcut({
	...props
}: React.ComponentProps<typeof DropdownMenuShortcut>) {
	return <DropdownMenuShortcut data-slot="menubar-shortcut" {...props} />;
}

function MenubarSub({
	...props
}: React.ComponentProps<typeof DropdownMenuSub>) {
	return <DropdownMenuSub data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
	...props
}: React.ComponentProps<typeof DropdownMenuSubTrigger>) {
	return <DropdownMenuSubTrigger data-slot="menubar-sub-trigger" {...props} />;
}

function MenubarSubContent({
	...props
}: React.ComponentProps<typeof DropdownMenuSubContent>) {
	return <DropdownMenuSubContent data-slot="menubar-sub-content" {...props} />;
}

export {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarLabel,
	MenubarMenu,
	MenubarPortal,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
};
