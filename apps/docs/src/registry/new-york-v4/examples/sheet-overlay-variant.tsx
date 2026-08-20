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

export default function SheetOverlayVariant() {
	return (
		<div className="flex flex-wrap gap-2">
			<Sheet>
				<SheetTrigger render={<Button variant="tertiary" />}>
					Opaque
				</SheetTrigger>
				<SheetContent overlayVariant="opaque" className="sm:max-w-sm">
					<SheetHeader>
						<SheetTitle>Opaque overlay</SheetTitle>
						<SheetDescription>
							Default dimmed backdrop without extra blur on the page behind the
							sheet.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
			<Sheet>
				<SheetTrigger render={<Button variant="tertiary" />}>Blur</SheetTrigger>
				<SheetContent overlayVariant="blur" className="sm:max-w-sm">
					<SheetHeader>
						<SheetTitle>Blurred overlay</SheetTitle>
						<SheetDescription>
							Backdrop blur so content behind the sheet is visibly softened.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
			<Sheet>
				<SheetTrigger render={<Button variant="tertiary" />}>
					Transparent
				</SheetTrigger>
				<SheetContent overlayVariant="transparent" className="sm:max-w-sm">
					<SheetHeader>
						<SheetTitle>Transparent overlay</SheetTitle>
						<SheetDescription>
							No dimmed backdrop - the page stays fully visible behind the sheet
							surface.
						</SheetDescription>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</div>
	);
}
