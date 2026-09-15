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
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import { Progress } from "@/registry/new-york-v4/ui/progress";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/registry/new-york-v4/ui/select";
import { Textarea } from "@/registry/new-york-v4/ui/textarea";

const CURRENCIES = [
	{ label: "USD — United States Dollar", value: "usd" },
	{ label: "EUR — Euro", value: "eur" },
	{ label: "GBP — British Pound", value: "gbp" },
	{ label: "JPY — Japanese Yen", value: "jpy" },
];

export function PayoutThreshold() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Payout Threshold</CardTitle>
				<CardDescription>
					Set the minimum balance required before a payout is triggered.
				</CardDescription>
				<CardAction>
					<Button
						variant="ghost"
						size="icon-sm"
						className="bg-muted"
						aria-label="Dismiss payout threshold"
					>
						<XIcon strokeWidth={2} />
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="preferred-currency">
							Preferred Currency
						</FieldLabel>
						<Select items={CURRENCIES} defaultValue="usd" variant="secondary">
							<SelectTrigger id="preferred-currency" className="w-full">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{CURRENCIES.map((item) => (
										<SelectItem key={item.value} value={item.value}>
											{item.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
					</Field>
					<Field>
						<div className="flex items-baseline justify-between">
							<FieldLabel id="min-payout-label">
								Minimum Payout Amount
							</FieldLabel>
							<span className="font-semibold text-2xl tabular-nums">
								$2500.00
							</span>
						</div>
						<Progress
							value={25}
							aria-labelledby="min-payout-label"
							aria-valuetext="$2,500 of $10,000"
						/>
						<div className="flex items-center justify-between">
							<FieldDescription>$50 (MIN)</FieldDescription>
							<FieldDescription>$10,000 (MAX)</FieldDescription>
						</div>
					</Field>
					<Field>
						<FieldLabel htmlFor="payout-notes">Notes</FieldLabel>
						<Textarea
							variant="secondary"
							id="payout-notes"
							placeholder="Add any notes for this payout configuration..."
							className="min-h-[100px]"
						/>
					</Field>
				</FieldGroup>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Save Threshold</Button>
			</CardFooter>
		</Card>
	);
}
