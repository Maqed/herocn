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

const variants = [
	{
		variant: "opaque",
		label: "Opaque",
		title: "Opaque overlay",
		description:
			"Default dimmed backdrop without extra blur on the page behind the drawer.",
	},
	{
		variant: "blur",
		label: "Blur",
		title: "Blurred overlay",
		description:
			"Backdrop blur so content behind the drawer is visibly softened.",
	},
	{
		variant: "transparent",
		label: "Transparent",
		title: "Transparent overlay",
		description:
			"No dimmed backdrop \u2014 the page stays fully visible behind the drawer surface.",
	},
] as const;

export default function DrawerOverlayVariant() {
	return (
		<div className="flex flex-wrap gap-2">
			{variants.map((v) => (
				<Drawer key={v.variant}>
					<DrawerTrigger asChild>
						<Button variant="tertiary">{v.label}</Button>
					</DrawerTrigger>
					<DrawerContent overlayVariant={v.variant}>
						<DrawerHeader>
							<DrawerTitle>{v.title}</DrawerTitle>
							<DrawerDescription>{v.description}</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<DrawerClose asChild>
								<Button className="w-full">Cancel</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			))}
		</div>
	);
}
