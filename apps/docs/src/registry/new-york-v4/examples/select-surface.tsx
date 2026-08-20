import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/registry/new-york-v4/ui/select";
import { Surface } from "@/registry/new-york-v4/ui/surface";

const items = [
	{ label: "Select a theme", value: null },
	{ label: "Light", value: "light" },
	{ label: "Dark", value: "dark" },
	{ label: "System", value: "system" },
];

export default function SelectSurface() {
	return (
		<Surface className="w-full max-w-sm rounded-3xl border p-4">
			<h4 className="font-medium text-sm">Appearance</h4>
			<p className="mt-1 text-muted-foreground text-sm">
				Choose how the interface looks on this device.
			</p>
			<div className="mt-4">
				<Select items={items} variant="secondary">
					<SelectTrigger className="w-full">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							{items.map((item) => (
								<SelectItem key={item.label} value={item.value}>
									{item.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</Surface>
	);
}
