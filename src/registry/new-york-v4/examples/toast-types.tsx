"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import { toast } from "@/registry/new-york-v4/ui/toast";

export default function ToastTypes() {
	return (
		<div className="flex flex-wrap gap-2">
			<Button
				variant="tertiary"
				onClick={() => toast.add({ title: "Event has been created." })}
			>
				Default
			</Button>
			<Button
				variant="tertiary"
				className="text-success-soft-foreground"
				onClick={() =>
					toast.add({
						type: "success",
						title: "Event has been created.",
					})
				}
			>
				Success
			</Button>
			<Button
				variant="tertiary"
				className="text-primary-soft-foreground"
				onClick={() =>
					toast.add({
						type: "info",
						title: "Arrive 10 minutes before the event.",
					})
				}
			>
				Info
			</Button>
			<Button
				variant="tertiary"
				className="text-warning-soft-foreground"
				onClick={() =>
					toast.add({
						type: "warning",
						title: "The event cannot start before 8:00 AM.",
					})
				}
			>
				Warning
			</Button>
			<Button
				variant="destructive-soft"
				onClick={() =>
					toast.add({
						type: "error",
						title: "The event could not be created.",
						priority: "high",
					})
				}
			>
				Error
			</Button>
		</div>
	);
}
