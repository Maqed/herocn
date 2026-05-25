"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { AspectRatio } from "@/registry/new-york-v4/ui/aspect-ratio";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			caption: "Beautiful landscape",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			caption: "منظر طبيعي جميل",
		},
	},
	he: {
		dir: "rtl",
		values: {
			caption: "נוף יפה",
		},
	},
};

export default function AspectRatioRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<figure className="w-full max-w-sm" lang={language} dir={dir}>
			<AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
				<img
					src="https://avatar.vercel.sh/shadcn1"
					alt="Landscape"
					className="size-full rounded-lg object-cover"
				/>
			</AspectRatio>
			<figcaption className="mt-2 text-center text-muted-foreground text-sm">
				{t.caption}
			</figcaption>
		</figure>
	);
}
