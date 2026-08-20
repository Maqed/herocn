"use client";

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
} from "@/registry/new-york-v4/ui/command";

export default function CommandOverlayVariant() {
	const [openOpaque, setOpenOpaque] = React.useState(false);
	const [openBlur, setOpenBlur] = React.useState(false);
	const [openTransparent, setOpenTransparent] = React.useState(false);

	return (
		<div className="flex flex-wrap gap-2">
			<Button
				onClick={() => setOpenOpaque(true)}
				variant="outline"
				className="w-fit"
			>
				Opaque
			</Button>
			<Button
				onClick={() => setOpenBlur(true)}
				variant="outline"
				className="w-fit"
			>
				Blur
			</Button>
			<Button
				onClick={() => setOpenTransparent(true)}
				variant="outline"
				className="w-fit"
			>
				Transparent
			</Button>
			<CommandDialog
				open={openOpaque}
				onOpenChange={setOpenOpaque}
				overlayVariant="opaque"
			>
				<Command>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search Emoji</CommandItem>
							<CommandItem>Calculator</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</CommandDialog>
			<CommandDialog
				open={openBlur}
				onOpenChange={setOpenBlur}
				overlayVariant="blur"
			>
				<Command>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search Emoji</CommandItem>
							<CommandItem>Calculator</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</CommandDialog>
			<CommandDialog
				open={openTransparent}
				onOpenChange={setOpenTransparent}
				overlayVariant="transparent"
			>
				<Command>
					<CommandInput placeholder="Type a command or search..." />
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>Calendar</CommandItem>
							<CommandItem>Search Emoji</CommandItem>
							<CommandItem>Calculator</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			</CommandDialog>
		</div>
	);
}
