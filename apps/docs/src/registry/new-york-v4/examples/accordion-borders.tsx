import { cn } from "@/lib/utils";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion";

const items = [
	{
		value: "billing",
		trigger: "How does billing work?",
		content:
			"We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.",
	},
	{
		value: "security",
		trigger: "Is my data secure?",
		content:
			"Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All data is encrypted at rest and in transit using industry-standard protocols.",
	},
	{
		value: "integration",
		trigger: "What integrations do you support?",
		content:
			"We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.",
	},
];

export default function AccordionBorders() {
	return (
		<Accordion
			className="max-w-lg rounded-3xl border"
			defaultValue={["billing"]}
		>
			{items.map((item) => (
				<AccordionItem
					key={item.value}
					value={item.value}
					className={cn(
						"border-b last:border-b-0",
						"first-of-type:[&_[data-slot=accordion-trigger]]:rounded-t-3xl",
						"last-of-type:not-has-[[data-slot=accordion-trigger][aria-expanded=true]]:[&_[data-slot=accordion-trigger]]:rounded-b-3xl",
					)}
				>
					<AccordionTrigger>{item.trigger}</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
