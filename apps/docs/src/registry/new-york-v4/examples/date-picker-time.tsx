"use client";

import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { Calendar } from "@/registry/new-york-v4/ui/calendar";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export default function DatePickerTime() {
	const [open, setOpen] = React.useState(false);
	const [date, setDate] = React.useState<Date | undefined>(undefined);

	return (
		<FieldGroup className="mx-auto max-w-xs flex-row">
			<Field>
				<FieldLabel htmlFor="date-picker-optional">Date</FieldLabel>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger
						render={
							<Button
								variant="tertiary"
								id="date-picker-optional"
								className="w-32 justify-between font-normal"
							/>
						}
					>
						{date ? format(date, "PPP") : "Select date"}
						<ChevronDownIcon data-icon="inline-end" />
					</PopoverTrigger>
					<PopoverContent className="w-auto overflow-hidden p-0" align="start">
						<Calendar
							mode="single"
							selected={date}
							captionLayout="dropdown"
							defaultMonth={date}
							onSelect={(sel) => {
								setDate(sel);
								setOpen(false);
							}}
						/>
					</PopoverContent>
				</Popover>
			</Field>
			<Field className="w-32">
				<FieldLabel htmlFor="time-picker-optional">Time</FieldLabel>
				<Input
					type="time"
					id="time-picker-optional"
					step="1"
					defaultValue="10:30:00"
					className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
				/>
			</Field>
		</FieldGroup>
	);
}
