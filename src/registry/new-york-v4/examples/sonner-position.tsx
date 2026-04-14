"use client";

import { toast } from "sonner";

import { Button } from "@/registry/new-york-v4/ui/button";

export function SonnerPosition() {
	return (
		<div className="flex flex-wrap justify-center gap-2">
			<Button
				variant="tertiary"
				onClick={() =>
					toast("Event has been created", { position: "top-left" })
				}
			>
				Top Left
			</Button>
			<Button
				variant="tertiary"
				onClick={() =>
					toast("Event has been created", { position: "top-center" })
				}
			>
				Top Center
			</Button>
			<Button
				variant="tertiary"
				onClick={() =>
					toast("Event has been created", { position: "top-right" })
				}
			>
				Top Right
			</Button>
			<Button
				variant="tertiary"
				onClick={() =>
					toast("Event has been created", { position: "bottom-left" })
				}
			>
				Bottom Left
			</Button>
			<Button
				variant="tertiary"
				onClick={() =>
					toast("Event has been created", { position: "bottom-center" })
				}
			>
				Bottom Center
			</Button>
			<Button
				variant="tertiary"
				onClick={() =>
					toast("Event has been created", { position: "bottom-right" })
				}
			>
				Bottom Right
			</Button>
		</div>
	);
}
