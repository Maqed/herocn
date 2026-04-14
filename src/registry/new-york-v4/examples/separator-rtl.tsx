"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Separator } from "@/registry/new-york-v4/ui/separator";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			title: "herocn",
			subtitle: "HeroUI design system, shadcn/ui abstraction",
			description: "Beautifully designed components for your next application.",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			title: "herocn",
			subtitle: "نظام تصميم HeroUI، تجريد shadcn/ui",
			description: "مكونات مصممة بشكل جميل لتطبيقك القادم.",
		},
	},
	he: {
		dir: "rtl",
		values: {
			title: "herocn",
			subtitle: "מערכת עיצוב HeroUI, הפשטה של shadcn/ui",
			description: "רכיבים מעוצבים בצורה יפה לאפליקציה הבאה שלך.",
		},
	},
};

export default function SeparatorRtl() {
	const { dir, t } = useTranslation(translations, "ar");

	return (
		<div className="flex max-w-sm flex-col gap-4 text-sm" dir={dir}>
			<div className="flex flex-col gap-1.5">
				<div className="font-medium leading-none">{t.title}</div>
				<div className="text-muted-foreground">{t.subtitle}</div>
			</div>
			<Separator />
			<div>{t.description}</div>
		</div>
	);
}
