"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog";

export default function DialogOverlayVariant() {
	return (
		<div className="flex flex-wrap gap-2">
			<Dialog>
				<DialogTrigger render={<Button variant="tertiary" />}>
					Opaque
				</DialogTrigger>
				<DialogContent overlayVariant="opaque" className="sm:max-w-sm">
					<DialogHeader>
						<DialogTitle>Opaque overlay</DialogTitle>
						<DialogDescription>
							Default dimmed backdrop without extra blur on the page behind the
							dialog.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
			<Dialog>
				<DialogTrigger render={<Button variant="tertiary" />}>
					Blur
				</DialogTrigger>
				<DialogContent overlayVariant="blur" className="sm:max-w-sm">
					<DialogHeader>
						<DialogTitle>Blurred overlay</DialogTitle>
						<DialogDescription>
							Backdrop blur so content behind the dialog is visibly softened.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
			<Dialog>
				<DialogTrigger render={<Button variant="tertiary" />}>
					Transparent
				</DialogTrigger>
				<DialogContent overlayVariant="transparent" className="sm:max-w-sm">
					<DialogHeader>
						<DialogTitle>Transparent overlay</DialogTitle>
						<DialogDescription>
							No dimmed backdrop — the page stays fully visible behind the
							dialog surface.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
