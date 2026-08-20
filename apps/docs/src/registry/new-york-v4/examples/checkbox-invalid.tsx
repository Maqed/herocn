import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";

export default function CheckboxInvalid() {
	return (
		<FieldGroup className="mx-auto w-full max-w-xs">
			<Field orientation="horizontal" data-invalid>
				<Checkbox
					id="checkbox-invalid-terms"
					name="checkbox-invalid-terms"
					aria-invalid
				/>
				<FieldLabel htmlFor="checkbox-invalid-terms">
					Accept terms and conditions
				</FieldLabel>
			</Field>
		</FieldGroup>
	);
}
