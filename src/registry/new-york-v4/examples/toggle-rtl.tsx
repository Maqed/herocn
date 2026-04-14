"use client";

import { BookmarkIcon } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Toggle } from "@/registry/new-york-v4/ui/toggle";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			label: "Bookmark",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			label: "إشارة مرجعية",
		},
	},
	he: {
		dir: "rtl",
		values: {
			label: "סימנייה",
		},
	},
};

export function ToggleRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir}>
			<Toggle aria-label="Toggle bookmark">
				<BookmarkIcon className="group-aria-pressed/toggle:fill-primary" />
				{t.label}
			</Toggle>
		</div>
	);
}
