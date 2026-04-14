"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export default function PopoverAlign() {
	return (
		<div className="flex gap-6">
			<Popover>
				<PopoverTrigger render={<Button variant="tertiary" size="sm" />}>
					Start
				</PopoverTrigger>
				<PopoverContent align="start" className="w-40">
					Aligned to start
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger render={<Button variant="tertiary" size="sm" />}>
					Center
				</PopoverTrigger>
				<PopoverContent align="center" className="w-40">
					Aligned to center
				</PopoverContent>
			</Popover>
			<Popover>
				<PopoverTrigger render={<Button variant="tertiary" size="sm" />}>
					End
				</PopoverTrigger>
				<PopoverContent align="end" className="w-40">
					Aligned to end
				</PopoverContent>
			</Popover>
		</div>
	);
}
