import {
	Field,
	FieldContent,
	FieldDescription,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function RadioGroupInSurface() {
	return (
		<Surface className="flex w-full max-w-sm flex-col gap-4 rounded-3xl p-6">
			<RadioGroup
				defaultValue="comfortable"
				variant="secondary"
				className="w-fit"
			>
				<Field orientation="horizontal">
					<RadioGroupItem value="default" id="radio-surf-r1" />
					<FieldContent>
						<FieldLabel htmlFor="radio-surf-r1">Default</FieldLabel>
						<FieldDescription>
							Standard spacing for most use cases.
						</FieldDescription>
					</FieldContent>
				</Field>
				<Field orientation="horizontal">
					<RadioGroupItem value="comfortable" id="radio-surf-r2" />
					<FieldContent>
						<FieldLabel htmlFor="radio-surf-r2">Comfortable</FieldLabel>
						<FieldDescription>More space between elements.</FieldDescription>
					</FieldContent>
				</Field>
				<Field orientation="horizontal">
					<RadioGroupItem value="compact" id="radio-surf-r3" />
					<FieldContent>
						<FieldLabel htmlFor="radio-surf-r3">Compact</FieldLabel>
						<FieldDescription>
							Minimal spacing for dense layouts.
						</FieldDescription>
					</FieldContent>
				</Field>
			</RadioGroup>
		</Surface>
	);
}
