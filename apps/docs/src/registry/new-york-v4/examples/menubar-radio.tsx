"use client";

import * as React from "react";

import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarTrigger,
} from "@/registry/new-york-v4/ui/menubar";

export default function MenubarRadio() {
	const [user, setUser] = React.useState("maged");
	const [theme, setTheme] = React.useState("system");

	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>Profiles</MenubarTrigger>
				<MenubarContent>
					<MenubarRadioGroup value={user} onValueChange={setUser}>
						<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
						<MenubarRadioItem value="maged">Maged</MenubarRadioItem>
						<MenubarRadioItem value="luis">Luis</MenubarRadioItem>
					</MenubarRadioGroup>
					<MenubarSeparator />
					<MenubarItem>Edit...</MenubarItem>
					<MenubarItem>Add Profile...</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			<MenubarMenu>
				<MenubarTrigger>Theme</MenubarTrigger>
				<MenubarContent>
					<MenubarRadioGroup value={theme} onValueChange={setTheme}>
						<MenubarRadioItem value="light">Light</MenubarRadioItem>
						<MenubarRadioItem value="dark">Dark</MenubarRadioItem>
						<MenubarRadioItem value="system">System</MenubarRadioItem>
					</MenubarRadioGroup>
				</MenubarContent>
			</MenubarMenu>
		</Menubar>
	);
}
