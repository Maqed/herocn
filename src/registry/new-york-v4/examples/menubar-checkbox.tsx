import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/registry/new-york-v4/ui/menubar";

export default function MenubarCheckbox() {
	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>View</MenubarTrigger>
				<MenubarContent className="w-64">
					<MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
					<MenubarCheckboxItem checked>
						Always Show Full URLs
					</MenubarCheckboxItem>
					<MenubarSeparator />
					<MenubarItem>
						Reload <MenubarShortcut>⌘R</MenubarShortcut>
					</MenubarItem>
					<MenubarItem disabled>
						Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Format</MenubarTrigger>
				<MenubarContent>
					<MenubarCheckboxItem checked>Strikethrough</MenubarCheckboxItem>
					<MenubarCheckboxItem>Code</MenubarCheckboxItem>
					<MenubarCheckboxItem>Superscript</MenubarCheckboxItem>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
