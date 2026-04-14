import {
	CodeIcon,
	CopyIcon,
	CornerDownLeftIcon,
	RefreshCwIcon,
} from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupText,
	InputGroupTextarea,
} from "@/registry/new-york-v4/ui/input-group";

export default function InputGroupTextareaExample() {
	return (
		<div className="grid w-full max-w-md gap-4">
			<InputGroup>
				<InputGroupTextarea
					placeholder="console.log('Hello, world!');"
					className="min-h-[200px]"
				/>
				<InputGroupAddon align="block-end" className="border-t">
					<InputGroupText>Line 1, Column 1</InputGroupText>
					<InputGroupButton size="sm" className="ml-auto" variant="default">
						Run <CornerDownLeftIcon />
					</InputGroupButton>
				</InputGroupAddon>
				<InputGroupAddon align="block-start" className="border-b">
					<InputGroupText className="font-medium font-mono">
						<CodeIcon />
						script.js
					</InputGroupText>
					<InputGroupButton className="ml-auto" size="icon-sm">
						<RefreshCwIcon />
					</InputGroupButton>
					<InputGroupButton variant="ghost" size="icon-sm">
						<CopyIcon />
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
