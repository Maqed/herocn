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
				"w-full min-w-0 rounded-xl bg-input px-2.5 py-1.5 text-sm shadow-xs outline-none transition-all placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[variant=secondary]:bg-default data-[variant=secondary]:shadow-none md:px-3 md:py-2 dark:brightness-100",
				"aria-invalid:not-focus-visible:invalid-field-ring",
				"aria-invalid:focus-visible:invalid-field-ring-focus",
				"not-aria-invalid:focus-visible:focus-field-ring not-aria-invalid:focus-visible:ring-ring",
				"hover:not-focus-visible:brightness-97 not-dark:data-[variant=secondary]:brightness-100 hover:not-focus-visible:data-[variant=secondary]:bg-default not-dark:hover:not-focus-visible:data-[variant=secondary]:brightness-96 dark:hover:not-focus-visible:brightness-110 dark:hover:not-focus-visible:data-[variant=secondary]:bg-default",
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
