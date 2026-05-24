"use client";

import { AudioLinesIcon, PlusIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

export function ButtonGroupInputGroup() {
	const [voiceEnabled, setVoiceEnabled] = React.useState(false);
	return (
		<ButtonGroup>
			<ButtonGroup>
				<Button variant="outline" size="icon" aria-label="Add">
					<PlusIcon />
				</Button>
			</ButtonGroup>
			<ButtonGroup className="flex-1">
				<InputGroup className="rounded-3xl">
					<InputGroupInput
						placeholder={
							voiceEnabled ? "Record and send audio..." : "Send a message..."
						}
						disabled={voiceEnabled}
					/>
					<InputGroupAddon align="inline-end">
						<Tooltip>
							<TooltipTrigger
								render={
									<InputGroupButton
										onClick={() => setVoiceEnabled(!voiceEnabled)}
										data-active={voiceEnabled}
										className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
										aria-pressed={voiceEnabled}
										size="icon-xs"
										aria-label="Voice Mode"
									>
										<AudioLinesIcon />
									</InputGroupButton>
								}
							/>
							<TooltipContent>Voice Mode</TooltipContent>
						</Tooltip>
					</InputGroupAddon>
				</InputGroup>
			</ButtonGroup>
		</ButtonGroup>
	);
}
