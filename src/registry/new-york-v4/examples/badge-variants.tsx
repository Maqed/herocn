import { Badge } from "@/registry/new-york-v4/ui/badge";

export default function BadgeVariants() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Badge>Default</Badge>
			<Badge variant="primary">Primary</Badge>
			<Badge variant="success">Success</Badge>
			<Badge variant="warning">Warning</Badge>
			<Badge variant="destructive">Destructive</Badge>
		</div>
	);
}
