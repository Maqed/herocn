import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"group/badge inline-flex shrink-0 items-center gap-0.5 rounded-2xl px-2 py-0.5 font-medium leading-5 has-data-[icon=inline-start]:ps-1.5 has-data-[icon=inline-end]:pe-1.5 [&>svg]:pointer-events-none [&>svg]:size-3!",
	{
		variants: {
			variant: {
				default: "bg-default text-default-foreground",
				primary: "bg-default text-primary",
				success: "bg-default text-success",
				warning: "bg-default text-warning",
				destructive: "bg-default text-destructive",
			},
			size: {
				default: "text-xs",
				sm: "px-1 py-0.25 text-xs",
				lg: "px-3 py-1 font-medium text-sm",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

function Badge({
	className,
	variant = "default",
	size = "default",
	render,
	...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
	return useRender({
		defaultTagName: "span",
		props: mergeProps<"span">(
			{
				className: cn(badgeVariants({ variant, size }), className),
			},
			props,
		),
		render,
		state: {
			slot: "badge",
			variant,
			size,
		},
	});
}

export { Badge, badgeVariants };
