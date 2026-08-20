"use client";

import { Calendar } from "@/registry/new-york-v4/ui/calendar";

export default function CalendarCaption() {
	return (
		<Calendar
			mode="single"
			captionLayout="dropdown"
			className="rounded-lg border"
		/>
	);
}
