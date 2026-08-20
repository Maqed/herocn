import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/registry/new-york-v4/ui/select";

const items = [
	{ label: "Select a fruit", value: null },
	{ label: "Apple", value: "apple" },
	{ label: "Banana", value: "banana" },
	{ label: "Blueberry", value: "blueberry" },
];

export default function SelectVariants() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-4">
			<Select items={items} variant="default">
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
	);
}
