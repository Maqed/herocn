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

const items = Array.from({ length: 12 }, (_, i) => ({
	title: `Settings item ${i + 1}`,
	description: "Long content scrolls while the header and footer stay in view.",
}));

export default function DrawerScrollableContent() {
	return (
		<Drawer>
			<DrawerTrigger render={<Button variant="tertiary" />}>
				Open Scrollable Drawer
			</DrawerTrigger>
			<DrawerContent className="sm:max-w-sm">
				<DrawerHeader>
					<DrawerTitle>Scrollable content</DrawerTitle>
					<DrawerDescription>
						Make the scroll container a flex item so it fills the drawer.
					</DrawerDescription>
				</DrawerHeader>
				<div className="flex-1 overflow-y-auto p-4">
					<ul className="grid gap-2">
						{items.map((item) => (
							<li
								key={item.title}
								className="rounded-2xl border bg-muted/50 p-4 font-medium text-sm"
							>
								{item.title}
								<p className="mt-1 font-normal text-muted-foreground">
									{item.description}
								</p>
							</li>
						))}
					</ul>
				</div>
				<DrawerFooter>
					<Button className="h-[34px]">Save</Button>
					<DrawerClose render={<Button variant="tertiary" />}>
						Cancel
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
