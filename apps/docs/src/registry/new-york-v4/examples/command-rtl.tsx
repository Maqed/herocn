"use client";
import {
	CalculatorIcon,
	CalendarIcon,
	CreditCardIcon,
	SettingsIcon,
	SmileIcon,
	UserIcon,
} from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/registry/new-york-v4/ui/command";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			placeholder: "Type a command or search...",
			empty: "No results found.",
			suggestions: "Suggestions",
			calendar: "Calendar",
			searchEmoji: "Search Emoji",
			calculator: "Calculator",
			settings: "Settings",
			profile: "Profile",
			billing: "Billing",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			placeholder: "اكتب أمرًا أو ابحث...",
			empty: "لم يتم العثور على نتائج.",
			suggestions: "اقتراحات",
			calendar: "التقويم",
			searchEmoji: "البحث عن الرموز التعبيرية",
			calculator: "الآلة الحاسبة",
			settings: "الإعدادات",
			profile: "الملف الشخصي",
			billing: "الفوترة",
		},
	},
	he: {
		dir: "rtl",
		values: {
			placeholder: "הקלד פקודה או חפש...",
			empty: "לא נמצאו תוצאות.",
			suggestions: "הצעות",
			calendar: "לוח שנה",
			searchEmoji: "חפש אמוג'י",
			calculator: "מחשבון",
			settings: "הגדרות",
			profile: "פרופיל",
			billing: "חיוב",
		},
	},
};

export default function CommandRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div className="w-full" lang={language} dir={dir}>
			<Command>
				<CommandInput placeholder={t.placeholder} />
				<CommandList>
					<CommandEmpty>{t.empty}</CommandEmpty>
					<CommandGroup heading={t.suggestions}>
						<CommandItem>
							<CalendarIcon />
							<span>{t.calendar}</span>
						</CommandItem>
						<CommandItem>
							<SmileIcon />
							<span>{t.searchEmoji}</span>
						</CommandItem>
						<CommandItem disabled>
							<CalculatorIcon />
							<span>{t.calculator}</span>
						</CommandItem>
					</CommandGroup>
					<CommandSeparator />
					<CommandGroup heading={t.settings}>
						<CommandItem>
							<UserIcon />
							<span>{t.profile}</span>
							<CommandShortcut>⌘P</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<CreditCardIcon />
							<span>{t.billing}</span>
							<CommandShortcut>⌘B</CommandShortcut>
						</CommandItem>
						<CommandItem>
							<SettingsIcon />
							<span>{t.settings}</span>
							<CommandShortcut>⌘S</CommandShortcut>
						</CommandItem>
					</CommandGroup>
				</CommandList>
			</Command>
		</div>
	);
}
