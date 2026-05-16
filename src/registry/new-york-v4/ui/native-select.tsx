import { ChevronDownIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

type NativeSelectProps = Omit<React.ComponentProps<"select">, "size"> & {
	variant?: "default" | "secondary";
	size?: "sm" | "default";
};

function NativeSelect({
	className,
	variant = "default",
	size = "default",
	...props
}: NativeSelectProps) {
	return (
		<div
			className={cn(
				"relative w-fit has-[select:disabled]:opacity-50",
				className,
			)}
			data-slot="native-select-wrapper"
			data-variant={variant}
			data-size={size}
		>
			<select
				data-slot="native-select"
				data-variant={variant}
				data-size={size}
				className={cn(
					"w-full min-w-36 appearance-none rounded-xl bg-input px-2.5 py-1.5 pe-8 text-sm shadow-xs outline-none transition-all placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[variant=secondary]:bg-default data-[variant=secondary]:shadow-none md:px-3 md:py-2 dark:brightness-100",
					"aria-invalid:not-focus-visible:invalid-field-ring",
					"aria-invalid:focus-visible:invalid-field-ring-focus",
					"not-aria-invalid:focus-visible:focus-field-ring not-aria-invalid:focus-visible:ring-ring",
					"hover:not-focus-visible:brightness-97 not-dark:data-[variant=secondary]:brightness-100 hover:not-focus-visible:data-[variant=secondary]:bg-default not-dark:hover:not-focus-visible:data-[variant=secondary]:brightness-96 dark:hover:not-focus-visible:brightness-110 dark:hover:not-focus-visible:data-[variant=secondary]:bg-default",
					"data-[size=sm]:py-1 data-[size=sm]:text-xs data-[size=sm]:md:py-1.5",
				)}
				{...props}
			/>
			<ChevronDownIcon
				className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 select-none text-muted-foreground"
				aria-hidden="true"
				data-slot="native-select-icon"
			/>
		</div>
	);
}

function NativeSelectOption({
	className,
	...props
}: React.ComponentProps<"option">) {
	return (
		<option
			data-slot="native-select-option"
			className={cn("bg-[Canvas] text-[CanvasText]", className)}
			{...props}
		/>
	);
}

function NativeSelectOptGroup({
	className,
	...props
}: React.ComponentProps<"optgroup">) {
	return (
		<optgroup
			data-slot="native-select-optgroup"
			className={cn("bg-[Canvas] text-[CanvasText]", className)}
			{...props}
		/>
	);
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
