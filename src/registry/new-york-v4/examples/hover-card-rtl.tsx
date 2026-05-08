"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/registry/new-york-v4/ui/hover-card";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			content: "The React Framework – created and maintained by @vercel.",
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
			content: "إطار عمل React - تم إنشاؤه وصيانته بواسطة @vercel.",
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
			content: "React Framework - נוצר ומתוחזק על ידי @vercel.",
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

export default function HoverCardRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir} className="grid gap-4">
			<div className="flex flex-wrap justify-center gap-2">
				{physicalSides.map((side) => (
					<HoverCard key={side}>
						<HoverCardTrigger
							delay={10}
							closeDelay={100}
							render={<Button variant="tertiary" />}
						>
							{t[side]}
						</HoverCardTrigger>
						<HoverCardContent side={side} dir={dir} className="w-64">
							<div className="font-semibold">@nextjs</div>
							<div className="text-muted-foreground text-sm">{t.content}</div>
						</HoverCardContent>
					</HoverCard>
				))}
			</div>
			<div className="flex flex-wrap justify-center gap-2">
				{logicalSides.map((side) => (
					<HoverCard key={side}>
						<HoverCardTrigger
							delay={10}
							closeDelay={100}
							render={<Button variant="tertiary" />}
						>
							{t[side]}
						</HoverCardTrigger>
						<HoverCardContent side={side} dir={dir} className="w-64">
							<div className="font-semibold">@nextjs</div>
							<div className="text-muted-foreground text-sm">{t.content}</div>
						</HoverCardContent>
					</HoverCard>
				))}
			</div>
		</div>
	);
}
