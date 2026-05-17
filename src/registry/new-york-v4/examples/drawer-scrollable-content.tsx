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

export default function DrawerScrollableContent() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="tertiary">Scrollable Content</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Scrollable Content</DrawerTitle>
					<DrawerDescription>
						This is a drawer with scrollable content.
					</DrawerDescription>
				</DrawerHeader>
				<div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
					{Array.from({ length: 10 }).map((_, index) => (
						<p key={index} className="mb-4 leading-normal">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					))}
				</div>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
					<Button>Submit</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
