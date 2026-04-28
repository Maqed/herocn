"use client";

import { SaveIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { Kbd } from "@/registry/new-york-v4/ui/kbd";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

export default function TooltipKeyboard() {
	return (
		<Tooltip>
			<TooltipTrigger render={<Button variant="tertiary" size="icon-sm" />}>
				<SaveIcon />
			</TooltipTrigger>
			<TooltipContent>
				Save Changes <Kbd>S</Kbd>
			</TooltipContent>
		</Tooltip>
	);
}
