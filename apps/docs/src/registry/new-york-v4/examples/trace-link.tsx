import {
	ArrowUpRightIcon,
	ChevronRightIcon,
	FileTextIcon,
	GlobeIcon,
} from "lucide-react";

import {
	Trace,
	TraceIcon,
	TraceLine,
	TraceTitle,
} from "@/registry/new-york-v4/ui/trace";

export default function TraceLink() {
	return (
		<Trace className="max-w-sm">
			<a href="#trace-link">
				<TraceLine>
					<TraceIcon>
						<FileTextIcon />
					</TraceIcon>
					<TraceTitle>Read apps/docs/lib/docs.ts</TraceTitle>
					<TraceIcon>
						<ChevronRightIcon />
					</TraceIcon>
				</TraceLine>
			</a>
			<a
				href="https://docs.astro.build/en/install-and-setup/"
				target="_blank"
				rel="noreferrer"
			>
				<TraceLine>
					<TraceIcon>
						<GlobeIcon />
					</TraceIcon>
					<TraceTitle>
						Install Astro | docs.astro.build
						<span className="sr-only"> (opens in a new tab)</span>
					</TraceTitle>
					<TraceIcon>
						<ArrowUpRightIcon />
					</TraceIcon>
				</TraceLine>
			</a>
		</Trace>
	);
}
