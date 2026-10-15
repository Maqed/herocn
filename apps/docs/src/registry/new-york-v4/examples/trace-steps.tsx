import { ChevronRightIcon, FileTextIcon, SearchIcon } from "lucide-react";
import { Badge } from "@/registry/new-york-v4/ui/badge";
import {
	CodeBlock,
	CodeBlockContent,
} from "@/registry/new-york-v4/ui/code-block";
import {
	Trace,
	TraceCollapsible,
	TraceCollapsibleContent,
	TraceCollapsibleTrigger,
	TraceIcon,
	TraceLine,
	TraceTitle,
} from "@/registry/new-york-v4/ui/trace";

export default function TraceSteps() {
	return (
		<div className="w-full max-w-sm">
			<TraceCollapsible defaultOpen>
				<TraceCollapsibleTrigger>
					<TraceLine status="running">
						<TraceTitle>Looking into the slow deploy</TraceTitle>
					</TraceLine>
				</TraceCollapsibleTrigger>
				<TraceCollapsibleContent keepMounted>
					<Trace>
						<TraceCollapsible>
							<TraceCollapsibleTrigger>
								<TraceLine>
									<TraceIcon>
										<SearchIcon />
									</TraceIcon>
									<TraceTitle>Searched for the checkout build log</TraceTitle>
								</TraceLine>
							</TraceCollapsibleTrigger>
							<TraceCollapsibleContent className="flex flex-wrap gap-1.5">
								<Badge>vercel.com</Badge>
								<Badge>github.com</Badge>
							</TraceCollapsibleContent>
						</TraceCollapsible>
						<a href="#trace-steps">
							<TraceLine>
								<TraceIcon>
									<FileTextIcon />
								</TraceIcon>
								<TraceTitle>Read the last twelve deploys</TraceTitle>
								<TraceIcon>
									<ChevronRightIcon />
								</TraceIcon>
							</TraceLine>
						</a>
						<TraceCollapsible>
							<TraceCollapsibleTrigger>
								<TraceLine status="running">
									<TraceIcon>
										<SearchIcon />
									</TraceIcon>
									<TraceTitle>Searching for the cache key</TraceTitle>
								</TraceLine>
							</TraceCollapsibleTrigger>
							<TraceCollapsibleContent>
								<CodeBlock size="sm">
									<CodeBlockContent wrap className="max-h-64">
										cache key image optimization
									</CodeBlockContent>
								</CodeBlock>
							</TraceCollapsibleContent>
						</TraceCollapsible>
					</Trace>
				</TraceCollapsibleContent>
			</TraceCollapsible>
		</div>
	);
}
