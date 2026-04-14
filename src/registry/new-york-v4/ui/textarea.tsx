import type * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
	className,
	variant = "default",
	...props
}: React.ComponentProps<"textarea"> & {
	variant?: "default" | "secondary";
}) {
	return (
		<textarea
			data-slot="textarea"
			data-variant={variant}
			className={cn(
				"field-sizing-content flex min-h-16 w-full rounded-xl bg-input px-2.5 py-1.5 text-foreground text-sm shadow-xs outline-none transition-all placeholder:text-muted-foreground md:px-3 md:py-2 dark:bg-input/80",
				"aria-invalid:not-focus-visible:invalid-field-ring",
				"aria-invalid:focus-visible:invalid-field-ring-focus",
				"not-aria-invalid:focus-visible:focus-field-ring not-aria-invalid:focus-visible:ring-ring",
				"hover:not-focus-visible:bg-input/40 hover:not-focus-visible:data-[variant=secondary]:bg-default dark:hover:not-focus-visible:bg-input dark:hover:not-focus-visible:data-[variant=secondary]:bg-default",
				"data-[variant=secondary]:bg-default/80 data-[variant=secondary]:shadow-none dark:data-[variant=secondary]:bg-default/80",
				"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
