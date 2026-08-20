import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function CheckboxInSurface() {
	return (
		<Surface className="flex w-full max-w-sm flex-col gap-4 rounded-3xl p-6">
			<FieldGroup className="gap-3">
				<Field orientation="horizontal">
					<Checkbox
						id="checkbox-surface-sync"
						name="checkbox-surface-sync"
						variant="secondary"
						defaultChecked
					/>
					<FieldContent>
						<FieldLabel htmlFor="checkbox-surface-sync">
							Sync Desktop & Documents
						</FieldLabel>
						<FieldDescription>
							Folders stay available on your other devices when iCloud is on.
						</FieldDescription>
					</FieldContent>
				</Field>
				<Field orientation="horizontal">
					<Checkbox
						id="checkbox-surface-analytics"
						name="checkbox-surface-analytics"
						variant="secondary"
					/>
					<FieldLabel
						htmlFor="checkbox-surface-analytics"
						className="font-normal"
					>
						Share analytics
					</FieldLabel>
				</Field>
			</FieldGroup>
		</Surface>
	);
}
