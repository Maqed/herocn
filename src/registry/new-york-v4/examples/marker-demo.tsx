import { GitBranchIcon, SearchIcon } from "lucide-react";

import {
	Marker,
	MarkerContent,
	MarkerIcon,
} from "@/registry/new-york-v4/ui/marker";
import { Spinner } from "@/registry/new-york-v4/ui/spinner";

export default function MarkerDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-8 py-12">
			<Marker>
				<MarkerIcon>
					<GitBranchIcon />
				</MarkerIcon>
				<MarkerContent>Switched to a new branch</MarkerContent>
			</Marker>
			<Marker role="status">
				<MarkerIcon>
					<Spinner size="sm" />
				</MarkerIcon>
				<MarkerContent className="shimmer">Thinking...</MarkerContent>
			</Marker>
			<Marker variant="separator">
				<MarkerContent>Conversation compacted</MarkerContent>
			</Marker>
			<Marker>
				<MarkerIcon>
					<SearchIcon />
				</MarkerIcon>
				<MarkerContent>Explored 4 files</MarkerContent>
			</Marker>
		</div>
	);
}
