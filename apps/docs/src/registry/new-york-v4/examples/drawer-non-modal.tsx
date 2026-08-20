"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/registry/new-york-v4/ui/drawer";

export default function DrawerNonModal() {
	return (
		<Drawer modal={false} disablePointerDismissal swipeDirection="right">
			<DrawerTrigger render={<Button variant="secondary" />}>
				Non Modal
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Non modal drawer</DrawerTitle>
				</DrawerHeader>
				<div className="flex-1 p-4">
					<div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-content:size-full group-data-[swipe-axis=y]/drawer-content:h-80 group-data-[swipe-axis=y]/drawer-content:w-full" />
				</div>
				<DrawerFooter>
					<DrawerClose render={<Button />}>Close</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
