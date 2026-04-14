"use client";

import { CheckIcon, CopyIcon, StarIcon } from "lucide-react";
import * as React from "react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group";

export default function InputGroupButtonExample() {
	const [isCopied, setIsCopied] = React.useState(false);
	const [isFavorite, setIsFavorite] = React.useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText("https://x.com/0xMaqed");
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<div className="grid w-full max-w-sm gap-6">
			<InputGroup>
				<InputGroupInput placeholder="https://x.com/0xMaqed" readOnly />
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						aria-label="Copy"
						title="Copy"
						size="icon-sm"
						onClick={handleCopy}
					>
						{isCopied ? <CheckIcon /> : <CopyIcon />}
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupInput placeholder="Type to search..." />
				<InputGroupAddon align="inline-end">
					<InputGroupButton variant="secondary">Search</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
			<InputGroup>
				<InputGroupInput placeholder="Add to favorites..." />
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						onClick={() => setIsFavorite(!isFavorite)}
						size="icon-sm"
					>
						<StarIcon
							data-favorite={isFavorite}
							className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
						/>
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
