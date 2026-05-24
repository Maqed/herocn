import { RefreshCwIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/registry/new-york-v4/ui/input-otp";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export function InputOTPDemo() {
	return (
		<Surface className="space-y-6 rounded-3xl p-6">
			<Field className="space-y-1">
				<div className="flex items-center justify-between">
					<FieldLabel htmlFor="otp-verification">Verification code</FieldLabel>
					<Button variant="outline" size="xs">
						<RefreshCwIcon />
						Resend Code
					</Button>
				</div>
				<div className="flex items-center justify-center">
					<InputOTP
						variant="secondary"
						className="flex items-center justify-center"
						maxLength={6}
						id="otp-verification"
						required
					>
						<InputOTPGroup className="*:data-[slot=input-otp-slot]:h-11 *:data-[slot=input-otp-slot]:w-10">
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
						</InputOTPGroup>
						<InputOTPSeparator className="mx-2" />
						<InputOTPGroup className="*:data-[slot=input-otp-slot]:h-11 *:data-[slot=input-otp-slot]:w-10">
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
				</div>
			</Field>
			<Field>
				<Button type="submit" className="w-full">
					Verify
				</Button>
			</Field>
		</Surface>
	);
}
