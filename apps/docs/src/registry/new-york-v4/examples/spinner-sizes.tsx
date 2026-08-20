import { Spinner } from "@/registry/new-york-v4/ui/spinner";

export default function SpinnerSizes() {
	return (
		<div className="flex items-center gap-6">
			<Spinner size="sm" />
			<Spinner size="default" />
			<Spinner size="lg" />
			<Spinner size="xl" />
		</div>
	);
}
