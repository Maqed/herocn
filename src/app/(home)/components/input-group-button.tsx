"use client";

import { InfoIcon, StarIcon } from "lucide-react";
import * as React from "react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group";
import { Label } from "@/registry/new-york-v4/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export function InputGroupButtonExample() {
	const [isFavorite, setIsFavorite] = React.useState(false);

	return (
		<div className="grid w-full max-w-sm gap-6">
			<Label htmlFor="input-secure-19" className="sr-only">
				Input Secure
			</Label>
			<InputGroup>
				<InputGroupInput id="input-secure-19" />
				<Popover>
					<PopoverTrigger
						render={
							<InputGroupAddon>
								<InputGroupButton
									variant="secondary"
									size="icon-sm"
									aria-label="Info"
								>
									<InfoIcon />
								</InputGroupButton>
							</InputGroupAddon>
						}
					/>
					<PopoverContent
						align="start"
						alignOffset={10}
						className="flex flex-col gap-1 rounded-xl text-sm"
					>
						<p className="font-medium">Your connection is not secure.</p>
						<p>You should not enter any sensitive information on this site.</p>
					</PopoverContent>
				</Popover>
				<InputGroupAddon className="pl-1! text-muted-foreground">
					https://
				</InputGroupAddon>
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						onClick={() => setIsFavorite(!isFavorite)}
						size="icon-xs"
						aria-label="Favorite"
					>
						<StarIcon
							data-favorite={isFavorite}
							className="data-[favorite=true]:fill-primary data-[favorite=true]:stroke-primary"
						/>
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
