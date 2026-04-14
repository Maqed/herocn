import { SearchIcon } from "lucide-react";

import { Field, FieldError, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupTextarea,
} from "@/registry/new-york-v4/ui/input-group";

export default function InputGroupInvalid() {
	return (
		<div className="grid w-full max-w-sm gap-6">
			<Field data-invalid>
				<FieldLabel htmlFor="invalid-input">Search</FieldLabel>
				<InputGroup>
					<InputGroupInput
						id="invalid-input"
						aria-invalid
						placeholder="Search..."
					/>
					<InputGroupAddon>
						<SearchIcon />
					</InputGroupAddon>
				</InputGroup>
				<FieldError>Please enter a valid search term.</FieldError>
			</Field>
			<Field data-invalid>
				<FieldLabel htmlFor="invalid-textarea">Message</FieldLabel>
				<InputGroup>
					<InputGroupTextarea
						id="invalid-textarea"
						aria-invalid
						placeholder="Enter your message..."
					/>
				</InputGroup>
				<FieldError>Message cannot be empty.</FieldError>
			</Field>
		</div>
	);
}
