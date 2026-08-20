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
import { Textarea } from "@/registry/new-york-v4/ui/textarea";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			label: "Feedback",
			placeholder: "Your feedback helps us improve...",
			description: "Share your thoughts about our service.",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			label: "التعليقات",
			placeholder: "تعليقاتك تساعدنا على التحسين...",
			description: "شاركنا أفكارك حول خدمتنا.",
		},
	},
	he: {
		dir: "rtl",
		values: {
			label: "משוב",
			placeholder: "המשוב שלך עוזר לנו להשתפר...",
			description: "שתף את מחשבותיך על השירות שלנו.",
		},
	},
};

export function TextareaRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div className="w-full max-w-sm" lang={language} dir={dir}>
			<Field>
				<FieldLabel htmlFor="textarea-rtl-feedback">{t.label}</FieldLabel>
				<Textarea
					id="textarea-rtl-feedback"
					placeholder={t.placeholder}
					rows={4}
				/>
				<FieldDescription>{t.description}</FieldDescription>
			</Field>
		</div>
	);
}
