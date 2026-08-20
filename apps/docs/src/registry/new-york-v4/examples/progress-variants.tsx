import { Progress } from "@/registry/new-york-v4/ui/progress";

export default function ProgressVariants() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<div className="space-y-1">
				<p className="text-muted-foreground text-xs">Default</p>
				<Progress value={45} variant="default" className="w-full" />
			</div>
			<div className="space-y-1">
				<p className="text-muted-foreground text-xs">Primary</p>
				<Progress value={50} variant="primary" className="w-full" />
			</div>
			<div className="space-y-1">
				<p className="text-muted-foreground text-xs">Success</p>
				<Progress value={72} variant="success" className="w-full" />
			</div>
			<div className="space-y-1">
				<p className="text-muted-foreground text-xs">Warning</p>
				<Progress value={38} variant="warning" className="w-full" />
			</div>
			<div className="space-y-1">
				<p className="text-muted-foreground text-xs">Destructive</p>
				<Progress value={88} variant="destructive" className="w-full" />
			</div>
		</div>
	);
}
