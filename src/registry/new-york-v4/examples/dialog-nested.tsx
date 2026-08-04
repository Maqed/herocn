"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog";

export default function DialogNested() {
	return (
		<Dialog>
			<DialogTrigger render={<Button variant="secondary" />}>
				Open
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Notifications</DialogTitle>
					<DialogDescription>
						You are all caught up. Good job!
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Dialog>
						<DialogTrigger render={<Button />}>Customize</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Customize notifications</DialogTitle>
								<DialogDescription>
									Review your settings here.
								</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<Dialog>
									<DialogTrigger render={<Button />}>Advanced</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Advanced settings</DialogTitle>
											<DialogDescription>
												Adjust the advanced notification settings.
											</DialogDescription>
										</DialogHeader>
										<DialogFooter>
											<DialogClose render={<Button variant="secondary" />}>
												Close
											</DialogClose>
										</DialogFooter>
									</DialogContent>
								</Dialog>
								<DialogClose render={<Button variant="secondary" />}>
									Close
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
					<DialogClose render={<Button variant="secondary" />}>
						Close
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
