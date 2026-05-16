"use client";

import * as React from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	NativeSelect,
	NativeSelectOption,
} from "@/registry/new-york-v4/ui/native-select";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			placeholder: "Select status",
			todo: "Todo",
			inProgress: "In Progress",
			done: "Done",
			cancelled: "Cancelled",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			placeholder: "اختر الحالة",
			todo: "مهام",
			inProgress: "قيد التنفيذ",
			done: "منجز",
			cancelled: "ملغي",
		},
	},
	he: {
		dir: "rtl",
		values: {
			placeholder: "בחר סטטוס",
			todo: "לעשות",
			inProgress: "בתהליך",
			done: "הושלם",
			cancelled: "בוטל",
		},
	},
};

export function NativeSelectRtl() {
	const { dir, t, language } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir}>
			<NativeSelect>
				<NativeSelectOption value="">{t.placeholder}</NativeSelectOption>
				<NativeSelectOption value="todo">{t.todo}</NativeSelectOption>
				<NativeSelectOption value="in-progress">
					{t.inProgress}
				</NativeSelectOption>
				<NativeSelectOption value="done">{t.done}</NativeSelectOption>
				<NativeSelectOption value="cancelled">{t.cancelled}</NativeSelectOption>
			</NativeSelect>
		</div>
	);
}
