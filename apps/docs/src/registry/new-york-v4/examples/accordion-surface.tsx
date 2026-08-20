import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion";

const items = [
	{
		value: "item-1",
		trigger: "What is the return policy?",
		content:
			"You can return any item within 30 days of purchase for a full refund. Items must be in their original condition and packaging.",
	},
	{
		value: "item-2",
		trigger: "How do I track my order?",
		content:
			"Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's site to track your package.",
	},
	{
		value: "item-3",
		trigger: "Do you offer international shipping?",
		content:
			"Yes, we ship to over 100 countries worldwide. Shipping costs and delivery times vary depending on the destination and shipping method selected.",
	},
];

export default function AccordionSurface() {
	return (
		<Accordion variant="surface" defaultValue={["item-1"]} className="max-w-lg">
			{items.map((item) => (
				<AccordionItem key={item.value} value={item.value}>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
