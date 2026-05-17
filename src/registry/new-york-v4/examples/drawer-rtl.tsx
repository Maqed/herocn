"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer";
import { Field, FieldGroup } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			openDrawer: "Open Drawer",
			editProfile: "Edit profile",
			description:
				"Make changes to your profile here. Click save when you're done.",
			name: "Name",
			username: "Username",
			cancel: "Cancel",
			saveChanges: "Save changes",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			openDrawer: "فتح الدرج",
			editProfile: "تعديل الملف الشخصي",
			description:
				"قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.",
			name: "الاسم",
			username: "اسم المستخدم",
			cancel: "إلغاء",
			saveChanges: "حفظ التغييرات",
		},
	},
	he: {
		dir: "rtl",
		values: {
			openDrawer: "פתח מגירה",
			editProfile: "ערוך פרופיל",
			description: "בצע שינויים בפרופיל שלך כאן. לחץ על שמור כשתסיים.",
			name: "שם",
			username: "שם משתמש",
			cancel: "בטל",
			saveChanges: "שמור שינויים",
		},
	},
};

export function DrawerRtl() {
	const { dir, language, t } = useTranslation(translations, "ar");

	return (
		<div lang={language} dir={dir}>
			<Drawer>
				<DrawerTrigger asChild>
					<Button variant="tertiary">{t.openDrawer}</Button>
				</DrawerTrigger>
				<DrawerContent
					dir={dir}
					data-lang={dir === "rtl" ? language : undefined}
				>
					<DrawerHeader>
						<DrawerTitle>{t.editProfile}</DrawerTitle>
						<DrawerDescription>{t.description}</DrawerDescription>
					</DrawerHeader>
					<FieldGroup className="px-4">
						<Field>
							<Label htmlFor="drawer-rtl-name">{t.name}</Label>
							<Input
								variant="secondary"
								id="drawer-rtl-name"
								defaultValue="Maged Ibrahim"
							/>
						</Field>
						<Field>
							<Label htmlFor="drawer-rtl-username">{t.username}</Label>
							<Input
								variant="secondary"
								id="drawer-rtl-username"
								defaultValue="@0xMaqed"
							/>
						</Field>
					</FieldGroup>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="tertiary">{t.cancel}</Button>
						</DrawerClose>
						<Button type="submit">{t.saveChanges}</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
