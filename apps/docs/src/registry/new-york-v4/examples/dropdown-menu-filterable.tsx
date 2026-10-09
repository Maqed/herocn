"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuEmpty,
	DropdownMenuFilterProvider,
	DropdownMenuGroup,
	DropdownMenuInput,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuList,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

export default function DropdownMenuFilterable() {
	return (
		<DropdownMenuFilterProvider>
			<DropdownMenu>
				<DropdownMenuTrigger render={<Button variant="tertiary" />}>
					Open
				</DropdownMenuTrigger>
				<DropdownMenuContent align="start" className="w-64 overflow-hidden">
					<DropdownMenuInput
						aria-label="Filter actions"
						placeholder="e.g. Save"
					/>
					<DropdownMenuEmpty>No actions found.</DropdownMenuEmpty>
					<DropdownMenuList className="max-h-72">
						<DropdownMenuGroup data-filter-section>
							<DropdownMenuLabel>File</DropdownMenuLabel>
							<DropdownMenuItem>New file</DropdownMenuItem>
							<DropdownMenuItem>Open file</DropdownMenuItem>
							<DropdownMenuItem>Save</DropdownMenuItem>
							<DropdownMenuItem>Save as</DropdownMenuItem>
							<DropdownMenuItem>Duplicate</DropdownMenuItem>
							<DropdownMenuItem>Rename</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuGroup data-filter-section>
							<DropdownMenuLabel>Organize</DropdownMenuLabel>
							<FilterableSubmenu
								label="Move to folder"
								inputLabel="Filter folders"
								placeholder="e.g. Projects"
								emptyText="No folders found."
								options={folderOptions}
							/>
							<DropdownMenuSub>
								<DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
								<DropdownMenuPortal>
									<DropdownMenuSubContent>
										{sharingOptions.map((option) => (
											<DropdownMenuItem key={option}>{option}</DropdownMenuItem>
										))}
									</DropdownMenuSubContent>
								</DropdownMenuPortal>
							</DropdownMenuSub>
							<FilterableSubmenu
								label="Export"
								inputLabel="Filter export formats"
								placeholder="e.g. PDF"
								emptyText="No export formats found."
								options={exportOptions}
							/>
							<DropdownMenuItem>Download a copy</DropdownMenuItem>
							<DropdownMenuItem>Delete</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuRadioGroup data-filter-section defaultValue="date">
							<DropdownMenuSeparator data-filter-separator />
							<DropdownMenuLabel>Sort by</DropdownMenuLabel>
							<DropdownMenuRadioItem value="date">
								Date modified
							</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="name">Name</DropdownMenuRadioItem>
							<DropdownMenuRadioItem value="size">Size</DropdownMenuRadioItem>
						</DropdownMenuRadioGroup>
						<DropdownMenuGroup data-filter-section>
							<DropdownMenuSeparator data-filter-separator />
							<DropdownMenuLabel>View</DropdownMenuLabel>
							<DropdownMenuCheckboxItem defaultChecked>
								Show details
							</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem>Show sidebar</DropdownMenuCheckboxItem>
							<DropdownMenuCheckboxItem>
								Keep available offline
							</DropdownMenuCheckboxItem>
						</DropdownMenuGroup>
					</DropdownMenuList>
				</DropdownMenuContent>
			</DropdownMenu>
		</DropdownMenuFilterProvider>
	);
}

interface FilterableSubmenuProps {
	label: string;
	inputLabel: string;
	placeholder: string;
	emptyText: string;
	options: readonly string[];
}

function FilterableSubmenu(props: FilterableSubmenuProps) {
	return (
		<DropdownMenuFilterProvider>
			<DropdownMenuSub>
				<DropdownMenuSubTrigger>{props.label}</DropdownMenuSubTrigger>
				<DropdownMenuPortal>
					<DropdownMenuSubContent>
						<DropdownMenuInput
							aria-label={props.inputLabel}
							placeholder={props.placeholder}
						/>
						<DropdownMenuEmpty>{props.emptyText}</DropdownMenuEmpty>
						<DropdownMenuList className="max-h-72">
							{props.options.map((option) => (
								<DropdownMenuItem key={option}>{option}</DropdownMenuItem>
							))}
						</DropdownMenuList>
					</DropdownMenuSubContent>
				</DropdownMenuPortal>
			</DropdownMenuSub>
		</DropdownMenuFilterProvider>
	);
}

const sharingOptions = [
	"Email",
	"Messages",
	"AirDrop",
	"Copy link",
	"Invite collaborators",
	"Publish to web",
	"Send a copy",
];

const folderOptions = [
	"Desktop",
	"Documents",
	"Downloads",
	"Projects",
	"Archive",
	"Shared",
	"Trash",
];

const exportOptions = [
	"PDF document",
	"Word document",
	"Plain text",
	"Rich text",
	"Markdown",
	"HTML page",
	"Image",
];
