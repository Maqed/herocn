import { Badge } from "@/registry/new-york-v4/ui/badge";

export default function BadgeSizes() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge size="sm">Small</Badge>
			<Badge>Default</Badge>
			<Badge size="lg">Large</Badge>
		</div>
	);
}
