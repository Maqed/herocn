"use client";

import * as React from "react";

import { Calendar } from "@/registry/new-york-v4/ui/calendar";
import { Card, CardContent } from "@/registry/new-york-v4/ui/card";

export default function CalendarWeekNumbers() {
	const [date, setDate] = React.useState<Date | undefined>(
		new Date(new Date().getFullYear(), 0, 12),
	);

	return (
		<Card className="mx-auto w-fit p-0">
			<CardContent className="p-0">
				<Calendar
					mode="single"
					defaultMonth={date}
					selected={date}
					onSelect={setDate}
					showWeekNumber
				/>
			</CardContent>
		</Card>
	);
}
