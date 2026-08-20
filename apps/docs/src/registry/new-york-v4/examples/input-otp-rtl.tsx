"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/registry/new-york-v4/ui/input-otp";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			verificationCode: "Verification code",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			verificationCode: "رمز التحقق",
		},
	},
	he: {
		dir: "rtl",
		values: {
			verificationCode: "קוד אימות",
		},
	},
};

export default function InputOTPRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir}>
			<Field className="mx-auto max-w-xs">
				<FieldLabel htmlFor="input-otp-rtl">{t.verificationCode}</FieldLabel>
				<div dir="ltr">
					<InputOTP maxLength={6} defaultValue="123456" id="input-otp-rtl">
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
				</div>
			</Field>
		</div>
	);
}
