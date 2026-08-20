import { Spinner } from "@/registry/new-york-v4/ui/spinner";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function SpinnerDemo() {
	return (
		<Surface className="flex w-full max-w-sm items-center gap-3 rounded-3xl p-6">
			<Spinner />
			<div className="flex min-w-0 flex-1 flex-col">
				<span className="truncate font-medium text-base">
					Processing payment...
				</span>
				<span className="text-muted-foreground text-sm">Please wait</span>
			</div>
			<span className="text-base tabular-nums">$100.00</span>
		</Surface>
	);
}
