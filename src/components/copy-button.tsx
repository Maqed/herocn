"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";

function legacyCopyToClipboard(value: string) {
	const textArea = document.createElement("textarea");
	textArea.value = value;
	textArea.setAttribute("readonly", "");
	textArea.style.position = "fixed";
	textArea.style.opacity = "0";
	textArea.style.pointerEvents = "none";

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();
	textArea.setSelectionRange(0, value.length);

	let hasCopied = false;
	try {
		hasCopied = document.execCommand("copy");
	} catch {
		hasCopied = false;
	}

	document.body.removeChild(textArea);
	return hasCopied;
}

export async function copyToClipboard(value: string) {
	if (typeof window === "undefined") {
		return false;
	}

	if (!value) {
		return false;
	}

	let hasCopied = false;

	if (navigator.clipboard?.writeText) {
		try {
			await navigator.clipboard.writeText(value);
			hasCopied = true;
		} catch {
			hasCopied = legacyCopyToClipboard(value);
		}
	} else {
		hasCopied = legacyCopyToClipboard(value);
	}

	if (!hasCopied) {
		return false;
	}

	return true;
}

export function CopyButton({
	value,
	className,
	variant = "ghost",
	...props
}: React.ComponentProps<typeof Button> & {
	value: string;
	src?: string;
	tooltip?: string;
}) {
	const [hasCopied, setHasCopied] = React.useState(false);

	React.useEffect(() => {
		if (hasCopied) {
			const timer = setTimeout(() => setHasCopied(false), 2000);
			return () => clearTimeout(timer);
		}
	}, [hasCopied]);

	return (
		<Button
			data-slot="copy-button"
			data-copied={hasCopied}
			size="icon"
			variant={variant}
			className={cn(
				"size-7 hover:opacity-100 focus-visible:opacity-100",
				className,
			)}
			onClick={async () => {
				const hasCopied = await copyToClipboard(value);

				if (hasCopied) {
					setHasCopied(true);
				}
			}}
			{...props}
		>
			<span className="sr-only">Copy</span>
			{hasCopied ? <CheckIcon /> : <CopyIcon />}
		</Button>
	);
}
