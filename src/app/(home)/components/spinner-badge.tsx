import { Badge } from "@/registry/new-york-v4/ui/badge";
import { Spinner } from "@/registry/new-york-v4/ui/spinner";

export function SpinnerBadge() {
	return (
		<div className="flex items-center gap-2">
			<Badge>
				<Spinner />
				Syncing
			</Badge>
			<Badge variant="primary">
				<Spinner />
				Updating
			</Badge>
			<Badge>
				<Spinner />
				Loading
			</Badge>
		</div>
	);
}
