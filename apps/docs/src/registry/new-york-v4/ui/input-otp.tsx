"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import * as React from "react";
import { cn } from "@/lib/utils";

function InputOTP({
	className,
	containerClassName,
	variant = "default",
	...props
}: React.ComponentProps<typeof OTPInput> & {
	containerClassName?: string;
	variant?: "default" | "secondary";
}) {
	return (
		<div data-variant={variant} className="group">
			<OTPInput
				data-slot="input-otp"
				containerClassName={cn(
					"relative flex items-center gap-2 has-disabled:cursor-not-allowed has-disabled:opacity-50",
					containerClassName,
				)}
				spellCheck={false}
				className={cn("disabled:cursor-not-allowed", className)}
				{...props}
			/>
		</div>
	);
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="input-otp-group"
			className={cn("flex items-center gap-2", className)}
			{...props}
		/>
	);
}

function InputOTPSlot({
	index,
	className,
	...props
}: React.ComponentProps<"div"> & {
	index: number;
}) {
	const inputOTPContext = React.useContext(OTPInputContext);
	const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

	return (
		<div
			data-slot="input-otp-slot"
			data-active={isActive}
			data-filled={char !== null}
			className={cn(
				"relative flex h-10 w-9.5 flex-none items-center justify-center",
				"rounded-xl bg-input text-foreground shadow-xs",
				"font-semibold text-sm outline-none",
				"transition motion-reduce:transition-none",
				"data-[active=true]:focus-field-ring data-[active=true]:z-10",
				"aria-invalid:invalid-field-ring",
				"group-data-[variant=secondary]:bg-default group-data-[variant=secondary]:shadow-none",
				className,
			)}
			{...props}
		>
			{char && (
				<span className="fade-in-0 zoom-in-80 slide-in-from-bottom-1 animate-in text-lg leading-6 tracking-[-0.27px] duration-200 motion-reduce:animate-none">
					{char}
				</span>
			)}
			{!char && hasFakeCaret && (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="h-4 w-[2px] animate-caret-blink rounded-sm bg-foreground" />
				</div>
			)}
		</div>
	);
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="input-otp-separator"
			className="h-[2px] w-[6px] shrink-0 rounded-sm bg-border"
			role="separator"
			{...props}
		/>
	);
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
