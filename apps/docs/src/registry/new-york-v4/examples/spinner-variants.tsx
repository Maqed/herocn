import { Spinner } from "@/registry/new-york-v4/ui/spinner";

export default function SpinnerVariants() {
	return (
		<div className="flex flex-wrap items-center gap-6">
			<Spinner variant="default" />
			<Spinner variant="primary" />
			<Spinner variant="success" />
			<Spinner variant="warning" />
			<Spinner variant="destructive" />
		</div>
	);
}
