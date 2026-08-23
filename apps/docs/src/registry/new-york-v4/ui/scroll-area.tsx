"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import type React from "react";
import { cn } from "@/lib/utils";

function ScrollArea({
	className,
	children,
	...props
}: ScrollAreaPrimitive.Root.Props): React.ReactElement {
	return (
		<ScrollAreaPrimitive.Root className={cn("size-full", className)} {...props}>
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="focus-visible:focus-ring size-full rounded-[inherit] transition-[color,box-shadow]"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	);
}

function ScrollBar({
	className,
	orientation = "vertical",
	...props
}: ScrollAreaPrimitive.Scrollbar.Props): React.ReactElement {
	return (
		<ScrollAreaPrimitive.Scrollbar
			className={cn(
				"m-1 flex opacity-0 transition-opacity delay-300 data-[orientation=horizontal]:h-1.25 data-[orientation=vertical]:w-1.25 data-[orientation=horizontal]:flex-col data-hovering:opacity-100 data-scrolling:opacity-100 data-hovering:delay-0 data-scrolling:delay-0 data-hovering:duration-100 data-scrolling:duration-100",
				className,
			)}
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			{...props}
		>
			<ScrollAreaPrimitive.Thumb
				className="relative flex-1 rounded-lg bg-foreground/20 hover:bg-foreground/60"
				data-slot="scroll-area-thumb"
			/>
		</ScrollAreaPrimitive.Scrollbar>
	);
}

export { ScrollArea, ScrollBar };
