import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/registry/new-york-v4/ui/select";

const items: Array<{
	label: string;
	value: string | null;
	disabled?: boolean;
}> = [
	{ label: "Select a fruit", value: null },
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
	{ label: "Grapes", value: "grapes", disabled: true },
	{ label: "Pineapple", value: "pineapple" },
];

export default function SelectDisabled() {
	return (
		<Select items={items} disabled>
			<SelectTrigger className="w-full max-w-48">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{items.map((item) => (
						<SelectItem
							key={item.label}
							value={item.value}
							disabled={item.disabled}
						>
							{item.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
