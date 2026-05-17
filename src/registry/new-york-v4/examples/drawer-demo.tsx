"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer";
import { Field, FieldGroup } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";

export default function DrawerDemo() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="tertiary">Open Drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Edit profile</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</DrawerDescription>
				</DrawerHeader>
				<FieldGroup className="px-4">
					<Field>
						<Label htmlFor="drawer-name">Name</Label>
						<Input
							variant="secondary"
							id="drawer-name"
							defaultValue="Maged Ibrahim"
						/>
					</Field>
					<Field>
						<Label htmlFor="drawer-username">Username</Label>
						<Input
							variant="secondary"
							id="drawer-username"
							defaultValue="@0xMaqed"
						/>
					</Field>
				</FieldGroup>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant="tertiary">Cancel</Button>
					</DrawerClose>
					<Button type="submit">Save changes</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
