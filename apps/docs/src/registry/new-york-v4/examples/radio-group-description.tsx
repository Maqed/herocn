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

export default function RadioGroupDescription() {
	return (
		<RadioGroup defaultValue="comfortable" className="w-fit">
			<Field orientation="horizontal">
				<RadioGroupItem value="default" id="radio-desc-r1" />
				<FieldContent>
					<FieldLabel htmlFor="radio-desc-r1">Default</FieldLabel>
					<FieldDescription>
						Standard spacing for most use cases.
					</FieldDescription>
				</FieldContent>
			</Field>
			<Field orientation="horizontal">
				<RadioGroupItem value="comfortable" id="radio-desc-r2" />
				<FieldContent>
					<FieldLabel htmlFor="radio-desc-r2">Comfortable</FieldLabel>
					<FieldDescription>More space between elements.</FieldDescription>
				</FieldContent>
			</Field>
			<Field orientation="horizontal">
				<RadioGroupItem value="compact" id="radio-desc-r3" />
				<FieldContent>
					<FieldLabel htmlFor="radio-desc-r3">Compact</FieldLabel>
					<FieldDescription>
						Minimal spacing for dense layouts.
					</FieldDescription>
				</FieldContent>
			</Field>
		</RadioGroup>
	);
}
