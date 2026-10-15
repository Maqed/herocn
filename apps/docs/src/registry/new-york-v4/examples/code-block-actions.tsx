"use client";

import { DownloadIcon, TerminalIcon, WrapTextIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	CodeBlock,
	CodeBlockActions,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockHeader,
	CodeBlockTitle,
} from "@/registry/new-york-v4/ui/code-block";

const output = `$ pnpm lint
apps/web/components/message-list.tsx
  18:22  error  'messages' is possibly 'undefined'. Add a guard before calling map
  42:7   warning  React Hook React.useEffect has a missing dependency: 'scrollToBottom'

✖ 2 problems (1 error, 1 warning)`;

function download(value: string, filename: string) {
	const url = URL.createObjectURL(new Blob([value], { type: "text/plain" }));
	const link = document.createElement("a");
	link.href = url;
	link.download = filename;
	link.click();
	URL.revokeObjectURL(url);
}

export default function CodeBlockActionsExample() {
	const [wrap, setWrap] = React.useState(true);

	return (
		<div className="w-full max-w-md">
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockTitle>
						<TerminalIcon />
						Terminal
					</CodeBlockTitle>
					<CodeBlockActions>
						<Button
							variant="ghost"
							size="icon-xs"
							aria-label="Wrap lines"
							aria-pressed={wrap}
							className="aria-pressed:text-foreground"
							onClick={() => setWrap(!wrap)}
						>
							<WrapTextIcon />
						</Button>
						<Button
							variant="ghost"
							size="icon-xs"
							aria-label="Download"
							onClick={() => download(output, "lint.log")}
						>
							<DownloadIcon />
						</Button>
						<CodeBlockCopyButton value={output} />
					</CodeBlockActions>
				</CodeBlockHeader>
				<CodeBlockContent wrap={wrap}>{output}</CodeBlockContent>
			</CodeBlock>
		</div>
	);
}
