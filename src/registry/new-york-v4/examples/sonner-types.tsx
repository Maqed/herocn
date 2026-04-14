"use client";

import { toast } from "sonner";

import { Button } from "@/registry/new-york-v4/ui/button";

export function SonnerTypes() {
	return (
		<div className="flex flex-wrap gap-2">
			<Button
				variant="tertiary"
				onClick={() => toast("Event has been created")}
			>
				Default
			</Button>
			<Button
				variant="tertiary"
				className="text-success"
				onClick={() => toast.success("Event has been created")}
			>
				Success
			</Button>
			<Button
				variant="tertiary"
				className="text-primary"
				onClick={() =>
					toast.info("Be at the area 10 minutes before the event time")
				}
			>
				Info
			</Button>
			<Button
				variant="tertiary"
				className="text-warning"
				onClick={() =>
					toast.warning("Event start time cannot be earlier than 8am")
				}
			>
				Warning
			</Button>
			<Button
				variant="tertiary"
				className="text-destructive"
				onClick={() => toast.error("Event has not been created")}
			>
				Error
			</Button>
			<Button
				variant="tertiary"
				onClick={() => {
					toast.promise<{ name: string }>(
						() =>
							new Promise((resolve) =>
								setTimeout(() => resolve({ name: "Event" }), 2000),
							),
						{
							loading: "Loading...",
							success: (data) => `${data.name} has been created`,
							error: "Error",
						},
					);
				}}
			>
				Promise
			</Button>
		</div>
	);
}
