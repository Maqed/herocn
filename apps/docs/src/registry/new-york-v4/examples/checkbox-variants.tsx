import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";

export default function CheckboxVariants() {
	return (
		<FieldGroup className="mx-auto w-full max-w-xs gap-4">
			<Field orientation="horizontal">
				<Checkbox id="checkbox-variant-default" />
				<FieldLabel htmlFor="checkbox-variant-default" className="font-normal">
					Default
				</FieldLabel>
			</Field>
			<Field orientation="horizontal">
				<Checkbox id="checkbox-variant-secondary" variant="secondary" />
				<FieldLabel
					htmlFor="checkbox-variant-secondary"
					className="font-normal"
				>
					Secondary
				</FieldLabel>
			</Field>
		</FieldGroup>
	);
}
