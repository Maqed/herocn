import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group";

export default function RadioGroupVariants() {
	return (
		<FieldGroup className="mx-auto w-full max-w-xs gap-4">
			<RadioGroup defaultValue="one" className="w-fit">
				<Field orientation="horizontal">
					<RadioGroupItem value="one" id="radio-var-def-1" />
					<FieldLabel htmlFor="radio-var-def-1" className="font-normal">
						Default
					</FieldLabel>
				</Field>
				<Field orientation="horizontal">
					<RadioGroupItem value="two" id="radio-var-def-2" />
					<FieldLabel htmlFor="radio-var-def-2" className="font-normal">
						Style
					</FieldLabel>
				</Field>
			</RadioGroup>
			<RadioGroup defaultValue="one" variant="secondary" className="w-fit">
				<Field orientation="horizontal">
					<RadioGroupItem value="one" id="radio-var-sec-1" />
					<FieldLabel htmlFor="radio-var-sec-1" className="font-normal">
						Secondary
					</FieldLabel>
				</Field>
				<Field orientation="horizontal">
					<RadioGroupItem value="two" id="radio-var-sec-2" />
					<FieldLabel htmlFor="radio-var-sec-2" className="font-normal">
						Style
					</FieldLabel>
				</Field>
			</RadioGroup>
		</FieldGroup>
	);
}
