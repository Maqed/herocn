"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

export default function TooltipDemo() {
	return (
		<Tooltip>
			<TooltipTrigger render={<Button variant="tertiary" />}>
				Hover
			</TooltipTrigger>
			<TooltipContent>
				<p>Add to library</p>
			</TooltipContent>
		</Tooltip>
	);
}
