"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {},
	},
	ar: {
		dir: "rtl",
		values: {},
	},
	he: {
		dir: "rtl",
		values: {},
	},
};

export default function SkeletonRtl() {
	const { dir, language } = useTranslation(translations, "ar");

	return (
		<div className="flex items-center gap-4" dir={dir} lang={language}>
			<Skeleton className="size-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	);
}
