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

export default function DrawerSwipeHandle() {
	return (
		<Drawer showSwipeHandle>
			<DrawerTrigger render={<Button variant="tertiary" />}>
				Open Drawer
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Swipe handle</DrawerTitle>
					<DrawerDescription>
						Drawer with a visible swipe handle you can drag to close.
					</DrawerDescription>
				</DrawerHeader>
				<div className="flex-1 p-4">
					<div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full" />
				</div>
				<DrawerFooter>
					<DrawerClose render={<Button />}>Close</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
