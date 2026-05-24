"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";

export function ButtonGroupNested() {
	return (
		<ButtonGroup>
			<ButtonGroup>
				<Button variant="tertiary" size="sm">
					1
				</Button>
				<Button variant="tertiary" size="sm">
					2
				</Button>
				<Button variant="tertiary" size="sm">
					3
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="tertiary" size="icon-sm" aria-label="Previous">
					<ArrowLeftIcon />
				</Button>
				<Button variant="tertiary" size="icon-sm" aria-label="Next">
					<ArrowRightIcon />
				</Button>
			</ButtonGroup>
		</ButtonGroup>
	);
}
