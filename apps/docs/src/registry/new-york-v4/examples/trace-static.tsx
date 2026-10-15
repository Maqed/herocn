import { GitBranchIcon } from "lucide-react";

import {
	Trace,
	TraceIcon,
	TraceLine,
	TraceTitle,
} from "@/registry/new-york-v4/ui/trace";

export default function TraceStatic() {
	return (
		<Trace className="max-w-sm">
			<TraceLine>
				<TraceIcon>
					<GitBranchIcon />
				</TraceIcon>
				<TraceTitle>Created branch fix/frozen-lockfile</TraceTitle>
			</TraceLine>
		</Trace>
	);
}
