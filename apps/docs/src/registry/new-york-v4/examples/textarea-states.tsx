import { Textarea } from "@/registry/new-york-v4/ui/textarea";

export default function TextareaStates() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-3">
			<Textarea disabled placeholder="Disabled" rows={3} />
			<Textarea
				aria-invalid
				placeholder="Invalid"
				defaultValue="Invalid value"
				rows={3}
			/>
		</div>
	);
}
