"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import { toast } from "@/registry/new-york-v4/ui/toast";

export default function ToastPromise() {
	function showToast() {
		toast.promise(
			new Promise<{ name: string }>((resolve) => {
				window.setTimeout(() => resolve({ name: "Event" }), 2000);
			}),
			{
				loading: "Creating event…",
				success: (data) => `${data.name} created.`,
				error: "Could not create event.",
			},
		);
	}

	return (
		<Button variant="secondary" onClick={showToast}>
			Create Event
		</Button>
	);
}
