import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group";

export default function ToggleGroupDisabled() {
	return (
		<ToggleGroup multiple disabled>
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<BoldIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<ItalicIcon />
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Toggle underline">
				<UnderlineIcon />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
