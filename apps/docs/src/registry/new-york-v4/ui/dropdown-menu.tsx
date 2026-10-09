"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { cn } from "cn";
import { CheckIcon, ChevronRightIcon, XIcon } from "lucide-react";
import type * as React from "react";

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
	return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
	return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
}

function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
	return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

function DropdownMenuContent({
	align = "start",
	alignOffset = 0,
	side = "bottom",
	sideOffset = 8,
	className,
	...props
}: MenuPrimitive.Popup.Props &
	Pick<
		MenuPrimitive.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset"
	>) {
	return (
		<MenuPrimitive.Portal>
			<MenuPrimitive.Positioner
				className="isolate z-50 outline-none"
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
			>
				<MenuPrimitive.Popup
					data-slot="dropdown-menu-content"
					className={cn(
						"z-50 max-h-(--available-height) w-(--anchor-width) min-w-45 origin-(--transform-origin) overflow-y-auto overflow-x-hidden rounded-3xl bg-popover p-1.5 text-popover-foreground shadow-xl outline-none ring-1 ring-foreground/10 transition-[opacity,scale,translate] duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] data-[side=left]:data-starting-style:translate-x-1 data-[side=right]:data-starting-style:-translate-x-1 data-[side=bottom]:data-starting-style:-translate-y-1 data-[side=top]:data-starting-style:translate-y-1 data-ending-style:scale-[0.95] data-starting-style:scale-[0.9] data-ending-style:opacity-0 data-starting-style:opacity-0 data-[instant=group]:transition-none data-ending-style:duration-100 md:min-w-55",
						className,
					)}
					{...props}
				/>
			</MenuPrimitive.Positioner>
		</MenuPrimitive.Portal>
	);
}

function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
	return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
}

function DropdownMenuLabel({
	className,
	inset,
	...props
}: MenuPrimitive.GroupLabel.Props & {
	inset?: boolean;
}) {
	return (
		<MenuPrimitive.GroupLabel
			data-slot="dropdown-menu-label"
			data-inset={inset}
			className={cn(
				"px-3 py-1.5 font-medium text-muted-foreground text-xs data-inset:ps-7",
				className,
			)}
			{...props}
		/>
	);
}

function DropdownMenuItem({
	className,
	inset,
	variant = "default",
	...props
}: MenuPrimitive.Item.Props & {
	inset?: boolean;
	variant?: "default" | "destructive";
}) {
	return (
		<MenuPrimitive.Item
			data-slot="dropdown-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cn(
				"group/dropdown-menu-item focus-visible:focus-ring data-highlighted:focus-ring relative flex min-h-9 w-full cursor-default select-none items-center justify-start gap-3 rounded-2xl px-3 py-1.5 text-sm outline-none outline-hidden transition-[box-shadow] hover:bg-accent hover:text-accent-foreground not-data-[variant=destructive]:focus-visible:**:text-accent-foreground data-disabled:pointer-events-none data-inset:ps-7 data-[variant=destructive]:text-destructive data-disabled:opacity-50 data-[variant=destructive]:focus-visible:text-destructive data-[variant=destructive]:focus-visible:ring-destructive data-[variant=destructive]:hover:bg-destructive/20 data-[variant=destructive]:hover:text-destructive/90 dark:data-[variant=destructive]:hover:bg-destructive/10 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 data-[variant=destructive]:*:[svg]:text-destructive",
				className,
			)}
			{...props}
		/>
	);
}

function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
	return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: MenuPrimitive.SubmenuTrigger.Props & {
	inset?: boolean;
}) {
	return (
		<MenuPrimitive.SubmenuTrigger
			data-slot="dropdown-menu-sub-trigger"
			data-inset={inset}
			className={cn(
				"focus-visible:focus-ring data-highlighted:focus-ring relative flex min-h-9 w-full cursor-default select-none items-center justify-start gap-3 rounded-2xl px-3 py-1.5 text-sm outline-none outline-hidden transition-[box-shadow] data-popup-open:bg-accent data-inset:ps-7 data-popup-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ms-auto rtl:rotate-180" />
		</MenuPrimitive.SubmenuTrigger>
	);
}

function DropdownMenuSubContent({
	align = "start",
	alignOffset = 0,
	side = "inline-end",
	sideOffset = 8,
	className,
	...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
	return (
		<DropdownMenuContent
			data-slot="dropdown-menu-sub-content"
			className={cn(
				"relative flex w-full min-w-45 flex-col gap-1 overflow-clip rounded-2xl bg-popover p-1.5 text-popover-foreground shadow-2xl ring-1 ring-foreground/10 md:min-w-55",
				className,
			)}
			align={align}
			alignOffset={alignOffset}
			side={side}
			sideOffset={sideOffset}
			{...props}
		/>
	);
}

function DropdownMenuCheckboxItem({
	className,
	children,
	checked,
	inset,
	...props
}: MenuPrimitive.CheckboxItem.Props & {
	inset?: boolean;
}) {
	return (
		<MenuPrimitive.CheckboxItem
			data-slot="dropdown-menu-checkbox-item"
			data-inset={inset}
			className={cn(
				"focus-visible:focus-ring data-highlighted:focus-ring relative flex min-h-9 w-full cursor-default select-none items-center justify-start gap-3 rounded-2xl px-3 py-1.5 text-sm outline-none outline-hidden transition-[box-shadow] hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-inset:ps-7 data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			checked={checked}
			{...props}
		>
			<span
				className="pointer-events-none absolute end-2 flex items-center justify-center"
				data-slot="dropdown-menu-checkbox-item-indicator"
			>
				<MenuPrimitive.CheckboxItemIndicator>
					<CheckIcon />
				</MenuPrimitive.CheckboxItemIndicator>
			</span>
			{children}
		</MenuPrimitive.CheckboxItem>
	);
}

function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
	return (
		<MenuPrimitive.RadioGroup
			data-slot="dropdown-menu-radio-group"
			{...props}
		/>
	);
}

function DropdownMenuRadioItem({
	className,
	children,
	inset,
	...props
}: MenuPrimitive.RadioItem.Props & {
	inset?: boolean;
}) {
	return (
		<MenuPrimitive.RadioItem
			data-slot="dropdown-menu-radio-item"
			data-inset={inset}
			className={cn(
				"focus-visible:focus-ring data-highlighted:focus-ring relative flex min-h-9 w-full cursor-default select-none items-center justify-start gap-3 rounded-2xl px-3 py-1.5 ps-1.5 pe-8 text-sm outline-none outline-hidden transition-[box-shadow] hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-inset:ps-7 data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		>
			<span
				className="pointer-events-none absolute end-2 flex items-center justify-center"
				data-slot="dropdown-menu-radio-item-indicator"
			>
				<MenuPrimitive.RadioItemIndicator>
					<CheckIcon />
				</MenuPrimitive.RadioItemIndicator>
			</span>
			{children}
		</MenuPrimitive.RadioItem>
	);
}

function DropdownMenuSeparator({
	className,
	...props
}: MenuPrimitive.Separator.Props) {
	return (
		<MenuPrimitive.Separator
			data-slot="dropdown-menu-separator"
			className={cn("-mx-1 my-1 h-px bg-border", className)}
			{...props}
		/>
	);
}

function DropdownMenuShortcut({
	className,
	...props
}: React.ComponentProps<"span">) {
	return (
		<span
			data-slot="dropdown-menu-shortcut"
			className={cn(
				"ms-auto text-muted-foreground text-xs tracking-widest group-focus/dropdown-menu-item:text-accent-foreground group-data-highlighted/dropdown-menu-item:text-accent-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function DropdownMenuEmpty({ className, ...props }: MenuPrimitive.Empty.Props) {
	return (
		<MenuPrimitive.Empty
			data-slot="dropdown-menu-empty"
			className={cn(
				"px-3 py-6 text-center text-muted-foreground text-sm",
				className,
			)}
			{...props}
		/>
	);
}

function DropdownMenuFilterProvider({
	...props
}: MenuPrimitive.FilterProvider.Props) {
	return (
		<MenuPrimitive.FilterProvider
			data-slot="dropdown-menu-filter-provider"
			{...props}
		/>
	);
}

function DropdownMenuInput({
	className,
	showClear = true,
	...props
}: MenuPrimitive.Input.Props & {
	showClear?: boolean;
}) {
	return (
		<div
			data-slot="dropdown-menu-input-wrapper"
			className="relative m-1.5 mb-0"
		>
			<MenuPrimitive.Input
				data-slot="dropdown-menu-input"
				data-variant="secondary"
				className={cn(
					"w-full min-w-0 rounded-xl bg-input px-2.5 py-1.5 text-sm shadow-xs outline-none transition-[background-color,box-shadow,opacity,filter] placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[variant=secondary]:bg-default data-[variant=secondary]:shadow-none md:px-3 md:py-2 dark:brightness-100",
					"aria-invalid:not-data-highlighted:invalid-field-ring",
					"aria-invalid:data-highlighted:invalid-field-ring-focus",
					"not-aria-invalid:data-highlighted:focus-field-ring not-aria-invalid:data-highlighted:ring-ring",
					"hover:not-data-highlighted:brightness-97 not-dark:data-[variant=secondary]:brightness-100 hover:not-data-highlighted:data-[variant=secondary]:bg-default not-dark:hover:not-data-highlighted:data-[variant=secondary]:brightness-96 dark:hover:not-data-highlighted:brightness-110 dark:hover:not-data-highlighted:data-[variant=secondary]:bg-default",
					showClear && "pe-8!",
					className,
				)}
				{...props}
			/>
			{showClear && (
				<MenuPrimitive.Clear
					data-slot="dropdown-menu-clear"
					className="absolute end-1 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-3xl text-muted-foreground outline-none transition hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
				>
					<XIcon />
				</MenuPrimitive.Clear>
			)}
		</div>
	);
}

function DropdownMenuList({ className, ...props }: MenuPrimitive.List.Props) {
	return (
		<MenuPrimitive.List
			data-slot="dropdown-menu-list"
			className={cn(
				"scroll-py-1 overflow-y-auto overscroll-contain p-2 outline-none",
				className,
			)}
			{...props}
		/>
	);
}

export {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuEmpty,
	DropdownMenuFilterProvider,
	DropdownMenuGroup,
	DropdownMenuInput,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuList,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
};
