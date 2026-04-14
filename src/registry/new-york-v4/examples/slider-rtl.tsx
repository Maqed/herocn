"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Slider } from "@/registry/new-york-v4/ui/slider";

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

export default function SliderRtl() {
	const { dir } = useTranslation(translations, "ar");

	return (
		<Slider
			defaultValue={[75]}
			max={100}
			step={1}
			className="mx-auto w-full max-w-xs"
			dir={dir}
		/>
	);
}
