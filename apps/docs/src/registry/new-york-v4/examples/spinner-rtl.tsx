"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Spinner } from "@/registry/new-york-v4/ui/spinner";
import { Surface } from "@/registry/new-york-v4/ui/surface";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			title: "Processing payment...",
			amount: "$100.00",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			title: "جاري معالجة الدفع...",
			amount: "١٠٠.٠٠ دولار",
		},
	},
	he: {
		dir: "rtl",
		values: {
			title: "מעבד תשלום...",
			amount: "$100.00",
		},
	},
};

export function SpinnerRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<Surface
			className="flex w-full max-w-sm items-center gap-3 rounded-3xl p-6"
			lang={language}
			dir={dir}
		>
			<Spinner />
			<div className="flex min-w-0 flex-1 flex-col">
				<span className="truncate font-medium text-sm">{t.title}</span>
			</div>
			<span className="text-sm tabular-nums">{t.amount}</span>
		</Surface>
	);
}
