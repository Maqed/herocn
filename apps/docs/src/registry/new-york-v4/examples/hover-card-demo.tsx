"use client";

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/registry/new-york-v4/ui/hover-card";

export default function HoverCardDemo() {
	return (
		<HoverCard>
			<HoverCardTrigger
				delay={10}
				closeDelay={100}
				render={<Button variant="link" />}
			>
				@nextjs
			</HoverCardTrigger>
			<HoverCardContent className="w-64">
				<div className="flex items-center gap-3">
					<Avatar>
						<AvatarImage src="https://github.com/vercel.png" />
						<AvatarFallback>VC</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-0.5">
						<div className="font-semibold">@nextjs</div>
						<div className="text-muted-foreground text-xs">
							The React Framework
						</div>
					</div>
				</div>
				<div className="text-muted-foreground text-xs">
					Created and maintained by @vercel.
				</div>
				<div className="text-muted-foreground text-xs">
					Joined December 2021
				</div>
			</HoverCardContent>
		</HoverCard>
	);
}
