"use client";

import { cn } from "cn";
import * as React from "react";
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
	DrawerContent,
	DrawerDescription,
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
				<DrawerTrigger render={<Button variant="secondary" />}>
					Edit Profile
				</DrawerTrigger>
				<DrawerContent className="p-4">
					<DrawerHeader className="text-left">
						<DrawerTitle>Edit profile</DrawerTitle>
						<DrawerDescription>
							Make changes to your profile here. Click save when you&apos;re
							done.
						</DrawerDescription>
					</DrawerHeader>
					<ProfileForm />
				</DrawerContent>
			</Drawer>
		);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger render={<Button variant="secondary" />}>
				Edit Profile
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</DialogDescription>
				</DialogHeader>
				<ProfileForm />
			</DialogContent>
		</Dialog>
	);
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
	return (
		<form
			onSubmit={(e) => e.preventDefault()}
			className={cn("grid items-start gap-6", className)}
		>
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
			<Button className="w-fit justify-self-end" type="submit">
				Save changes
			</Button>
		</form>
	);
}
