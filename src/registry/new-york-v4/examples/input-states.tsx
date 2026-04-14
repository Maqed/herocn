import { Input } from "@/registry/new-york-v4/ui/input";

export default function InputStates() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-3">
			<Input disabled placeholder="Disabled" />
			<Input aria-invalid placeholder="Invalid" defaultValue="Invalid value" />
		</div>
	);
}
