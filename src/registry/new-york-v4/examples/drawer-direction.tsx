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

const DRAWER_SIDES = ["top", "right", "bottom", "left"] as const;

export default function DrawerDirection() {
	return (
		<div className="flex flex-wrap gap-2">
			{DRAWER_SIDES.map((side) => (
				<Drawer
					key={side}
					direction={
						side === "bottom" ? undefined : (side as "top" | "right" | "left")
					}
				>
					<DrawerTrigger asChild>
						<Button variant="tertiary" className="capitalize">
							{side}
						</Button>
					</DrawerTrigger>
					<DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[50vh] data-[vaul-drawer-direction=top]:max-h-[50vh]">
						<DrawerHeader>
							<DrawerTitle>Terms of Service</DrawerTitle>
							<DrawerDescription>
								Make sure to read them carefully.
							</DrawerDescription>
						</DrawerHeader>
						<div className="no-scrollbar overflow-y-auto px-4">
							{Array.from({ length: 10 }).map((_, index) => (
								<p key={index} className="mb-4 leading-relaxed">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							))}
						</div>
						<DrawerFooter>
							<DrawerClose asChild>
								<Button variant="tertiary">Cancel</Button>
							</DrawerClose>
							<Button type="submit">Accept</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			))}
		</div>
	);
}
