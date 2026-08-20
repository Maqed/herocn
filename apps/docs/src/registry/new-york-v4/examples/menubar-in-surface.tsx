import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/registry/new-york-v4/ui/menubar";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function MenubarInSurface() {
	return (
		<Surface className="flex w-full flex-col gap-3 rounded-3xl p-6">
			<p className="font-medium text-muted-foreground text-sm">
				Menubar inside a Surface
			</p>
			<Menubar variant="secondary">
				<MenubarMenu>
					<MenubarTrigger>File</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							New Tab <MenubarShortcut>⌘T</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							New Window <MenubarShortcut>⌘N</MenubarShortcut>
						</MenubarItem>
						<MenubarSeparator />
						<MenubarItem>
							Print... <MenubarShortcut>⌘P</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>Edit</MenubarTrigger>
					<MenubarContent>
						<MenubarItem>
							Undo <MenubarShortcut>⌘Z</MenubarShortcut>
						</MenubarItem>
						<MenubarItem>
							Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
						</MenubarItem>
					</MenubarContent>
				</MenubarMenu>
			</Menubar>
		</Surface>
	);
}
