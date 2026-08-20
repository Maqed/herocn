import {
	Field,
	FieldDescription,
	FieldLabel,
	FieldLegend,
	FieldSet,
} from "@/registry/new-york-v4/ui/field";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group";

export default function RadioGroupInvalid() {
	return (
		<FieldSet className="w-full max-w-xs">
			<FieldLegend variant="label">Notification Preferences</FieldLegend>
			<FieldDescription>
				Choose how you want to receive notifications.
			</FieldDescription>
			<RadioGroup defaultValue="email">
				<Field orientation="horizontal" data-invalid>
					<RadioGroupItem value="email" id="radio-inv-email" aria-invalid />
					<FieldLabel htmlFor="radio-inv-email" className="font-normal">
						Email only
					</FieldLabel>
				</Field>
				<Field orientation="horizontal" data-invalid>
					<RadioGroupItem value="sms" id="radio-inv-sms" aria-invalid />
					<FieldLabel htmlFor="radio-inv-sms" className="font-normal">
						SMS only
					</FieldLabel>
				</Field>
				<Field orientation="horizontal" data-invalid>
					<RadioGroupItem value="both" id="radio-inv-both" aria-invalid />
					<FieldLabel htmlFor="radio-inv-both" className="font-normal">
						Both Email & SMS
					</FieldLabel>
				</Field>
			</RadioGroup>
		</FieldSet>
	);
}
