import { TerminalIcon } from "lucide-react";
import {
	CodeBlock,
	CodeBlockContent,
} from "@/registry/new-york-v4/ui/code-block";
import {
	TraceCollapsible,
	TraceCollapsibleContent,
	TraceCollapsibleTrigger,
	TraceIcon,
	TraceLine,
	TraceTitle,
} from "@/registry/new-york-v4/ui/trace";

export default function TraceCollapsibleDemo() {
	return (
		<div className="w-full max-w-sm">
			<TraceCollapsible>
				<TraceCollapsibleTrigger>
					<TraceLine>
						<TraceIcon>
							<TerminalIcon />
						</TraceIcon>
						<TraceTitle>Ran node --version</TraceTitle>
					</TraceLine>
				</TraceCollapsibleTrigger>
				<TraceCollapsibleContent>
					<CodeBlock size="sm">
						<CodeBlockContent wrap className="max-h-64">
							{"$ node --version\nv24.18.0"}
						</CodeBlockContent>
					</CodeBlock>
				</TraceCollapsibleContent>
			</TraceCollapsible>
		</div>
	);
}
