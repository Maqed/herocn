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

export default function DrawerOverlayVariant() {
	return (
		<div className="flex flex-wrap gap-2">
			<Drawer>
				<DrawerTrigger render={<Button variant="secondary" />}>
					Opaque
				</DrawerTrigger>
				<DrawerContent overlayVariant="opaque">
					<DrawerHeader>
						<DrawerTitle>Opaque overlay</DrawerTitle>
						<DrawerDescription>
							Default dimmed backdrop without extra blur on the page behind the
							drawer.
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose render={<Button variant="secondary" />}>
							Close
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Drawer>
				<DrawerTrigger render={<Button variant="secondary" />}>
					Blur
				</DrawerTrigger>
				<DrawerContent overlayVariant="blur">
					<DrawerHeader>
						<DrawerTitle>Blurred overlay</DrawerTitle>
						<DrawerDescription>
							Backdrop blur so content behind the drawer is visibly softened.
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose render={<Button variant="secondary" />}>
							Close
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Drawer>
				<DrawerTrigger render={<Button variant="secondary" />}>
					Transparent
				</DrawerTrigger>
				<DrawerContent overlayVariant="transparent">
					<DrawerHeader>
						<DrawerTitle>Transparent overlay</DrawerTitle>
						<DrawerDescription>
							No dimmed backdrop — the page stays fully visible behind the
							drawer surface.
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose render={<Button variant="secondary" />}>
							Close
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
}
