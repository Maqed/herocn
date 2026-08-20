import { XIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/registry/new-york-v4/ui/input-group";
import { Item, ItemContent } from "@/registry/new-york-v4/ui/item";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/registry/new-york-v4/ui/select";
import { Separator } from "@/registry/new-york-v4/ui/separator";

const FROM_ACCOUNTS = [
	{ label: "Main Checking (··8402) — $12,450.00", value: "checking" },
	{ label: "Business (··7731) — $8,920.00", value: "business" },
];

const TO_ACCOUNTS = [
	{ label: "High Yield Savings (··1192) — $42,100.00", value: "savings" },
	{ label: "Investment (··3349) — $18,200.00", value: "investment" },
];

export function TransferFunds() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Transfer Funds</CardTitle>
				<CardDescription>
					Move money between your connected accounts.
				</CardDescription>
				<CardAction>
					<Button
						variant="ghost"
						size="icon-sm"
						className="bg-muted"
						aria-label="Dismiss transfer funds"
					>
						<XIcon strokeWidth={2} />
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="transfer-amount">
							Amount to Transfer
						</FieldLabel>
						<InputGroup variant="secondary">
							<InputGroupAddon>
								<InputGroupText>$</InputGroupText>
							</InputGroupAddon>
							<InputGroupInput id="transfer-amount" defaultValue="1,200.00" />
						</InputGroup>
					</Field>
					<Field>
						<FieldLabel htmlFor="from-account">From Account</FieldLabel>
						<Select
							items={FROM_ACCOUNTS}
							defaultValue="checking"
							variant="secondary"
						>
							<SelectTrigger id="from-account" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{FROM_ACCOUNTS.map((item) => (
										<SelectItem key={item.value} value={item.value}>
											{item.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</Field>
					<Field>
						<FieldLabel htmlFor="to-account">To Account</FieldLabel>
						<Select
							items={TO_ACCOUNTS}
							defaultValue="savings"
							variant="secondary"
						>
							<SelectTrigger id="to-account" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{TO_ACCOUNTS.map((item) => (
										<SelectItem key={item.value} value={item.value}>
											{item.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</Field>
					<Item variant="secondary" className="flex-col items-stretch">
						<ItemContent className="gap-3">
							<div className="flex items-center justify-between">
								<span className="text-muted-foreground text-sm">
									Estimated arrival
								</span>
								<span className="font-medium text-sm">Today, Apr 14</span>
							</div>
							<Separator />
							<div className="flex items-center justify-between">
								<span className="text-muted-foreground text-sm">
									Transaction fee
								</span>
								<span className="font-medium text-sm tabular-nums">$0.00</span>
							</div>
							<Separator />
							<div className="flex items-center justify-between">
								<span className="font-medium text-sm">Total amount</span>
								<span className="font-semibold text-sm tabular-nums">
									$1,200.00
								</span>
							</div>
						</ItemContent>
					</Item>
				</FieldGroup>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Confirm Transfer</Button>
			</CardFooter>
		</Card>
	);
}
