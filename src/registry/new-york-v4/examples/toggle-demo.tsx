import { BookmarkIcon } from "lucide-react";

import { Toggle } from "@/registry/new-york-v4/ui/toggle";

export default function ToggleDemo() {
	return (
		<Toggle aria-label="Toggle bookmark">
			<BookmarkIcon className="group-aria-pressed/toggle:fill-primary" />
			Bookmark
		</Toggle>
	);
}
