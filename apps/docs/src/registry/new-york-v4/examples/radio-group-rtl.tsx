"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			default: "Default",
			defaultDescription: "Standard spacing for most use cases.",
			comfortable: "Comfortable",
			comfortableDescription: "More space between elements.",
			compact: "Compact",
			compactDescription: "Minimal spacing for dense layouts.",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			default: "افتراضي",
			defaultDescription: "تباعد قياسي لمعظم حالات الاستخدام.",
			comfortable: "مريح",
			comfortableDescription: "مساحة أكبر بين العناصر.",
			compact: "مضغوط",
			compactDescription: "تباعد أدنى للتخطيطات الكثيفة.",
		},
	},
	he: {
		dir: "rtl",
		values: {
			default: "ברירת מחדל",
			defaultDescription: "ריווח סטנדרטי לרוב מקרי השימוש.",
			comfortable: "נוח",
			comfortableDescription: "יותר מקום בין האלמנטים.",
			compact: "קומפקטי",
			compactDescription: "ריווח מינימלי לפריסות צפופות.",
		},
	},
};

export default function RadioGroupRtl() {
	const { language, dir, t } = useTranslation(translations, "ar");

	return (
		<FieldGroup lang={language} dir={dir} className="w-full">
			<RadioGroup defaultValue="comfortable" className="w-fit">
				<Field orientation="horizontal">
					<RadioGroupItem value="default" id="radio-rtl-r1" />
					<FieldContent>
						<FieldLabel htmlFor="radio-rtl-r1">{t.default}</FieldLabel>
						<FieldDescription>{t.defaultDescription}</FieldDescription>
					</FieldContent>
				</Field>
				<Field orientation="horizontal">
					<RadioGroupItem value="comfortable" id="radio-rtl-r2" />
					<FieldContent>
						<FieldLabel htmlFor="radio-rtl-r2">{t.comfortable}</FieldLabel>
						<FieldDescription>{t.comfortableDescription}</FieldDescription>
					</FieldContent>
				</Field>
				<Field orientation="horizontal">
					<RadioGroupItem value="compact" id="radio-rtl-r3" />
					<FieldContent>
						<FieldLabel htmlFor="radio-rtl-r3">{t.compact}</FieldLabel>
						<FieldDescription>{t.compactDescription}</FieldDescription>
					</FieldContent>
				</Field>
			</RadioGroup>
		</FieldGroup>
	);
}
