import { cn } from "@/lib/utils";

function Kbd({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"kbd"> & { variant?: "default" | "light" }) {
	return (
		<kbd
			data-slot="kbd"
			data-variant={variant}
			className={cn(
				"pointer-events-none inline-flex h-6 w-fit min-w-5.5 select-none items-center justify-center gap-1 space-x-0.5 whitespace-nowrap rounded-lg bg-default in-data-[slot=input-group]:bg-input px-2 text-center font-medium font-sans text-muted-foreground text-xs data-[variant=light]:bg-transparent [&_svg:not([class*='size-'])]:size-3",
				className,
			)}
			{...props}
		/>
	);
}

function KbdGroup({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<kbd
			data-slot="kbd-group"
			className={cn("inline-flex items-center gap-1", className)}
			{...props}
		/>
	);
}

export { Kbd, KbdGroup };
