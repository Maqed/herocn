"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
	"group/toggle pressible no-highlight focus-visible:focus-field-ring relative isolate inline-flex w-fit shrink-0 origin-center cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-3xl px-4 font-medium text-sm outline-none transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-70 aria-pressed:bg-primary/15 aria-pressed:text-primary [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-default text-default-foreground hover:bg-default/80 active:bg-default/80",
				ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",
			},
			size: {
				default:
					"h-9 w-fit has-data-[icon=inline-start]:ps-3 has-data-[icon=inline-end]:pe-3",
				xs: "h-7 gap-0.5 px-2.5 has-data-[icon=inline-start]:ps-1.5 has-data-[icon=inline-end]:pe-1.5 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-8 gap-1 px-3 has-data-[icon=inline-start]:ps-2 has-data-[icon=inline-end]:pe-2 [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-10 gap-1.5 text-base has-data-[icon=inline-start]:ps-3 has-data-[icon=inline-end]:pe-3 [&_svg:not([class*='size-'])]:size-4",
				icon: "size-9 [&_svg:not([class*='size-'])]:size-5",
				"icon-xs": "size-7 px-3 [&_svg:not([class*='size-'])]:size-3.5",
				"icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-4",
				"icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-5.5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Toggle({
	className,
	variant = "default",
	size = "default",
	...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
	return (
		<TogglePrimitive
			data-slot="toggle"
			className={cn(toggleVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Toggle, toggleVariants };
