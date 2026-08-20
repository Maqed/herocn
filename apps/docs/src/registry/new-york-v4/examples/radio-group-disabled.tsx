import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group";

export default function RadioGroupDisabled() {
	return (
		<RadioGroup defaultValue="option2" className="w-fit">
			<Field orientation="horizontal" data-disabled>
				<RadioGroupItem value="option1" id="radio-dis-1" disabled />
				<FieldLabel htmlFor="radio-dis-1" className="font-normal">
					Disabled
				</FieldLabel>
			</Field>
			<Field orientation="horizontal">
				<RadioGroupItem value="option2" id="radio-dis-2" />
				<FieldLabel htmlFor="radio-dis-2" className="font-normal">
					Option 2
				</FieldLabel>
			</Field>
			<Field orientation="horizontal">
				<RadioGroupItem value="option3" id="radio-dis-3" />
				<FieldLabel htmlFor="radio-dis-3" className="font-normal">
					Option 3
				</FieldLabel>
			</Field>
		</RadioGroup>
	);
}
