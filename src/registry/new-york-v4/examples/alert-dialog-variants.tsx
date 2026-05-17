"use client";

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/registry/new-york-v4/ui/alert-dialog";
import { Button } from "@/registry/new-york-v4/ui/button";

const variants = [
	{
		variant: "opaque",
		label: "Opaque",
		title: "Opaque overlay",
		description:
			"Default dimmed backdrop without extra blur on the page behind the AlertDialog.",
	},
	{
		variant: "blur",
		label: "Blur",
		title: "Blurred overlay",
		description:
			"Backdrop blur so content behind the AlertDialog is visibly softened.",
	},
	{
		variant: "transparent",
		label: "Transparent",
		title: "Transparent overlay",
		description:
			"No dimmed backdrop \u2014 the page stays fully visible behind the AlertDialog surface.",
	},
] as const;

export default function AlertDialogOverlayVariant() {
	return (
		<div className="flex flex-wrap gap-2">
			{variants.map((v) => (
				<AlertDialog key={v.variant}>
					<AlertDialogTrigger render={<Button variant="tertiary" />}>
						{v.label}
					</AlertDialogTrigger>
					<AlertDialogContent
						overlayVariant={v.variant}
						className="sm:max-w-sm"
					>
						<AlertDialogHeader>
							<AlertDialogTitle>{v.title}</AlertDialogTitle>
							<AlertDialogDescription>{v.description}</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialog>
			))}
		</div>
	);
}
