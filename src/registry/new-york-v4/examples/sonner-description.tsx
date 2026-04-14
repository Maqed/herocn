"use client";

import { toast } from "sonner";

import { Button } from "@/registry/new-york-v4/ui/button";

export function SonnerDescription() {
	return (
		<Button
			variant="tertiary"
			className="w-fit"
			onClick={() =>
				toast("Event has been created", {
					description: "Monday, January 3rd at 6:00pm",
				})
			}
		>
			Show Toast
		</Button>
	);
}
