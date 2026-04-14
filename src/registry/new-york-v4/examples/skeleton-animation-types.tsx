import { Skeleton } from "@/registry/new-york-v4/ui/skeleton";

export default function SkeletonAnimationTypes() {
	return (
		<div className="grid w-full max-w-xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<div className="space-y-2">
				<p className="truncate text-muted-foreground text-xs">Shimmer</p>
				<div className="space-y-3 rounded-lg bg-transparent p-4 shadow-panel">
					<Skeleton animationType="shimmer" className="h-20 rounded-lg" />
					<Skeleton animationType="shimmer" className="h-3 w-3/5 rounded-lg" />
					<Skeleton animationType="shimmer" className="h-3 w-4/5 rounded-lg" />
				</div>
			</div>

			<div className="space-y-2">
				<p className="truncate text-muted-foreground text-xs">Pulse</p>
				<div className="space-y-3 rounded-lg bg-transparent p-4 shadow-panel">
					<Skeleton animationType="pulse" className="h-20 rounded-lg" />
					<Skeleton animationType="pulse" className="h-3 w-3/5 rounded-lg" />
					<Skeleton animationType="pulse" className="h-3 w-4/5 rounded-lg" />
				</div>
			</div>

			<div className="space-y-2">
				<p className="truncate text-muted-foreground text-xs">None</p>
				<div className="space-y-3 rounded-lg bg-transparent p-4 shadow-panel">
					<Skeleton animationType="none" className="h-20 rounded-lg" />
					<Skeleton animationType="none" className="h-3 w-3/5 rounded-lg" />
					<Skeleton animationType="none" className="h-3 w-4/5 rounded-lg" />
				</div>
			</div>
		</div>
	);
}
