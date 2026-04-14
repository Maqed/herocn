"use client";

import * as React from "react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/registry/new-york-v4/ui/select";

const fruits = [
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Grapes", value: "grapes" },
	{ label: "Pineapple", value: "pineapple" },
];

export default function SelectMultiple() {
	const [value, setValue] = React.useState<string[]>([]);

	return (
		<Select multiple items={fruits} value={value} onValueChange={setValue}>
			<SelectTrigger className="w-full max-w-sm">
				<SelectValue placeholder="Select fruits..." />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{fruits.map((item) => (
						<SelectItem key={item.value} value={item.value}>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
