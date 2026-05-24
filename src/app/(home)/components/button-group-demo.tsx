"use client";

import {
	ArchiveIcon,
	ArrowLeftIcon,
	CalendarPlusIcon,
	ClockIcon,
	ListFilterIcon,
	MailCheckIcon,
	MoreHorizontalIcon,
	TagIcon,
	Trash2Icon,
} from "lucide-react";
import * as React from "react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

export function ButtonGroupDemo() {
	const [label, setLabel] = React.useState("personal");

	return (
		<ButtonGroup>
			<ButtonGroup className="hidden sm:flex">
				<Button variant="tertiary" size="icon-sm" aria-label="Go Back">
					<ArrowLeftIcon />
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="tertiary" size="sm">
					Archive
				</Button>
				<Button variant="tertiary" size="sm">
					Report
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="tertiary" size="sm">
					Snooze
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<Button
								variant="tertiary"
								size="icon-sm"
								aria-label="More Options"
							>
								<MoreHorizontalIcon />
							</Button>
						}
					/>
					<DropdownMenuContent align="end" className="w-48">
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<MailCheckIcon />
								Mark as Read
							</DropdownMenuItem>
							<DropdownMenuItem>
								<ArchiveIcon />
								Archive
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<ClockIcon />
								Snooze
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CalendarPlusIcon />
								Add to Calendar
							</DropdownMenuItem>
							<DropdownMenuItem>
								<ListFilterIcon />
								Add to List
							</DropdownMenuItem>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>
									<TagIcon />
									Label As...
								</DropdownMenuSubTrigger>
								<DropdownMenuSubContent>
									<DropdownMenuRadioGroup
										value={label}
										onValueChange={setLabel}
									>
										<DropdownMenuRadioItem value="personal">
											Personal
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="work">
											Work
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="other">
											Other
										</DropdownMenuRadioItem>
									</DropdownMenuRadioGroup>
								</DropdownMenuSubContent>
							</DropdownMenuSub>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem variant="destructive">
								<Trash2Icon />
								Trash
							</DropdownMenuItem>
						</DropdownMenuGroup>
					</DropdownMenuContent>
				</DropdownMenu>
			</ButtonGroup>
		</ButtonGroup>
	);
}
