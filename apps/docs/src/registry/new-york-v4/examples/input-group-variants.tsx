import { SearchIcon } from "lucide-react";

import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group";

export default function InputGroupVariants() {
	return (
		<div className="grid w-full max-w-sm gap-4">
			<InputGroup>
				<InputGroupInput placeholder="Default" />
				<InputGroupAddon>
					<SearchIcon />
				</InputGroupAddon>
			</InputGroup>
			<InputGroup variant="secondary">
				<InputGroupInput placeholder="Secondary" />
				<InputGroupAddon>
					<SearchIcon />
				</InputGroupAddon>
			</InputGroup>
		</div>
	);
}
