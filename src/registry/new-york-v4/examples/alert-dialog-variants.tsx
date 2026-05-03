"use client";

import {
	AlertDialog,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/registry/new-york-v4/ui/alert-dialog";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function AlertDialogOverlayVariant() {
	return (
		<div className="flex flex-wrap gap-2">
			<AlertDialog>
				<AlertDialogTrigger render={<Button variant="tertiary" />}>
					Opaque
				</AlertDialogTrigger>
				<AlertDialogContent overlayVariant="opaque" className="sm:max-w-sm">
					<AlertDialogHeader>
						<AlertDialogTitle>Opaque overlay</AlertDialogTitle>
						<AlertDialogDescription>
							Default dimmed backdrop without extra blur on the page behind the
							AlertDialog.
						</AlertDialogDescription>
					</AlertDialogHeader>
				</AlertDialogContent>
			</AlertDialog>
			<AlertDialog>
				<AlertDialogTrigger render={<Button variant="tertiary" />}>
					Blur
				</AlertDialogTrigger>
				<AlertDialogContent overlayVariant="blur" className="sm:max-w-sm">
					<AlertDialogHeader>
						<AlertDialogTitle>Blurred overlay</AlertDialogTitle>
						<AlertDialogDescription>
							Backdrop blur so content behind the AlertDialog is visibly
							softened.
						</AlertDialogDescription>
					</AlertDialogHeader>
				</AlertDialogContent>
			</AlertDialog>
			<AlertDialog>
				<AlertDialogTrigger render={<Button variant="tertiary" />}>
					Transparent
				</AlertDialogTrigger>
				<AlertDialogContent
					overlayVariant="transparent"
					className="sm:max-w-sm"
				>
					<AlertDialogHeader>
						<AlertDialogTitle>Transparent overlay</AlertDialogTitle>
						<AlertDialogDescription>
							No dimmed backdrop — the page stays fully visible behind the
							AlertDialog surface.
						</AlertDialogDescription>
					</AlertDialogHeader>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
