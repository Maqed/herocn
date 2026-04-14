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

export default function DialogNoCloseButton() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="tertiary" />}>
				No Close Button
			</DialogTrigger>
			<DialogContent showCloseButton={false}>
				<DialogHeader>
					<DialogTitle>No Close Button</DialogTitle>
					<DialogDescription>
						This dialog doesn&apos;t have a close button in the top-right
						corner.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
