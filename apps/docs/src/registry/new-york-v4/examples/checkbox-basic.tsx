import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";

export default function CheckboxBasic() {
	return (
		<FieldGroup className="mx-auto w-full max-w-xs">
			<Field orientation="horizontal">
				<Checkbox id="checkbox-basic-terms" name="checkbox-basic-terms" />
				<FieldLabel htmlFor="checkbox-basic-terms">
					Accept terms and conditions
				</FieldLabel>
			</Field>
		</FieldGroup>
	);
}
