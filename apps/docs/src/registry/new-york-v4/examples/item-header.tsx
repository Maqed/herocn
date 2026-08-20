import {
	Item,
	ItemContent,
	ItemDescription,
	ItemGroup,
	ItemHeader,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

const models = [
	{
		name: "v0-1.5-sm",
		description: "Everyday tasks and UI generation.",
		image:
			"https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
	},
	{
		name: "v0-1.5-lg",
		description: "Advanced thinking or reasoning.",
		image:
			"https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop",
	},
	{
		name: "v0-2.0-mini",
		description: "Open source model for everyone.",
		image:
			"https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop",
	},
];

export default function ItemHeaderDemo() {
	return (
		<div className="flex w-full max-w-xl flex-col gap-6">
			<ItemGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{models.map((model) => (
					<Item key={model.name} variant="outline">
						<ItemHeader>
							<img
								src={model.image}
								alt=""
								width={128}
								height={128}
								className="aspect-square w-full rounded-sm object-cover"
							/>
						</ItemHeader>
						<ItemContent>
							<ItemTitle>{model.name}</ItemTitle>
							<ItemDescription>{model.description}</ItemDescription>
						</ItemContent>
					</Item>
				))}
			</ItemGroup>
		</div>
	);
}
