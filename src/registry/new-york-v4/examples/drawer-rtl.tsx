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
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			open: "Edit Profile",
			editProfile: "Edit profile",
			description:
				"Make changes to your profile here. Click save when you're done.",
			email: "Email",
			username: "Username",
			save: "Save changes",
			cancel: "Cancel",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			open: "تعديل الملف الشخصي",
			editProfile: "تعديل الملف الشخصي",
			description:
				"قم بإجراء تغييرات على ملفك الشخصي هنا. انقر حفظ عند الانتهاء.",
			email: "البريد الإلكتروني",
			username: "اسم المستخدم",
			save: "حفظ التغييرات",
			cancel: "إلغاء",
		},
	},
	he: {
		dir: "rtl",
		values: {
			open: "עריכת פרופיל",
			editProfile: "עריכת פרופיל",
			description: "בצע שינויים בפרופיל שלך כאן. לחץ שמור כשתסיים.",
			email: "אימייל",
			username: "שם משתמש",
			save: "שמור שינויים",
			cancel: "ביטול",
		},
	},
};

export default function DrawerRtl() {
	const { dir, t, language } = useTranslation(translations, "ar");

	return (
		<Drawer
			swipeDirection={dir === "rtl" ? "down" : "right"}
			data-lang={dir === "rtl" ? language : undefined}
		>
			<DrawerTrigger
				data-lang={language}
				render={<Button variant="secondary">{t.open}</Button>}
			/>
			<DrawerContent dir={dir}>
				<DrawerHeader>
					<DrawerTitle>{t.editProfile}</DrawerTitle>
					<DrawerDescription>{t.description}</DrawerDescription>
				</DrawerHeader>
				<FieldGroup className="px-4">
					<Field>
						<FieldLabel htmlFor="drawer-rtl-email">{t.email}</FieldLabel>
						<Input
							variant="secondary"
							id="drawer-rtl-email"
							type="email"
							defaultValue="Maqed@example.com"
						/>
					</Field>
					<Field>
						<FieldLabel htmlFor="drawer-rtl-username">{t.username}</FieldLabel>
						<Input
							variant="secondary"
							id="drawer-rtl-username"
							defaultValue="@0xMaqed"
						/>
					</Field>
				</FieldGroup>
				<DrawerFooter>
					<Button type="submit">{t.save}</Button>
					<DrawerClose render={<Button variant="secondary" />}>
						{t.cancel}
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
