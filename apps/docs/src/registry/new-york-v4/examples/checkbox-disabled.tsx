import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";

export default function CheckboxDisabled() {
	return (
		<FieldGroup className="mx-auto w-full max-w-xs">
			<Field orientation="horizontal" data-disabled>
				<Checkbox
					id="checkbox-disabled-notify"
					name="checkbox-disabled-notify"
					disabled
				/>
				<FieldLabel htmlFor="checkbox-disabled-notify">
					Enable notifications
				</FieldLabel>
			</Field>
		</FieldGroup>
	);
}
