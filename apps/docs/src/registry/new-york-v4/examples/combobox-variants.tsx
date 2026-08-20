"use client";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "@/registry/new-york-v4/ui/combobox";

const frameworks = [
	"Next.js",
	"SvelteKit",
	"Nuxt.js",
	"Remix",
	"Astro",
] as const;

export default function ComboboxVariants() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<Combobox items={frameworks}>
				<ComboboxInput placeholder="Default" />
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
			<Combobox items={frameworks} variant="secondary">
				<ComboboxInput placeholder="Secondary" />
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
		</div>
	);
}
