"use client";

import * as React from "react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { Calendar } from "@/registry/new-york-v4/ui/calendar";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export default function DatePickerDob() {
	const [open, setOpen] = React.useState(false);
	const [date, setDate] = React.useState<Date | undefined>(undefined);

	return (
		<Field className="mx-auto w-44">
			<FieldLabel htmlFor="date">Date of birth</FieldLabel>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger
					render={
						<Button
							variant="tertiary"
							id="date"
							className="justify-start font-normal"
						/>
					}
				>
					{date ? date.toLocaleDateString() : "Select date"}
				</PopoverTrigger>
				<PopoverContent className="w-auto overflow-hidden p-0" align="start">
					<Calendar
						mode="single"
						selected={date}
						defaultMonth={date}
						captionLayout="dropdown"
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
					/>
				</PopoverContent>
			</Popover>
		</Field>
	);
}
