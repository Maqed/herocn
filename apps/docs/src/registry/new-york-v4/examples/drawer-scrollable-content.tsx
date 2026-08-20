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
import { Surface } from "@/registry/new-york-v4/ui/surface";

const items = Array.from({ length: 12 }, (_, i) => ({
	title: `Settings item ${i + 1}`,
	description: "Long content scrolls while the header and footer stay in view.",
}));

export default function DrawerScrollableContent() {
	return (
		<Drawer>
			<DrawerTrigger render={<Button variant="secondary" />}>
				Open Scrollable Drawer
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Scrollable content</DrawerTitle>
					<DrawerDescription>
						Make the scroll container a flex item so it fills the drawer.
					</DrawerDescription>
				</DrawerHeader>
				<div className="flex-1 overflow-y-auto p-4">
					<ul className="grid gap-2">
						{items.map((item) => (
							<Surface
								key={item.title}
								variant="secondary"
								className="rounded-3xl p-6 font-medium text-sm"
							>
								{item.title}
								<p className="mt-1 font-normal text-muted-foreground">
									{item.description}
								</p>
							</Surface>
						))}
					</ul>
				</div>
				<DrawerFooter>
					<Button>Save</Button>
					<DrawerClose render={<Button variant="secondary" />}>
						Cancel
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
