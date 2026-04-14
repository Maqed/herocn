import { BotIcon, ChevronDownIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";
import {
	Field,
	FieldDescription,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";
import { Textarea } from "@/registry/new-york-v4/ui/textarea";

export default function ButtonGroupPopover() {
	return (
		<ButtonGroup>
			<Button variant="outline">
				<BotIcon /> Copilot
			</Button>
			<Popover>
				<PopoverTrigger
					render={
						<Button variant="outline" size="icon" aria-label="Open Popover" />
					}
				>
					<ChevronDownIcon />
				</PopoverTrigger>
				<PopoverContent align="end" className="rounded-xl text-sm">
					<PopoverHeader>
						<PopoverTitle>Start a new task with Copilot</PopoverTitle>
						<PopoverDescription>
							Describe your task in natural language.
						</PopoverDescription>
					</PopoverHeader>
					<Field>
						<FieldLabel htmlFor="button-group-task" className="sr-only">
							Task Description
						</FieldLabel>
						<Textarea
							id="button-group-task"
							placeholder="I need to..."
							className="resize-none"
						/>
						<FieldDescription>
							Copilot will open a pull request for review.
						</FieldDescription>
					</Field>
				</PopoverContent>
			</Popover>
		</ButtonGroup>
	);
}
