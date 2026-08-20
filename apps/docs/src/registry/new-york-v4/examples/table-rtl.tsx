"use client";

import {
	type Translations,
	useTranslation,
} from "@/components/language-selector";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/registry/new-york-v4/ui/table";

const translations: Translations = {
	en: {
		dir: "ltr",
		values: {
			invoice: "Invoice",
			status: "Status",
			method: "Method",
			amount: "Amount",
			paid: "Paid",
			pending: "Pending",
			unpaid: "Unpaid",
			creditCard: "Credit Card",
			paypal: "PayPal",
			bankTransfer: "Bank Transfer",
		},
	},
	ar: {
		dir: "rtl",
		values: {
			invoice: "الفاتورة",
			status: "الحالة",
			method: "الطريقة",
			amount: "المبلغ",
			paid: "مدفوع",
			pending: "قيد الانتظار",
			unpaid: "غير مدفوع",
			creditCard: "بطاقة ائتمانية",
			paypal: "PayPal",
			bankTransfer: "تحويل بنكي",
		},
	},
	he: {
		dir: "rtl",
		values: {
			invoice: "חשבונית",
			status: "סטטוס",
			method: "שיטה",
			amount: "סכום",
			paid: "שולם",
			pending: "ממתין",
			unpaid: "לא שולם",
			creditCard: "כרטיס אשראי",
			paypal: "PayPal",
			bankTransfer: "העברה בנקאית",
		},
	},
};

const invoices = [
	{
		invoice: "INV001",
		paymentStatus: "paid" as const,
		totalAmount: "$250.00",
		paymentMethod: "creditCard" as const,
	},
	{
		invoice: "INV002",
		paymentStatus: "pending" as const,
		totalAmount: "$150.00",
		paymentMethod: "paypal" as const,
	},
	{
		invoice: "INV003",
		paymentStatus: "unpaid" as const,
		totalAmount: "$350.00",
		paymentMethod: "bankTransfer" as const,
	},
	{
		invoice: "INV004",
		paymentStatus: "paid" as const,
		totalAmount: "$450.00",
		paymentMethod: "creditCard" as const,
	},
	{
		invoice: "INV005",
		paymentStatus: "paid" as const,
		totalAmount: "$550.00",
		paymentMethod: "paypal" as const,
	},
	{
		invoice: "INV006",
		paymentStatus: "pending" as const,
		totalAmount: "$200.00",
		paymentMethod: "bankTransfer" as const,
	},
	{
		invoice: "INV007",
		paymentStatus: "unpaid" as const,
		totalAmount: "$300.00",
		paymentMethod: "creditCard" as const,
	},
];

export default function TableRtl() {
	const { dir, t } = useTranslation(translations, "ar");

	return (
		<Table dir={dir}>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px]">{t.invoice}</TableHead>
					<TableHead>{t.status}</TableHead>
					<TableHead>{t.method}</TableHead>
					<TableHead className="text-right">{t.amount}</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.invoice}>
						<TableCell className="font-medium">{invoice.invoice}</TableCell>
						<TableCell>{t[invoice.paymentStatus]}</TableCell>
						<TableCell>{t[invoice.paymentMethod]}</TableCell>
						<TableCell className="text-right">{invoice.totalAmount}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
