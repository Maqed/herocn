"use client";

import {
	CircleAlertIcon,
	CircleCheckIcon,
	CircleDashedIcon,
} from "lucide-react";
import Link from "next/link";
import type * as React from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/registry/new-york-v4/ui/navigation-menu";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			gettingStarted: "Getting started",
			introduction: "Introduction",
			introductionDesc: "Re-usable components built with Tailwind CSS.",
			installation: "Installation",
			installationDesc: "How to install dependencies and structure your app.",
			typography: "Typography",
			typographyDesc: "Styles for headings, paragraphs, lists...etc",
			withIcon: "With Icon",
			backlog: "Backlog",
			toDo: "To Do",
			done: "Done",
			docs: "Docs",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			gettingStarted: "البدء",
			introduction: "مقدمة",
			introductionDesc:
				"مكونات قابلة لإعادة الاستخدام مبنية باستخدام Tailwind CSS.",
			installation: "التثبيت",
			installationDesc: "كيفية تثبيت التبعيات وتنظيم تطبيقك.",
			typography: "الطباعة",
			typographyDesc: "أنماط للعناوين والفقرات والقوائم...إلخ",
			withIcon: "مع أيقونة",
			backlog: "قائمة الانتظار",
			toDo: "المهام",
			done: "منجز",
			docs: "الوثائق",
		},
	},
	he: {
		dir: "rtl",
		values: {
			gettingStarted: "התחלה",
			introduction: "הקדמה",
			introductionDesc: "רכיבים לשימוש חוזר שנבנו עם Tailwind CSS.",
			installation: "התקנה",
			installationDesc: "כיצד להתקין תלויות ולבנות את האפליקציה שלך.",
			typography: "טיפוגרפיה",
			typographyDesc: "סגנונות לכותרות, פסקאות, רשימות...וכו'",
			withIcon: "עם אייקון",
			backlog: "רשימת המתנה",
			toDo: "לעשות",
			done: "הושלם",
			docs: "תיעוד",
		},
	},
};

export default function NavigationMenuRtl() {
	const { dir, t, language } = useTranslation(translations, "ar");

	return (
		<NavigationMenu dir={dir} align={dir === "rtl" ? "end" : "start"}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{t.gettingStarted}</NavigationMenuTrigger>
					<NavigationMenuContent
						dir={dir}
						data-lang={dir === "rtl" ? language : undefined}
					>
						<ul className="w-96">
							<ListItem href="/docs" title={t.introduction}>
								{t.introductionDesc}
							</ListItem>
							<ListItem href="/docs/installation" title={t.installation}>
								{t.installationDesc}
							</ListItem>
							<ListItem href="/docs/components/typography" title={t.typography}>
								{t.typographyDesc}
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>{t.withIcon}</NavigationMenuTrigger>
					<NavigationMenuContent
						dir={dir}
						data-lang={dir === "rtl" ? language : undefined}
					>
						<ul className="grid w-[200px]">
							<li>
								<NavigationMenuLink
									className="flex-row items-center gap-2"
									render={<Link href="#" />}
								>
									<CircleAlertIcon />
									{t.backlog}
								</NavigationMenuLink>
								<NavigationMenuLink
									className="flex-row items-center gap-2"
									render={<Link href="#" />}
								>
									<CircleDashedIcon />
									{t.toDo}
								</NavigationMenuLink>
								<NavigationMenuLink
									className="flex-row items-center gap-2"
									render={<Link href="#" />}
								>
									<CircleCheckIcon />
									{t.done}
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						className={navigationMenuTriggerStyle()}
						data-lang={dir === "rtl" ? language : undefined}
						render={<Link href="/docs" />}
					>
						{t.docs}
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

function ListItem({
	title,
	children,
	href,
	...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
	return (
		<li {...props}>
			<NavigationMenuLink render={<Link href={href} />}>
				<div className="flex flex-col gap-1 text-sm">
					<div className="font-medium leading-none">{title}</div>
					<div className="line-clamp-2 text-muted-foreground">{children}</div>
				</div>
			</NavigationMenuLink>
		</li>
	);
}
