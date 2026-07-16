import {
	Marker,
	MarkerContent,
	MarkerIcon,
} from "@/registry/new-york-v4/ui/marker";
import { Spinner } from "@/registry/new-york-v4/ui/spinner";

export default function MarkerStatus() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-8 py-12">
			<Marker role="status">
				<MarkerIcon>
					<Spinner size="sm" />
				</MarkerIcon>
				<MarkerContent>Compacting conversation</MarkerContent>
			</Marker>
			<Marker variant="separator" role="status">
				<MarkerIcon>
					<Spinner size="sm" />
				</MarkerIcon>
				<MarkerContent>Running tests</MarkerContent>
			</Marker>
		</div>
	);
}
