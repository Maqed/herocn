"use client";

import { ArrowUpRightIcon, FolderCode } from "lucide-react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/registry/new-york-v4/ui/empty";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			title: "No Projects Yet",
			description:
				"You haven't created any projects yet. Get started by creating your first project.",
			createProject: "Create Project",
			importProject: "Import Project",
			learnMore: "Learn More",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			title: "لا توجد مشاريع بعد",
			description: "لم تقم بإنشاء أي مشاريع بعد. ابدأ بإنشاء مشروعك الأول.",
			createProject: "إنشاء مشروع",
			importProject: "استيراد مشروع",
			learnMore: "تعرف على المزيد",
		},
	},
	he: {
		dir: "rtl",
		values: {
			title: "אין פרויקטים עדיין",
			description:
				"עדיין לא יצרת פרויקטים. התחל על ידי יצירת הפרויקט הראשון שלך.",
			createProject: "צור פרויקט",
			importProject: "ייבא פרויקט",
			learnMore: "למד עוד",
		},
	},
};

export function EmptyRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir}>
			<Empty>
				<EmptyHeader>
					<EmptyMedia variant="icon">
						<FolderCode />
					</EmptyMedia>
					<EmptyTitle>{t.title}</EmptyTitle>
					<EmptyDescription>{t.description}</EmptyDescription>
				</EmptyHeader>
				<EmptyContent className="flex-row justify-center gap-2">
					<Button>{t.createProject}</Button>
					<Button variant="outline">{t.importProject}</Button>
				</EmptyContent>
				<Button
					variant="link"
					render={<a href="#" />}
					className="text-muted-foreground"
					size="sm"
					nativeButton={false}
				>
					{t.learnMore}
					<ArrowUpRightIcon className="rtl:rotate-270" data-icon="inline-end" />
				</Button>
			</Empty>
		</div>
	);
}
