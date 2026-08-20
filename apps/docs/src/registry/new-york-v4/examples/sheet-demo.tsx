"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/registry/new-york-v4/ui/sheet";

export default function SheetDemo() {
	return (
		<Sheet>
			<SheetTrigger render={<Button variant="tertiary" />}>Open</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when you&apos;re done.
					</SheetDescription>
				</SheetHeader>
				<div className="grid flex-1 auto-rows-min gap-6 px-4">
					<div className="grid gap-3">
						<Label htmlFor="sheet-demo-name">Name</Label>
						<Input
							variant="secondary"
							id="sheet-demo-name"
							defaultValue="Maged Ibrahim"
						/>
					</div>
					<div className="grid gap-3">
						<Label htmlFor="sheet-demo-username">Username</Label>
						<Input
							variant="secondary"
							id="sheet-demo-username"
							defaultValue="@0xMaqed"
						/>
					</div>
				</div>
				<SheetFooter>
					<Button type="submit">Save changes</Button>
					<SheetClose render={<Button variant="tertiary" />}>Close</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
