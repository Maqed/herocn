"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"group/button pressible no-highlight focus-visible:focus-ring relative isolate inline-flex w-fit shrink-0 origin-center cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-3xl px-4 font-medium text-sm outline-none transition-all disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 has-data-[icon=inline-start]:ps-3.5 has-data-[icon=inline-end]:pe-3.5 aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-70 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/80",
				outline:
					"border border-border hover:bg-muted hover:text-foreground active:bg-muted active:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:active:bg-muted/50 dark:hover:bg-muted/50",
				secondary:
					"bg-default text-primary hover:bg-default/80 active:bg-default/80",
				tertiary:
					"bg-default text-default-foreground hover:bg-default/80 active:bg-default/80",
				ghost:
					"hover:bg-muted hover:text-foreground active:bg-muted active:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
				link: "text-primary underline-offset-4 hover:underline",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive active:bg-destructive/80",
				"destructive-soft":
					"bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive active:bg-destructive/20 dark:bg-destructive/20 dark:active:bg-destructive/30 dark:hover:bg-destructive/30",
			},
			size: {
				default: "h-9 w-fit",
				xs: "h-7 gap-0.5 px-2.5 has-data-[icon=inline-start]:ps-2 has-data-[icon=inline-end]:pe-2 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-8 gap-1 px-3 has-data-[icon=inline-start]:ps-2.5 has-data-[icon=inline-end]:pe-2.5 [&_svg:not([class*='size-'])]:size-3.5",
				lg: "h-10 gap-1.5 text-base [&_svg:not([class*='size-'])]:size-4",
				icon: "size-9 [&_svg:not([class*='size-'])]:size-5",
				"icon-xs":
					"size-7 px-3 has-data-[icon=inline-start]:ps-2.5 has-data-[icon=inline-end]:pe-2.5 [&_svg:not([class*='size-'])]:size-3.5",
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

function Button({
	className,
	variant = "default",
	size = "default",
	...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
	return (
		<ButtonPrimitive
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
