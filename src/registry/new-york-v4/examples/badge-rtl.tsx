"use client";

import {
	BellIcon,
	CheckCheckIcon,
	StarIcon,
	TriangleAlertIcon,
} from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Badge } from "@/registry/new-york-v4/ui/badge";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			new: "New",
			verified: "Verified",
			pending: "Pending",
			notifications: "Notifications",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			new: "جديد",
			verified: "موثق",
			pending: "قيد الانتظار",
			notifications: "الإشعارات",
		},
	},
	he: {
		dir: "rtl",
		values: {
			new: "חדש",
			verified: "מאומת",
			pending: "ממתין",
			notifications: "התראות",
		},
	},
};

export function BadgeRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div
			className="flex flex-wrap items-center gap-2"
			lang={language}
			dir={dir}
		>
			<Badge variant="primary">
				<StarIcon data-icon="inline-start" />
				{t.new}
			</Badge>
			<Badge variant="success">
				<CheckCheckIcon data-icon="inline-start" />
				{t.verified}
			</Badge>
			<Badge variant="warning">
				<TriangleAlertIcon data-icon="inline-start" />
				{t.pending}
			</Badge>
			<Badge>
				<BellIcon data-icon="inline-start" />
				{t.notifications}
			</Badge>
		</div>
	);
}
