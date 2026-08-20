import { InfoIcon } from "lucide-react";

import {
	Bubble,
	BubbleContent,
	BubbleReactions,
} from "@/registry/new-york-v4/ui/bubble";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export default function BubblePopoverDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4 py-12">
			<Bubble align="end">
				<BubbleContent>Run the build script.</BubbleContent>
			</Bubble>
			<Bubble variant="destructive">
				<BubbleContent>Failed to run the command.</BubbleContent>
				<BubbleReactions>
					<Popover>
						<PopoverTrigger
							render={
								<Button
									variant="ghost"
									size="icon-xs"
									aria-label="Show error details"
									className="aria-expanded:text-destructive"
								/>
							}
						>
							<InfoIcon />
						</PopoverTrigger>
						<PopoverContent>
							<PopoverHeader>
								<PopoverTitle className="text-sm">
									Command failed with exit code 1
								</PopoverTitle>
								<PopoverDescription className="text-sm">
									ENOENT: no such file or directory, open pnpm-lock.yaml
								</PopoverDescription>
							</PopoverHeader>
						</PopoverContent>
					</Popover>
				</BubbleReactions>
			</Bubble>
		</div>
	);
}
