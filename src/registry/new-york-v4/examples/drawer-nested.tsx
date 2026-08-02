"use client";

import { useIsMobile } from "@/registry/new-york-v4/hooks/use-mobile";
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

export default function DrawerNested() {
	const isMobile = useIsMobile();
	const swipeDirection = isMobile ? "down" : "right";

	return (
		<Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
			<DrawerTrigger render={<Button variant="tertiary" />}>
				Open Drawer
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Drawer</DrawerTitle>
					<DrawerDescription>
						Open another drawer from the same direction.
					</DrawerDescription>
				</DrawerHeader>
				<div className="flex-1 p-4">
					<Drawer showSwipeHandle={isMobile} swipeDirection={swipeDirection}>
						<DrawerTrigger render={<Button variant="tertiary" />}>
							Open Nested Drawer
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle>Nested drawer</DrawerTitle>
								<DrawerDescription>
									The parent drawer stays mounted behind this one.
								</DrawerDescription>
							</DrawerHeader>
							<div className="flex-1 p-4">
								<div className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-content:size-full group-data-[swipe-axis=y]/drawer-content:h-64 group-data-[swipe-axis=y]/drawer-content:w-full" />
							</div>
							<DrawerFooter>
								<DrawerClose render={<Button variant="tertiary" />}>
									Close
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
				<DrawerFooter>
					<DrawerClose render={<Button variant="tertiary" />}>
						Close
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
