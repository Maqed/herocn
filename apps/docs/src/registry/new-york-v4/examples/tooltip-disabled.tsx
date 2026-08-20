"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

export default function TooltipDisabled() {
	return (
		<Tooltip>
			<TooltipTrigger render={<span className="inline-block w-fit" />}>
				<Button variant="tertiary" disabled>
					Disabled
				</Button>
			</TooltipTrigger>
			<TooltipContent>
				<p>This feature is currently unavailable</p>
			</TooltipContent>
		</Tooltip>
	);
}
