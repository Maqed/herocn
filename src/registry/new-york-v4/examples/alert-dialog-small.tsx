"use client";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/registry/new-york-v4/ui/alert-dialog";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function AlertDialogSmall() {
	return (
		<AlertDialog>
			<AlertDialogTrigger
				render={<Button variant="tertiary">Show Dialog</Button>}
			/>
			<AlertDialogContent size="sm">
				<AlertDialogHeader>
					<AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
					<AlertDialogDescription>
						Do you want to allow the USB accessory to connect to this device?
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Don&apos;t allow</AlertDialogCancel>
					<AlertDialogAction>Allow</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
