"use client";

import {
	CalculatorIcon,
	CalendarIcon,
	CreditCardIcon,
	SettingsIcon,
	SmileIcon,
	UserIcon,
} from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Command,
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
	CommandShortcut,
} from "@/registry/new-york-v4/ui/command";

export default function CommandBasic() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="flex flex-col gap-4">
			<Button
				onClick={() => setOpen(true)}
				variant="tertiary"
				className="w-fit"
			>
				Open Menu
			</Button>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<Command>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>
								<CalendarIcon />
								<span>Calendar</span>
							</CommandItem>
							<CommandItem>
								<SmileIcon />
								<span>Search Emoji</span>
							</CommandItem>
							<CommandItem disabled>
								<CalculatorIcon />
								<span>Calculator</span>
							</CommandItem>
						</CommandGroup>
						<CommandSeparator />
						<CommandGroup heading="Settings">
							<CommandItem>
								<UserIcon />
								<span>Profile</span>
								<CommandShortcut>⌘P</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<CreditCardIcon />
								<span>Billing</span>
								<CommandShortcut>⌘B</CommandShortcut>
							</CommandItem>
							<CommandItem>
								<SettingsIcon />
								<span>Settings</span>
								<CommandShortcut>⌘S</CommandShortcut>
							</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</CommandDialog>
		</div>
	);
}
