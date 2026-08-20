import { Badge } from "@/registry/new-york-v4/ui/badge";

export default function BadgeColors() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge className="bg-green-50 text-green-900 dark:bg-green-800 dark:text-green-50">
				Custom green
			</Badge>
			<Badge className="bg-blue-50 text-blue-900 dark:bg-blue-800 dark:text-blue-50">
				Custom blue
			</Badge>
			<Badge className="bg-amber-50 text-amber-900 dark:bg-amber-800 dark:text-amber-50">
				Custom amber
			</Badge>
		</div>
	);
}
