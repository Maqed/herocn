"use client";

import { BluetoothIcon } from "lucide-react";
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

export default function AlertDialogSmallWithMedia() {
	return (
		<AlertDialog>
			<AlertDialogTrigger
				render={<Button variant="tertiary">Show Dialog</Button>}
			/>
			<AlertDialogContent size="sm">
				<AlertDialogHeader>
					<AlertDialogMedia>
						<BluetoothIcon />
					</AlertDialogMedia>
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
