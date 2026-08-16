"use client";

import * as React from "react";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import { Badge } from "@/registry/new-york-v4/ui/badge";
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
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
	FieldTitle,
} from "@/registry/new-york-v4/ui/field";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group";
import { toast } from "@/registry/new-york-v4/ui/toast";
import { useIsMobile } from "../hooks/use-mobile";

const deliveryTimes = [
	{
		value: "asap",
		id: "delivery-rtl-asap",
		badge: "Fastest",
		en: {
			label: "Standard delivery",
			description: "25–35 min · Driver assigned now",
		},
		ar: {
			label: "توصيل عادي",
			description: "25–35 دقيقة · تم تعيين السائق الآن",
		},
		he: { label: "משלוח רגיל", description: "25–35 דקות · הנהג שובץ כעת" },
	},
	{
		value: "5-00",
		id: "delivery-rtl-5-00",
		en: { label: "5:00 PM – 5:15 PM", description: "Prep starts at 4:45 PM" },
		ar: { label: "5:00 م – 5:15 م", description: "يبدأ التحضير الساعة 4:45 م" },
		he: { label: "17:00 – 17:15", description: "ההכנה מתחילה ב-16:45" },
	},
	{
		value: "5-30",
		id: "delivery-rtl-5-30",
		en: {
			label: "5:30 PM – 5:45 PM",
			description: "Good if you're heading home",
		},
		ar: {
			label: "5:30 م – 5:45 م",
			description: "مناسب إذا كنت عائد إلى المنزل",
		},
		he: { label: "17:30 – 17:45", description: "מתאים אם אתה בדרך הביתה" },
	},
	{
		value: "6-00",
		id: "delivery-rtl-6-00",
		en: {
			label: "6:00 PM – 6:15 PM",
			description: "Most popular · High demand",
		},
		ar: { label: "6:00 م – 6:15 م", description: "الأكثر شعبية · الطلب مرتفع" },
		he: { label: "18:00 – 18:15", description: "הכי פופולרי · ביקוש גבוה" },
	},
	{
		value: "6-30",
		id: "delivery-rtl-6-30",
		en: {
			label: "6:30 PM – 6:45 PM",
			description: "Last slot before kitchen closes",
		},
		ar: { label: "6:30 م – 6:45 م", description: "آخر موعد قبل إغلاق المطبخ" },
		he: {
			label: "18:30 – 18:45",
			description: "ה SLOT האחרון לפני סגירת המטבח",
		},
	},
];

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			open: "Open Drawer",
			title: "Pick a delivery time",
			description: "We'll prepare your order as soon as possible.",
			confirm: "Confirm Delivery Time",
			cancel: "Cancel",
			toastTitle: "Delivery time confirmed",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			open: "فتح الدرج",
			title: "اختر وقت التوصيل",
			description: "سنحضر طلبك في أسرع وقت ممكن.",
			confirm: "تأكيد وقت التوصيل",
			cancel: "إلغاء",
			toastTitle: "تم تأكيد وقت التوصيل",
		},
	},
	he: {
		dir: "rtl",
		values: {
			open: "פתח מגירה",
			title: "בחר זמן משלוח",
			description: "נכין את ההזמנה שלך בהקדם האפשרי.",
			confirm: "אשר זמן משלוח",
			cancel: "ביטול",
			toastTitle: "זמן המשלוח אושר",
		},
	},
};

export default function DrawerRtl() {
	const { dir, t, language } = useTranslation(translations, "ar");
	const [open, setOpen] = React.useState(false);
	const isMobile = useIsMobile();
	const [deliveryTime, setDeliveryTime] = React.useState("asap");

	function handleConfirm() {
		const selected = deliveryTimes.find((time) => time.value === deliveryTime);

		if (!selected) {
			return;
		}

		setOpen(false);
		toast.add({
			title: t.toastTitle,
			description: selected[language]?.label ?? selected.en.label,
		});
	}

	return (
		<Drawer
			open={open}
			onOpenChange={setOpen}
			swipeDirection={isMobile ? "down" : dir === "rtl" ? "left" : "right"}
			data-lang={dir === "rtl" ? language : undefined}
		>
			<DrawerTrigger
				data-lang={language}
				render={<Button variant="secondary" />}
			>
				{t.open}
			</DrawerTrigger>
			<DrawerContent dir={dir}>
				<DrawerHeader>
					<DrawerTitle>{t.title}</DrawerTitle>
					<DrawerDescription>{t.description}</DrawerDescription>
				</DrawerHeader>
				<div className="scroll-fade flex-1 overflow-y-auto p-4">
					<RadioGroup
						variant="secondary"
						value={deliveryTime}
						onValueChange={setDeliveryTime}
						className="gap-2"
					>
						{deliveryTimes.map((time) => (
							<FieldLabel key={time.value} htmlFor={time.id}>
								<Field orientation="horizontal">
									<FieldContent>
										<FieldTitle className="flex items-center gap-2">
											{time[language]?.label ?? time.en.label}
											{time.badge ? (
												<Badge variant="primary">{time.badge}</Badge>
											) : null}
										</FieldTitle>
										<FieldDescription>
											{time[language]?.description ?? time.en.description}
										</FieldDescription>
									</FieldContent>
									<RadioGroupItem value={time.value} id={time.id} />
								</Field>
							</FieldLabel>
						))}
					</RadioGroup>
				</div>
				<DrawerFooter>
					<Button onClick={handleConfirm} className="h-[34px]">
						{t.confirm}
					</Button>
					<DrawerClose render={<Button variant="secondary" />}>
						{t.cancel}
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
