"use client";

import { ArrowRightIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";
import { Input } from "@/registry/new-york-v4/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
} from "@/registry/new-york-v4/ui/select";

const CURRENCIES = [
	{ label: "US Dollar", value: "$" },
	{ label: "Euro", value: "€" },
	{ label: "British Pound", value: "£" },
];

export default function ButtonGroupSelect() {
	const [currency, setCurrency] = React.useState("$");

	return (
		<ButtonGroup>
			<ButtonGroup>
				<Select
					items={CURRENCIES}
					value={currency}
					variant="secondary"
					onValueChange={(value) => setCurrency(value as string)}
				>
					<SelectTrigger>{currency}</SelectTrigger>
					<SelectContent align="start">
						<SelectGroup>
							{CURRENCIES.map((item) => (
								<SelectItem key={item.value} value={item.value}>
									{item.value}{" "}
									<span className="text-muted-foreground">{item.label}</span>
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
				<Input variant="secondary" placeholder="10.00" pattern="[0-9]*" />
			</ButtonGroup>
			<ButtonGroup>
				<Button aria-label="Send" size="icon" variant="tertiary">
					<ArrowRightIcon />
				</Button>
			</ButtonGroup>
		</ButtonGroup>
	);
}
