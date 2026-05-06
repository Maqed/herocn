"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({
	className,
	variant = "default",
	...props
}: RadioGroupPrimitive.Props & { variant?: "default" | "secondary" }) {
	return (
		<RadioGroupPrimitive
			data-slot="radio-group"
			data-variant={variant}
			className={cn("group/radio-group grid w-full gap-3", className)}
			{...props}
		/>
	);
}

function RadioGroupItem({ className, ...props }: RadioPrimitive.Root.Props) {
	return (
		<RadioPrimitive.Root
			data-slot="radio-group-item"
			className={cn(
				"group/radio-group-item peer not-aria-invalid:focus-visible:focus-ring aria-invalid:not-focus-visible:invalid-field-ring aria-invalid:focus-visible:invalid-field-ring-focus relative flex aspect-square size-4 shrink-0 rounded-full border-none bg-input shadow-sm outline-none brightness-100 transition-all after:absolute after:-inset-x-3 after:-inset-y-2 active:scale-90 disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-primary data-checked:text-primary-foreground hover:data-unchecked:brightness-97 group-data-[variant=secondary]/radio-group:bg-default group-data-[variant=secondary]/radio-group:shadow-none dark:hover:data-unchecked:brightness-125",
				className,
			)}
			{...props}
		>
			<RadioPrimitive.Indicator
				data-slot="radio-group-indicator"
				className="flex size-4 items-center justify-center"
			>
				<span className="absolute start-1/2 top-1/2 size-1.75 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground transition-all group-active/radio-group-item:scale-120 rtl:translate-x-1/2" />
			</RadioPrimitive.Indicator>
		</RadioPrimitive.Root>
	);
}

export { RadioGroup, RadioGroupItem };
