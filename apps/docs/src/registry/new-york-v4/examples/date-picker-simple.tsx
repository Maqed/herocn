"use client";

import { format } from "date-fns";
import * as React from "react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { Calendar } from "@/registry/new-york-v4/ui/calendar";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export default function DatePickerSimple() {
	const [date, setDate] = React.useState<Date>();

	return (
		<Field className="mx-auto w-44">
			<FieldLabel htmlFor="date-picker-simple">Date</FieldLabel>
			<Popover>
				<PopoverTrigger
					render={
						<Button
							variant="tertiary"
							id="date-picker-simple"
							className="justify-start font-normal"
						/>
					}
				>
					{date ? format(date, "PPP") : <span>Pick a date</span>}
				</PopoverTrigger>
				<PopoverContent className="w-auto p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						defaultMonth={date}
					/>
				</PopoverContent>
			</Popover>
		</Field>
	);
}
