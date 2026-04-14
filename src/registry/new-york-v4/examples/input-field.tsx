import {
	Field,
	FieldDescription,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";

export default function InputField() {
	return (
		<div className="w-full max-w-sm">
			<Field>
				<FieldLabel htmlFor="input-field-username">Username</FieldLabel>
				<Input
					id="input-field-username"
					type="text"
					placeholder="Enter your username"
				/>
				<FieldDescription>
					Choose a unique username for your account.
				</FieldDescription>
			</Field>
		</div>
	);
}
