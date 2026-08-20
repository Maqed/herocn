"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import { toast } from "@/registry/new-york-v4/ui/toast";

export default function ToastDemo() {
	function showToast() {
		const id = toast.add({
			title: "Event created",
			description: "Sunday, December 3 at 9:00 AM",
			actionProps: {
				children: "Undo",
				onClick() {
					toast.close(id);
				},
			},
		});
	}

	return (
		<Button variant="secondary" onClick={showToast}>
			Show Toast
		</Button>
	);
}
