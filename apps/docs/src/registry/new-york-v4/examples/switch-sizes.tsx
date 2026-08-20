import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Switch } from "@/registry/new-york-v4/ui/switch";

export default function SwitchSizes() {
	return (
		<FieldGroup className="w-full max-w-[10rem]">
			<Field orientation="horizontal">
				<Switch id="switch-size-sm" size="sm" />
				<FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
			</Field>
			<Field orientation="horizontal">
				<Switch id="switch-size-default" size="default" />
				<FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
			</Field>
			<Field orientation="horizontal">
				<Switch id="switch-size-large" size="lg" />
				<FieldLabel htmlFor="switch-size-large">Large</FieldLabel>
			</Field>
		</FieldGroup>
	);
}
