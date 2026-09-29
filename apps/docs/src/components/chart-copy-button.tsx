"use client";

import { Check, Copy } from "lucide-react";

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

export function ChartCopyButton({
	name,
	code,
	className,
	...props
}: {
	name: string;
	code: string;
} & React.ComponentProps<typeof Button>) {
	const { copyToClipboard, isCopied } = useCopyToClipboard();

	return (
		<Tooltip>
			<TooltipTrigger
				render={
					<Button
						size="icon-xs"
						variant="outline"
						onClick={() => copyToClipboard(code)}
						{...props}
					/>
				}
			>
				<span className="sr-only">Copy {name}</span>
				{isCopied ? <Check /> : <Copy />}
			</TooltipTrigger>
			<TooltipContent>Copy code</TooltipContent>
		</Tooltip>
	);
}
