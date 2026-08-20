"use client";

import { parseDate } from "chrono-node";
import { CalendarIcon } from "lucide-react";
import * as React from "react";

import { Calendar } from "@/registry/new-york-v4/ui/calendar";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

function formatDate(date: Date | undefined) {
	if (!date) {
		return "";
	}

	return date.toLocaleDateString("en-US", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	});
}

export default function DatePickerNaturalLanguage() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("In 2 days");
	const [date, setDate] = React.useState<Date | undefined>(
		parseDate(value) || undefined,
	);

	return (
		<Field className="mx-auto max-w-xs">
			<FieldLabel htmlFor="date-optional">Schedule Date</FieldLabel>
			<InputGroup>
				<InputGroupInput
					id="date-optional"
					value={value}
					placeholder="Tomorrow or next week"
					onChange={(e) => {
						setValue(e.target.value);
						const date = parseDate(e.target.value);
						if (date) {
							setDate(date);
						}
					}}
					onKeyDown={(e) => {
						if (e.key === "ArrowDown") {
							e.preventDefault();
							setOpen(true);
						}
					}}
				/>
				<InputGroupAddon align="inline-end">
					<Popover open={open} onOpenChange={setOpen}>
						<PopoverTrigger
							render={
								<InputGroupButton
									id="date-picker"
									variant="ghost"
									size="icon-xs"
									aria-label="Select date"
								/>
							}
						>
							<CalendarIcon />
							<span className="sr-only">Select date</span>
						</PopoverTrigger>
						<PopoverContent
							className="w-auto overflow-hidden p-0"
							align="end"
							sideOffset={8}
						>
							<Calendar
								mode="single"
								selected={date}
								captionLayout="dropdown"
								defaultMonth={date}
								onSelect={(sel) => {
									setDate(sel);
									setValue(formatDate(sel));
									setOpen(false);
								}}
							/>
						</PopoverContent>
					</Popover>
				</InputGroupAddon>
			</InputGroup>
			<div className="px-1 text-muted-foreground text-sm">
				Your post will be published on{" "}
				<span className="font-medium">{formatDate(date)}</span>.
			</div>
		</Field>
	);
}
