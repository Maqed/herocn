import { BellIcon } from "lucide-react";

import {
	Alert,
	AlertAction,
	AlertDescription,
	AlertTitle,
} from "@/registry/new-york-v4/ui/alert";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function AlertActionExample() {
	return (
		<Alert className="max-w-md">
			<BellIcon />
			<AlertTitle>Dark mode is now available</AlertTitle>
			<AlertDescription>
				Enable it under your profile settings to get started.
			</AlertDescription>
			<AlertAction>
				<Button size="xs" variant="default">
					Enable
				</Button>
			</AlertAction>
		</Alert>
	);
}
