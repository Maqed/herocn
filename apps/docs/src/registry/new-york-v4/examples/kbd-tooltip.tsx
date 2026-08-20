"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";
import { Kbd, KbdGroup } from "@/registry/new-york-v4/ui/kbd";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

export default function KbdTooltip() {
	return (
		<div className="flex flex-wrap gap-4">
			<ButtonGroup>
				<Tooltip>
					<TooltipTrigger
						render={<Button variant="tertiary" className="w-fit" />}
					>
						Save
					</TooltipTrigger>
					<TooltipContent>
						Save Changes <Kbd>S</Kbd>
					</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger
						render={<Button variant="tertiary" className="w-fit" />}
					>
						Print
					</TooltipTrigger>
					<TooltipContent className="flex flex-wrap items-center gap-1">
						Print Document{" "}
						<KbdGroup>
							<Kbd>Ctrl</Kbd>
							<Kbd>P</Kbd>
						</KbdGroup>
					</TooltipContent>
				</Tooltip>
			</ButtonGroup>
		</div>
	);
}
