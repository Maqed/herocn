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

const sides = [
	{
		direction: "right",
		label: "Right",
	},
	{
		direction: "left",
		label: "Left",
	},
	{
		direction: "down",
		label: "Bottom",
	},
	{
		direction: "up",
		label: "Top",
	},
] as const;

export default function DrawerDirection() {
	return (
		<div className="flex flex-wrap gap-2">
			{sides.map((side) => (
				<Drawer key={side.direction} swipeDirection={side.direction}>
					<DrawerTrigger render={<Button variant="secondary" />}>
						{side.label}
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>{side.label} drawer</DrawerTitle>
							<DrawerDescription>
								Slides in from the {side.label.toLowerCase()} edge of the
								screen.
							</DrawerDescription>
						</DrawerHeader>
						<div className="flex-1 p-4">
							<div className="size-full rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-content:size-full group-data-[swipe-axis=y]/drawer-content:h-64 group-data-[swipe-axis=y]/drawer-content:w-full" />
						</div>
						<DrawerFooter>
							<DrawerClose render={<Button className="secondary" />}>
								Close
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			))}
		</div>
	);
}
