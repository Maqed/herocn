import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/registry/new-york-v4/ui/input-otp";

export default function InputOTPVariants() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<div className="space-y-2">
				<p className="text-muted-foreground text-sm">Default</p>
				<InputOTP maxLength={6} defaultValue="123456">
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
			</div>
			<div className="space-y-2">
				<p className="text-muted-foreground text-sm">Secondary</p>
				<InputOTP maxLength={6} defaultValue="123456" variant="secondary">
					<InputOTPGroup>
						<InputOTPSlot index={0} />
						<InputOTPSlot index={1} />
						<InputOTPSlot index={2} />
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						<InputOTPSlot index={3} />
						<InputOTPSlot index={4} />
						<InputOTPSlot index={5} />
					</InputOTPGroup>
				</InputOTP>
			</div>
		</div>
	);
}
