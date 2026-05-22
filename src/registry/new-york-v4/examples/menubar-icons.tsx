import {
	FileIcon,
	FolderIcon,
	HelpCircleIcon,
	SaveIcon,
	SettingsIcon,
	TrashIcon,
} from "lucide-react";

import {
	Menubar,
	MenubarContent,
	MenubarGroup,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/registry/new-york-v4/ui/menubar";

export default function MenubarIcons() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>File</MenubarTrigger>
				<MenubarContent>
					<MenubarItem>
						<FileIcon />
						New File <MenubarShortcut>⌘N</MenubarShortcut>
					</MenubarItem>
					<MenubarItem>
						<FolderIcon />
						Open Folder
					</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<SaveIcon />
						Save <MenubarShortcut>⌘S</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>More</MenubarTrigger>
				<MenubarContent>
					<MenubarGroup>
						<MenubarItem>
							<SettingsIcon />
							Settings
						</MenubarItem>
						<MenubarItem>
							<HelpCircleIcon />
							Help
						</MenubarItem>
						<MenubarSeparator />
						<MenubarItem variant="destructive">
							<TrashIcon />
							Delete
						</MenubarItem>
					</MenubarGroup>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
