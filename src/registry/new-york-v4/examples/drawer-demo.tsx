"use client";

import * as React from "react";

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
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";

export default function DrawerDemo() {
	const [open, setOpen] = React.useState(false);

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger render={<Button variant="secondary" />}>
				Edit Profile
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
						<FieldLabel htmlFor="drawer-demo-email">Email</FieldLabel>
						<Input
							variant="secondary"
							id="drawer-demo-email"
							type="email"
							defaultValue="Maqed@example.com"
						/>
					</Field>
					<Field>
						<FieldLabel htmlFor="drawer-demo-username">Username</FieldLabel>
						<Input
							variant="secondary"
							id="drawer-demo-username"
							defaultValue="@0xMaqed"
						/>
					</Field>
				</FieldGroup>
				<DrawerFooter>
					<Button type="submit">Save changes</Button>
					<DrawerClose render={<Button variant="secondary" />}>
						Cancel
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
