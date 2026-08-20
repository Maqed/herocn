"use client";

import { ArrowRightIcon, PlusIcon } from "lucide-react";
import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Spinner } from "@/registry/new-york-v4/ui/spinner";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			button: "Button",
			submit: "Submit",
			delete: "Delete",
			loading: "Loading",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			button: "زر",
			submit: "إرسال",
			delete: "حذف",
			loading: "جاري التحميل",
		},
	},
	he: {
		dir: "rtl",
		values: {
			button: "כפתור",
			submit: "שלח",
			delete: "מחק",
			loading: "טוען",
		},
	},
};

export function ButtonRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div
			className="flex flex-wrap items-center gap-2 md:flex-row"
			lang={language}
			dir={dir}
		>
			<Button variant="secondary">{t.button}</Button>
			<Button variant="destructive">{t.delete}</Button>
			<Button variant="secondary">
				{t.submit}
				<ArrowRightIcon className="rtl:rotate-180" data-icon="inline-end" />
			</Button>
			<Button variant="secondary" size="icon" aria-label="Add">
				<PlusIcon />
			</Button>
			<Button variant="tertiary" disabled>
				<Spinner data-icon="inline-start" /> {t.loading}
			</Button>
		</div>
	);
}
