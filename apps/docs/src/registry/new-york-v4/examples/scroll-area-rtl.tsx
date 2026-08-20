"use client";

import * as React from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { ScrollArea } from "@/registry/new-york-v4/ui/scroll-area";
import { Separator } from "@/registry/new-york-v4/ui/separator";

const tags = Array.from({ length: 50 }).map(
	(_, i, array) => `v1.2.0-beta.${array.length - i}`,
);

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			title: "Tags",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			title: "العلامات",
		},
	},
	he: {
		dir: "rtl",
		values: {
			title: "תגיות",
		},
	},
};

export function ScrollAreaRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir}>
			<ScrollArea className="h-72 w-48 rounded-md border">
				<div className="p-4">
					<h4 className="mb-4 font-medium text-sm leading-none">{t.title}</h4>
					{tags.map((tag) => (
						<React.Fragment key={tag}>
							<div className="text-sm">{tag}</div>
							<Separator className="my-2" />
						</React.Fragment>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
