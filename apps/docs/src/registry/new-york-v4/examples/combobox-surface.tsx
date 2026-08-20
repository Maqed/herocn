"use client";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "@/registry/new-york-v4/ui/combobox";
import { Surface } from "@/registry/new-york-v4/ui/surface";

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export default function ComboboxSurface() {
	return (
		<Surface className="w-full max-w-sm rounded-3xl border p-4">
			<h4 className="font-medium text-sm">Framework</h4>
			<p className="mt-1 text-muted-foreground text-sm">
				Select your preferred framework.
			</p>
			<div className="mt-4">
				<Combobox items={frameworks} variant="secondary">
					<ComboboxInput placeholder="Select a framework" />
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
		</Surface>
	);
}
