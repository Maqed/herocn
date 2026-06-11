"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/registry/new-york-v4/ui/carousel";
import { Surface } from "@/registry/new-york-v4/ui/surface";

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

function toArabicNumerals(num: number): string {
	const arabicNumerals = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
	return num
		.toString()
		.split("")
		.map((digit) => arabicNumerals[Number.parseInt(digit, 10)])
		.join("");
}

export default function CarouselRtl() {
	const { dir, language } = useTranslation(translations, "ar");

	const formatNumber = (num: number): string => {
		if (language === "ar") {
			return toArabicNumerals(num);
		}
		return num.toString();
	};

	return (
		<Carousel
			dir={dir}
			className="w-full sm:max-w-xs"
			opts={{
				direction: dir,
			}}
		>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index}>
						<div className="p-1">
							<Surface className="flex aspect-square items-center justify-center rounded-3xl p-6">
								<span className="font-semibold text-4xl">
									{formatNumber(index + 1)}
								</span>
							</Surface>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
