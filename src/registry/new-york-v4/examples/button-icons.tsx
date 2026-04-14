import {
	ArrowRightIcon,
	DownloadIcon,
	SearchIcon,
	Trash2Icon,
} from "lucide-react";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function ButtonIcons() {
	return (
		<div className="flex flex-wrap items-center gap-3">
			<Button>
				<SearchIcon data-icon="inline-start" />
				Search
			</Button>
			<Button variant="secondary">
				<DownloadIcon data-icon="inline-start" />
				Download
			</Button>
			<Button variant="outline">
				Next
				<ArrowRightIcon data-icon="inline-end" />
			</Button>
			<Button variant="destructive">
				Delete <Trash2Icon data-icon="inline-end" />
			</Button>
		</div>
	);
}
