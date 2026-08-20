import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldTitle,
} from "@/registry/new-york-v4/ui/field";

export default function CheckboxDemo() {
	return (
		<FieldGroup className="w-full max-w-sm">
			<Field orientation="horizontal">
				<Checkbox
					id="checkbox-demo-terms-2"
					name="checkbox-demo-terms-2"
					defaultChecked
				/>
				<FieldContent>
					<FieldLabel htmlFor="checkbox-demo-terms-2">
						Accept terms and conditions
					</FieldLabel>
					<FieldDescription>
						By clicking this checkbox, you agree to the terms.
					</FieldDescription>
				</FieldContent>
			</Field>
			<Field orientation="horizontal" data-disabled>
				<Checkbox
					id="checkbox-demo-notify-off"
					name="checkbox-demo-notify-off"
					disabled
				/>
				<FieldLabel htmlFor="checkbox-demo-notify-off">
					Enable notifications
				</FieldLabel>
			</Field>
			<FieldLabel>
				<Field orientation="horizontal">
					<Checkbox
						id="checkbox-demo-notify-on"
						name="checkbox-demo-notify-on"
						variant="secondary"
					/>
					<FieldContent>
						<FieldTitle>Enable notifications</FieldTitle>
						<FieldDescription>
							You can enable or disable notifications at any time.
						</FieldDescription>
					</FieldContent>
				</Field>
			</FieldLabel>
		</FieldGroup>
	);
}
