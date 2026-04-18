import { Badge } from "@/registry/new-york-v4/ui/badge";
import { Spinner } from "@/registry/new-york-v4/ui/spinner";

export default function SpinnerBadge() {
	return (
		<div className="flex items-center gap-4">
			<Badge>
				<Spinner data-icon="inline-start" size="sm" />
				Syncing
			</Badge>
			<Badge variant="primary">
				Updating
				<Spinner data-icon="inline-end" size="sm" />
			</Badge>
			<Badge variant="warning">
				<Spinner data-icon="inline-start" size="sm" />
				Processing
			</Badge>
		</div>
	);
}
