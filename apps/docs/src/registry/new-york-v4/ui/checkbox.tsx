"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { cn } from "cn";

function Checkbox({
	className,
	variant = "default",
	...props
}: CheckboxPrimitive.Root.Props & { variant?: "default" | "secondary" }) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				"group peer focus-visible:focus-ring aria-invalid:not-data-checked:invalid-field-ring relative flex size-4 shrink-0 items-center justify-center rounded-md border border-none bg-input text-primary-foreground shadow-xs outline-none transition-[color,background-color,box-shadow,opacity] duration-200 after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50 group-has-disabled/field:opacity-50 aria-invalid:text-destructive-foreground data-checked:bg-primary aria-invalid:data-checked:bg-destructive dark:data-checked:bg-primary",
				variant === "secondary" && "bg-default shadow-none",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="grid place-content-center text-current"
				keepMounted={true}
			>
				<svg
					aria-hidden="true"
					fill="none"
					role="presentation"
					stroke="currentColor"
					strokeDasharray={22}
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					viewBox="0 0 17 18"
					style={{
						transition: "stroke-dashoffset 150ms linear 15ms",
					}}
					className="size-3 [stroke-dashoffset:66] group-data-checked:[stroke-dashoffset:44]"
				>
					<polyline points="1 9 7 14 15 4" />
				</svg>
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
