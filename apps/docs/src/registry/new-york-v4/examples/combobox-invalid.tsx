"use client";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "@/registry/new-york-v4/ui/combobox";
import { Field, FieldError, FieldLabel } from "@/registry/new-york-v4/ui/field";

const frameworks = [
	"Next.js",
	"SvelteKit",
	"Nuxt.js",
	"Remix",
	"Astro",
] as const;

export default function ComboboxInvalid() {
	return (
		<Field data-invalid className="w-full max-w-48">
			<FieldLabel>Framework</FieldLabel>
			<Combobox items={frameworks}>
				<ComboboxInput placeholder="Select a framework" aria-invalid="true" />
				<ComboboxContent>
					<ComboboxEmpty>No items found.</ComboboxEmpty>
					<ComboboxList>
						{(item) => (
							<ComboboxItem key={item} value={item}>
								{item}
							</ComboboxItem>
						)}
					</ComboboxList>
				</ComboboxContent>
			</Combobox>
			<FieldError>Please select a framework.</FieldError>
		</Field>
	);
}
