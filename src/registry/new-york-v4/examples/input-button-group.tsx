import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";

export default function InputButtonGroup() {
	return (
		<div className="w-full max-w-sm">
			<Field>
				<FieldLabel htmlFor="input-button-group">Search</FieldLabel>
				<ButtonGroup>
					<Input
						id="input-button-group"
						variant="secondary"
						placeholder="Type to search..."
					/>
					<Button variant="tertiary">Search</Button>
				</ButtonGroup>
			</Field>
		</div>
	);
}
