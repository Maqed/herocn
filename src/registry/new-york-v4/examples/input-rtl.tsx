"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Field,
	FieldDescription,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			nameLabel: "Full name",
			namePlaceholder: "John Doe",
			emailLabel: "Email address",
			emailPlaceholder: "you@example.com",
			emailDescription: "We'll never share your email with anyone.",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			nameLabel: "الاسم الكامل",
			namePlaceholder: "محمد علي",
			emailLabel: "البريد الإلكتروني",
			emailPlaceholder: "you@example.com",
			emailDescription: "لن نشارك بريدك الإلكتروني مع أي شخص.",
		},
	},
	he: {
		dir: "rtl",
		values: {
			nameLabel: "שם מלא",
			namePlaceholder: "ישראל ישראלי",
			emailLabel: "כתובת דוא״ל",
			emailPlaceholder: "you@example.com",
			emailDescription: "לעולם לא נשתף את הדוא״ל שלך עם אחרים.",
		},
	},
};

export function InputRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div
			className="flex w-full max-w-sm flex-col gap-4"
			lang={language}
			dir={dir}
		>
			<Field>
				<FieldLabel htmlFor="form-input-rtl-name">{t.nameLabel}</FieldLabel>
				<Input
					type="text"
					id="form-input-rtl-name"
					placeholder={t.namePlaceholder}
				/>
			</Field>
			<Field>
				<FieldLabel htmlFor="form-input-rtl-email">{t.emailLabel}</FieldLabel>
				<Input
					type="email"
					id="form-input-rtl-email"
					placeholder={t.emailPlaceholder}
				/>
				<FieldDescription>{t.emailDescription}</FieldDescription>
			</Field>
		</div>
	);
}
