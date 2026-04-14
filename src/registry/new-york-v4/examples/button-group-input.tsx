import { SearchIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";
import { Input } from "@/registry/new-york-v4/ui/input";

export default function ButtonGroupInput() {
	return (
		<ButtonGroup className="max-w-sm">
			<Input variant="secondary" placeholder="Search..." />
			<Button variant="tertiary" aria-label="Search">
				<SearchIcon />
			</Button>
		</ButtonGroup>
	);
}
