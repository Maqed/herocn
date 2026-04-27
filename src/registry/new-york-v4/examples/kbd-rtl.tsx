"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Kbd, KbdGroup } from "@/registry/new-york-v4/ui/kbd";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			hint: "Common shortcuts",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			hint: "اختصارات شائعة",
		},
	},
	he: {
		dir: "rtl",
		values: {
			hint: "קיצורי דרך נפוצים",
		},
	},
};

export function KbdRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div className="flex flex-col items-center gap-4" lang={language} dir={dir}>
			<p className="text-muted-foreground text-sm">{t.hint}</p>
			<KbdGroup>
				<Kbd>⌘</Kbd>
				<Kbd>⇧</Kbd>
				<Kbd>⌥</Kbd>
				<Kbd>⌃</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<span className="text-muted-foreground text-sm">+</span>
				<Kbd>B</Kbd>
			</KbdGroup>
		</div>
	);
}
