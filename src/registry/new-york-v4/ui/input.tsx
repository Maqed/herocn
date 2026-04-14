import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({
	className,
	variant = "default",
	type,
	...props
}: React.ComponentProps<"input"> & { variant?: "default" | "secondary" }) {
	return (
		<InputPrimitive
			type={type}
			data-slot="input"
			data-variant={variant}
			className={cn(
				"w-full min-w-0 rounded-xl bg-input px-2.5 py-1.5 text-sm shadow-xs outline-none transition-colors placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[variant=secondary]:bg-default/80 data-[variant=secondary]:shadow-none md:px-3 md:py-2 dark:bg-input/80 dark:data-[variant=secondary]:bg-default/80",
				"aria-invalid:not-focus-visible:invalid-field-ring", // unfocused invalid
				"aria-invalid:focus-visible:invalid-field-ring-focus", // focused invalid
				"not-aria-invalid:focus-visible:focus-field-ring not-aria-invalid:focus-visible:ring-ring", // normal focus
				"hover:not-focus-visible:bg-input/40 hover:not-focus-visible:data-[variant=secondary]:bg-default dark:hover:not-focus-visible:bg-input dark:hover:not-focus-visible:data-[variant=secondary]:bg-default",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
