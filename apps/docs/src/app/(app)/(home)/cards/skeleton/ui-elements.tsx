import { Card, CardContent } from "@/registry/new-york-v4/ui/card";
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton";

export function UIElements() {
	return (
		<Card className="w-full">
			<CardContent className="flex flex-col gap-6">
				<Skeleton className="h-8 w-full rounded-2xl" />
				<div className="flex flex-wrap gap-2">
					<Skeleton className="h-9 w-20 rounded-lg" />
					<Skeleton className="h-9 w-24 rounded-lg" />
					<Skeleton className="h-9 w-20 rounded-lg" />
				</div>
				<div className="flex flex-col gap-3">
					<Skeleton className="h-9 w-full rounded-lg" />
					<Skeleton className="h-20 w-full rounded-lg" />
				</div>
				<div className="flex items-center gap-2">
					<div className="flex gap-2">
						<Skeleton className="h-5 w-12 rounded-full" />
						<Skeleton className="h-5 w-16 rounded-full" />
						<Skeleton className="4xl:block hidden h-5 w-14 rounded-full" />
					</div>
					<div className="ml-auto flex gap-3">
						<Skeleton className="size-4 rounded-full" />
						<Skeleton className="size-4 rounded-full" />
					</div>
					<div className="flex gap-3">
						<Skeleton className="size-4 rounded-sm" />
						<Skeleton className="4xl:block hidden size-4 rounded-sm" />
					</div>
					<Skeleton className="ml-auto 4xl:hidden h-5 w-9 rounded-full" />
				</div>
				<div className="flex items-center gap-4">
					<Skeleton className="h-9 w-24 rounded-lg" />
					<div className="flex">
						<Skeleton className="h-9 w-28 rounded-r-none rounded-l-lg" />
						<Skeleton className="ml-px h-9 w-9 rounded-r-lg rounded-l-none" />
					</div>
					<Skeleton className="ml-auto 4xl:block hidden h-5 w-9 rounded-full" />
				</div>
			</CardContent>
		</Card>
	);
}
