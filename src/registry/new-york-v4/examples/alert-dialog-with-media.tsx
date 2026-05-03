"use client";

import { CircleFadingPlusIcon } from "lucide-react";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogMedia,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/registry/new-york-v4/ui/alert-dialog";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function AlertDialogWithMedia() {
	return (
		<AlertDialog>
			<AlertDialogTrigger
				render={<Button variant="tertiary">Share Project</Button>}
			/>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogMedia>
						<CircleFadingPlusIcon />
					</AlertDialogMedia>
					<AlertDialogTitle>Share this project?</AlertDialogTitle>
					<AlertDialogDescription>
						Anyone with the link will be able to view and edit this project.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction>Share</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
