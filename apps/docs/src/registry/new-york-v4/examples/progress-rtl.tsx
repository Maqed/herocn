"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/registry/new-york-v4/ui/progress";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			label: "Upload progress",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			label: "تقدم الرفع",
		},
	},
	he: {
		dir: "rtl",
		values: {
			label: "התקדמות העלאה",
		},
	},
};

function toArabicNumerals(num: number): string {
	const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
	return num
		.toString()
		.split("")
		.map((digit) => arabicNumerals[Number.parseInt(digit, 10)] ?? digit)
		.join("");
}

export default function ProgressRtl() {
	const { dir, t, language } = useTranslation(translations, "ar");

	const formatNumber = (num: number): string => {
		if (language === "ar") {
			return toArabicNumerals(num);
		}
		return num.toString();
	};

	return (
		<div className="w-full max-w-sm" lang={language} dir={dir}>
			<Progress value={56} className="w-full">
				<ProgressLabel>{t.label}</ProgressLabel>
				<ProgressValue>
					{(_formatted, value) => (
						<span className="ms-auto">{formatNumber(value ?? 0)}%</span>
					)}
				</ProgressValue>
			</Progress>
		</div>
	);
}
