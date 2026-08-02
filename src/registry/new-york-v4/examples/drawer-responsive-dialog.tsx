"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/registry/new-york-v4/hooks/use-mobile";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog";
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
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";

export default function DrawerResponsiveDialog() {
	const [open, setOpen] = React.useState(false);
	const isMobile = useIsMobile();

	if (isMobile) {
		return (
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerTrigger render={<Button variant="tertiary" />}>
					Edit Profile
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader className="text-left">
						<DrawerTitle>Edit profile</DrawerTitle>
						<DrawerDescription>
							Make changes to your profile here. Click save when you&apos;re
							done.
						</DrawerDescription>
					</DrawerHeader>
					<ProfileForm className="px-4" />
					<DrawerFooter>
						<DrawerClose render={<Button variant="tertiary" />}>
							Cancel
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger render={<Button variant="tertiary" />}>
				Edit Profile
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</DialogDescription>
				</DialogHeader>
				<ProfileForm className="px-4" />
			</DialogContent>
		</Dialog>
	);
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
	return (
		<form className={cn("grid items-start gap-6", className)}>
			<div className="grid gap-3">
				<Label htmlFor="responsive-email">Email</Label>
				<Input
					variant="secondary"
					type="email"
					id="responsive-email"
					defaultValue="Maqed@example.com"
				/>
			</div>
			<div className="grid gap-3">
				<Label htmlFor="responsive-username">Username</Label>
				<Input
					variant="secondary"
					id="responsive-username"
					defaultValue="@0xMaqed"
				/>
			</div>
			<Button type="submit">Save changes</Button>
		</form>
	);
}
