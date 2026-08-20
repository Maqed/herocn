"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/registry/new-york-v4/ui/sheet";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			open: "Open",
			editProfile: "Edit profile",
			description:
				"Make changes to your profile here. Click save when you're done.",
			name: "Name",
			username: "Username",
			save: "Save changes",
			close: "Close",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			open: "فتح",
			editProfile: "تعديل الملف الشخصي",
			description:
				"قم بإجراء تغييرات على ملفك الشخصي هنا. انقر حفظ عند الانتهاء.",
			name: "الاسم",
			username: "اسم المستخدم",
			save: "حفظ التغييرات",
			close: "إغلاق",
		},
	},
	he: {
		dir: "rtl",
		values: {
			open: "פתח",
			editProfile: "עריכת פרופיל",
			description: "בצע שינויים בפרופיל שלך כאן. לחץ שמור כשתסיים.",
			name: "שם",
			username: "שם משתמש",
			save: "שמור שינויים",
			close: "סגור",
		},
	},
};

export function SheetRtl() {
	const { dir, t, language } = useTranslation(translations, "ar");

	return (
		<Sheet>
			<SheetTrigger
				data-lang={language}
				render={<Button variant="tertiary">{t.open}</Button>}
			/>
			<SheetContent
				dir={dir}
				side={dir === "rtl" ? "left" : "right"}
				data-lang={dir === "rtl" ? language : undefined}
			>
				<SheetHeader>
					<SheetTitle>{t.editProfile}</SheetTitle>
					<SheetDescription>{t.description}</SheetDescription>
				</SheetHeader>
				<FieldGroup className="px-4">
					<Field>
						<FieldLabel htmlFor="sheet-rtl-name">{t.name}</FieldLabel>
						<Input
							variant="secondary"
							id="sheet-rtl-name"
							defaultValue="Maged Ibrahim"
						/>
					</Field>
					<Field>
						<FieldLabel htmlFor="sheet-rtl-username">{t.username}</FieldLabel>
						<Input
							variant="secondary"
							id="sheet-rtl-username"
							defaultValue="0xMaqed"
						/>
					</Field>
				</FieldGroup>
				<SheetFooter>
					<Button type="submit">{t.save}</Button>
					<SheetClose render={<Button variant="outline">{t.close}</Button>} />
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
