"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Label } from "@/registry/new-york-v4/ui/label";
import { Switch } from "@/registry/new-york-v4/ui/switch";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			label: "Enable notifications",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			label: "تفعيل الإشعارات",
		},
	},
	he: {
		dir: "rtl",
		values: {
			label: "הפעל התראות",
		},
	},
};

export function LabelRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div className="flex items-center gap-2" lang={language} dir={dir}>
			<Switch id="label-rtl-switch" />
			<Label htmlFor="label-rtl-switch">{t.label}</Label>
		</div>
	);
}
