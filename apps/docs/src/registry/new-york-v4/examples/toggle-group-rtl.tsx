"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			list: "List",
			grid: "Grid",
			cards: "Cards",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			list: "قائمة",
			grid: "شبكة",
			cards: "بطاقات",
		},
	},
	he: {
		dir: "rtl",
		values: {
			list: "רשימה",
			grid: "רשת",
			cards: "כרטיסים",
		},
	},
};

export function ToggleGroupRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir}>
			<ToggleGroup defaultValue={["list"]} dir={dir}>
				<ToggleGroupItem value="list" aria-label={t.list}>
					{t.list}
				</ToggleGroupItem>
				<ToggleGroupItem value="grid" aria-label={t.grid}>
					{t.grid}
				</ToggleGroupItem>
				<ToggleGroupItem value="cards" aria-label={t.cards}>
					{t.cards}
				</ToggleGroupItem>
			</ToggleGroup>
		</div>
	);
}
