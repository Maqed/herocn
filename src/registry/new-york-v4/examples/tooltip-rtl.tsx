"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			content: "Add to library",
			"inline-start": "Inline Start",
			left: "Left",
			top: "Top",
			bottom: "Bottom",
			right: "Right",
			"inline-end": "Inline End",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			content: "إضافة إلى المكتبة",
			"inline-start": "بداية السطر",
			left: "يسار",
			top: "أعلى",
			bottom: "أسفل",
			right: "يمين",
			"inline-end": "نهاية السطر",
		},
	},
	he: {
		dir: "rtl",
		values: {
			content: "הוסף לספרייה",
			"inline-start": "תחילת השורה",
			left: "שמאל",
			top: "למעלה",
			bottom: "למטה",
			right: "ימין",
			"inline-end": "סוף השורה",
		},
	},
};

const physicalSides = ["left", "top", "bottom", "right"] as const;
const logicalSides = ["inline-start", "inline-end"] as const;

export default function TooltipRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir} className="grid gap-4">
			<div className="flex flex-wrap justify-center gap-2">
				{physicalSides.map((side) => (
					<Tooltip key={side}>
						<TooltipTrigger render={<Button variant="outline" />}>
							{t[side]}
						</TooltipTrigger>
						<TooltipContent side={side} dir={dir}>
							{t.content}
						</TooltipContent>
					</Tooltip>
				))}
			</div>
			<div className="flex flex-wrap justify-center gap-2">
				{logicalSides.map((side) => (
					<Tooltip key={side}>
						<TooltipTrigger render={<Button variant="outline" />}>
							{t[side]}
						</TooltipTrigger>
						<TooltipContent side={side} dir={dir}>
							{t.content}
						</TooltipContent>
					</Tooltip>
				))}
			</div>
		</div>
	);
}
