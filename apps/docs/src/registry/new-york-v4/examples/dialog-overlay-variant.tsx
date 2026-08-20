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
				<DialogTrigger render={<Button variant="secondary" />}>
					Opaque
				</DialogTrigger>
				<DialogContent overlayVariant="opaque">
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
				<DialogTrigger render={<Button variant="secondary" />}>
					Blur
				</DialogTrigger>
				<DialogContent overlayVariant="blur">
					<DialogHeader>
						<DialogTitle>Blurred overlay</DialogTitle>
						<DialogDescription>
							Backdrop blur so content behind the dialog is visibly softened.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
			<Dialog>
				<DialogTrigger render={<Button variant="secondary" />}>
					Transparent
				</DialogTrigger>
				<DialogContent overlayVariant="transparent">
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
