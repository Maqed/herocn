import {
	CircleAlertIcon,
	CircleCheckIcon,
	CircleIcon,
	LoaderCircleIcon,
} from "lucide-react";

import {
	Trace,
	TraceIcon,
	TraceLine,
	TraceTitle,
} from "@/registry/new-york-v4/ui/trace";

export default function TraceStatus() {
	return (
		<Trace className="max-w-sm">
			<TraceLine>
				<TraceIcon>
					<CircleCheckIcon />
				</TraceIcon>
				<TraceTitle>Ran pnpm install</TraceTitle>
			</TraceLine>
			<TraceLine status="error">
				<TraceIcon>
					<CircleAlertIcon />
				</TraceIcon>
				<TraceTitle>Failed to run pnpm lint</TraceTitle>
			</TraceLine>
			<TraceLine status="running">
				<TraceIcon>
					<LoaderCircleIcon className="animate-spin" />
				</TraceIcon>
				<TraceTitle>Running pnpm build</TraceTitle>
			</TraceLine>
			<TraceLine status="pending">
				<TraceIcon>
					<CircleIcon />
				</TraceIcon>
				<TraceTitle>Run pnpm test</TraceTitle>
			</TraceLine>
		</Trace>
	);
}
