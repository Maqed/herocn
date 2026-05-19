"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldTitle,
} from "@/registry/new-york-v4/ui/field";
import { Label } from "@/registry/new-york-v4/ui/label";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			acceptTerms: "Accept terms and conditions",
			acceptTermsDescription:
				"By clicking this checkbox, you agree to the terms.",
			enableNotifications: "Enable notifications",
			enableNotificationsDescription:
				"You can enable or disable notifications at any time.",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			acceptTerms: "قبول الشروط والأحكام",
			acceptTermsDescription: "بالنقر على هذا المربع، فإنك توافق على الشروط.",
			enableNotifications: "تفعيل الإشعارات",
			enableNotificationsDescription:
				"يمكنك تفعيل أو إلغاء تفعيل الإشعارات في أي وقت.",
		},
	},
	he: {
		dir: "rtl",
		values: {
			acceptTerms: "קבל תנאים והגבלות",
			acceptTermsDescription:
				"על ידי לחיצה על תיבת הסימון הזו, אתה מסכים לתנאים.",
			enableNotifications: "הפעל התראות",
			enableNotificationsDescription:
				"אתה יכול להפעיל או להשבית התראות בכל עת.",
		},
	},
};

export default function CheckboxRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<FieldGroup lang={language} dir={dir} className="w-full">
			<Field orientation="horizontal">
				<Checkbox id="checkbox-rtl-terms" name="checkbox-rtl-terms" />
				<Label htmlFor="checkbox-rtl-terms">{t.acceptTerms}</Label>
			</Field>
			<Field orientation="horizontal">
				<Checkbox
					id="checkbox-rtl-terms-2"
					name="checkbox-rtl-terms-2"
					defaultChecked
				/>
				<FieldContent>
					<FieldLabel htmlFor="checkbox-rtl-terms-2">
						{t.acceptTerms}
					</FieldLabel>
					<FieldDescription>{t.acceptTermsDescription}</FieldDescription>
				</FieldContent>
			</Field>
			<Field orientation="horizontal" data-disabled>
				<Checkbox
					id="checkbox-rtl-notify-off"
					name="checkbox-rtl-notify-off"
					disabled
				/>
				<FieldLabel htmlFor="checkbox-rtl-notify-off">
					{t.enableNotifications}
				</FieldLabel>
			</Field>
			<FieldLabel>
				<Field orientation="horizontal">
					<Checkbox
						variant="secondary"
						id="checkbox-rtl-notify-on"
						name="checkbox-rtl-notify-on"
					/>
					<FieldContent>
						<FieldTitle>{t.enableNotifications}</FieldTitle>
						<FieldDescription>
							{t.enableNotificationsDescription}
						</FieldDescription>
					</FieldContent>
				</Field>
			</FieldLabel>
		</FieldGroup>
	);
}
