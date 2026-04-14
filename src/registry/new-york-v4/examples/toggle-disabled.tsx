import { Toggle } from "@/registry/new-york-v4/ui/toggle";

export default function ToggleDisabled() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Toggle aria-label="Toggle disabled" disabled>
				Disabled
			</Toggle>
			<Toggle variant="ghost" aria-label="Toggle ghost disabled" disabled>
				Disabled
			</Toggle>
		</div>
	);
}
