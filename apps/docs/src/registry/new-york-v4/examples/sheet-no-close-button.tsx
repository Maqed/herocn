"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/registry/new-york-v4/ui/sheet";

export default function SheetNoCloseButton() {
	return (
		<Sheet>
			<SheetTrigger render={<Button variant="tertiary" />}>
				Open Sheet
			</SheetTrigger>
			<SheetContent showCloseButton={false}>
				<SheetHeader>
					<SheetTitle>No close button</SheetTitle>
					<SheetDescription>
						This sheet doesn&apos;t have a close button in the top-right corner.
						Click outside to close.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
