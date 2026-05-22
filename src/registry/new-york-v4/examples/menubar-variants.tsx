import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarShortcut,
	MenubarTrigger,
} from "@/registry/new-york-v4/ui/menubar";

export default function MenubarVariants() {
	return (
		<div className="flex w-full max-w-md flex-col gap-4">
			{(["default", "secondary", "tertiary", "outline"] as const).map(
				(variant, index) => (
					<Menubar key={`menubar-${index}`} variant={variant}>
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
				),
			)}
		</div>
	);
}
