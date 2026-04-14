import { InfoIcon } from "lucide-react";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupText,
} from "@/registry/new-york-v4/ui/input-group";

export default function InputInputGroup() {
	return (
		<div className="w-full max-w-sm">
			<Field>
				<FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
				<InputGroup>
					<InputGroupInput id="input-group-url" placeholder="example.com" />
					<InputGroupAddon>
						<InputGroupText>https://</InputGroupText>
					</InputGroupAddon>
					<InputGroupAddon align="inline-end">
						<InfoIcon />
					</InputGroupAddon>
				</InputGroup>
			</Field>
		</div>
	);
}
