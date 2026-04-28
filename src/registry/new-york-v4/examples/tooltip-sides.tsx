"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

export default function TooltipSides() {
	return (
		<div className="flex flex-wrap gap-2">
			{(["left", "top", "bottom", "right"] as const).map((side) => (
				<Tooltip key={side}>
					<TooltipTrigger
						render={<Button variant="tertiary" className="w-fit capitalize" />}
					>
						{side}
					</TooltipTrigger>
					<TooltipContent side={side}>
						<p>Add to library</p>
					</TooltipContent>
				</Tooltip>
			))}
		</div>
	);
}
