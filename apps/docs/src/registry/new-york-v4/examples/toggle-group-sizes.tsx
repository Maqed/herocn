import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group";

export default function ToggleGroupSizes() {
	return (
		<div className="flex flex-col items-start gap-4">
			<ToggleGroup size="sm" defaultValue={["top"]}>
				<ToggleGroupItem value="top" aria-label="Toggle top">
					Top
				</ToggleGroupItem>
				<ToggleGroupItem value="bottom" aria-label="Toggle bottom">
					Bottom
				</ToggleGroupItem>
				<ToggleGroupItem value="left" aria-label="Toggle left">
					Left
				</ToggleGroupItem>
				<ToggleGroupItem value="right" aria-label="Toggle right">
					Right
				</ToggleGroupItem>
			</ToggleGroup>
			<ToggleGroup size="default" defaultValue={["top"]}>
				<ToggleGroupItem value="top" aria-label="Toggle top">
					Top
				</ToggleGroupItem>
				<ToggleGroupItem value="bottom" aria-label="Toggle bottom">
					Bottom
				</ToggleGroupItem>
				<ToggleGroupItem value="left" aria-label="Toggle left">
					Left
				</ToggleGroupItem>
				<ToggleGroupItem value="right" aria-label="Toggle right">
					Right
				</ToggleGroupItem>
			</ToggleGroup>
			<ToggleGroup size="lg" defaultValue={["top"]}>
				<ToggleGroupItem value="top" aria-label="Toggle top">
					Top
				</ToggleGroupItem>
				<ToggleGroupItem value="bottom" aria-label="Toggle bottom">
					Bottom
				</ToggleGroupItem>
				<ToggleGroupItem value="left" aria-label="Toggle left">
					Left
				</ToggleGroupItem>
				<ToggleGroupItem value="right" aria-label="Toggle right">
					Right
				</ToggleGroupItem>
			</ToggleGroup>
		</div>
	);
}
