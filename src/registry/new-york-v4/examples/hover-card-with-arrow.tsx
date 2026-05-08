"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/registry/new-york-v4/ui/hover-card";

export default function HoverCardWithArrow() {
	return (
		<div className="flex flex-wrap gap-2">
			{(["left", "top", "bottom", "right"] as const).map((side) => (
				<HoverCard key={side}>
					<HoverCardTrigger
						delay={100}
						closeDelay={100}
						render={<Button variant="tertiary" className="w-fit capitalize" />}
					>
						{side}
					</HoverCardTrigger>
					<HoverCardContent withArrow side={side}>
						<div className="flex flex-col gap-1">
							<h4 className="font-medium">Hover Card</h4>
							<p className="text-muted-foreground text-sm">
								This hover card has an arrow pointing at the trigger.
							</p>
						</div>
					</HoverCardContent>
				</HoverCard>
			))}
		</div>
	);
}
