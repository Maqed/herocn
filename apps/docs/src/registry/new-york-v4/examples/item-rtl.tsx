"use client";

import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react";
import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			basicItem: "Basic Item",
			basicItemDesc: "A simple item with title and description.",
			action: "Action",
			verifiedTitle: "Your profile has been verified.",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			basicItem: "عنصر أساسي",
			basicItemDesc: "عنصر بسيط يحتوي على عنوان ووصف.",
			action: "إجراء",
			verifiedTitle: "تم التحقق من ملفك الشخصي.",
		},
	},
	he: {
		dir: "rtl",
		values: {
			basicItem: "פריט בסיסי",
			basicItemDesc: "פריט פשוט עם כותרת ותיאור.",
			action: "פעולה",
			verifiedTitle: "הפרופיל שלך אומת.",
		},
	},
};

export default function ItemRtl() {
	const { dir, t, language } = useTranslation(translations, "ar");

	return (
		<div
			className="flex w-full max-w-md flex-col gap-6"
			lang={language}
			dir={dir}
		>
			<Item variant="outline">
				<ItemContent>
					<ItemTitle>{t.basicItem}</ItemTitle>
					<ItemDescription>{t.basicItemDesc}</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button variant="outline" size="sm">
						{t.action}
					</Button>
				</ItemActions>
			</Item>
			<Item
				variant="outline"
				size="sm"
				render={<a href="#" aria-label={t.verifiedTitle} />}
			>
				<ItemMedia>
					<BadgeCheckIcon className="size-5" />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>{t.verifiedTitle}</ItemTitle>
				</ItemContent>
				<ItemActions>
					<ChevronRightIcon className="size-4 rtl:rotate-180" />
				</ItemActions>
			</Item>
		</div>
	);
}
