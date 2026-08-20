import { BoldIcon, ItalicIcon } from "lucide-react";

import { Toggle } from "@/registry/new-york-v4/ui/toggle";

export default function ToggleGhost() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Toggle variant="ghost" aria-label="Toggle italic">
				<ItalicIcon />
				Italic
			</Toggle>
			<Toggle variant="ghost" aria-label="Toggle bold">
				<BoldIcon />
				Bold
			</Toggle>
		</div>
	);
}
