import { Button } from "@/registry/new-york-v4/ui/button";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function InputInSurface() {
	return (
		<Surface className="flex w-full max-w-sm flex-col gap-3 rounded-3xl p-6">
			<Field>
				<FieldLabel htmlFor="input-in-surface-message">
					What's your name?
				</FieldLabel>
				<Input id="input-in-surface-message" variant="secondary" />
			</Field>
			<Button>Submit</Button>
		</Surface>
	);
}
