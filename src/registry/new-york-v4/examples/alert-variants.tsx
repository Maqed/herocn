import {
	AlertCircleIcon,
	CheckCircle2Icon,
	InfoIcon,
	TriangleAlertIcon,
} from "lucide-react";

import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@/registry/new-york-v4/ui/alert";

export default function AlertVariants() {
	return (
		<div className="grid w-full max-w-md items-start gap-4">
			<Alert>
				<InfoIcon />
				<AlertTitle>Default alert</AlertTitle>
				<AlertDescription>
					Use this for neutral updates and general information.
				</AlertDescription>
			</Alert>
			<Alert variant="primary">
				<InfoIcon />
				<AlertTitle>Primary alert</AlertTitle>
				<AlertDescription>
					Highlight important product updates and highlighted guidance.
				</AlertDescription>
			</Alert>
			<Alert variant="success">
				<CheckCircle2Icon />
				<AlertTitle>Success alert</AlertTitle>
				<AlertDescription>
					Your profile was updated successfully and synced across devices.
				</AlertDescription>
			</Alert>
			<Alert variant="warning">
				<TriangleAlertIcon />
				<AlertTitle>Warning alert</AlertTitle>
				<AlertDescription>
					Your trial will expire in three days unless you update billing.
				</AlertDescription>
			</Alert>
			<Alert variant="destructive">
				<AlertCircleIcon />
				<AlertTitle>Destructive alert</AlertTitle>
				<AlertDescription>
					Your payment could not be processed. Please try another card.
				</AlertDescription>
			</Alert>
		</div>
	);
}
