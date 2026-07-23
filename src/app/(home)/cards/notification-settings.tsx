import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";
import { Checkbox } from "@/registry/new-york-v4/ui/checkbox";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldGroup,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";

const NOTIFICATIONS = [
	{
		id: "transactions",
		label: "Transaction alerts",
		description: "Deposits, withdrawals, and transfers.",
		defaultChecked: true,
	},
	{
		id: "security",
		label: "Security alerts",
		description: "Login attempts and account changes.",
		defaultChecked: true,
	},
	{
		id: "goals",
		label: "Goal milestones",
		description: "Updates at 25%, 50%, 75%, and 100%.",
		defaultChecked: false,
	},
	{
		id: "market",
		label: "Market updates",
		description: "Daily portfolio summary and price alerts.",
		defaultChecked: false,
	},
];

export function NotificationSettings() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>
					Choose which email and push alerts you want to receive.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<FieldGroup>
					{NOTIFICATIONS.map((n) => (
						<Field key={n.id} orientation="horizontal">
							<Checkbox
								variant="secondary"
								id={`notify-${n.id}`}
								defaultChecked={n.defaultChecked}
							/>
							<FieldContent>
								<FieldLabel htmlFor={`notify-${n.id}`}>{n.label}</FieldLabel>
								<FieldDescription>{n.description}</FieldDescription>
							</FieldContent>
						</Field>
					))}
				</FieldGroup>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Save Preferences</Button>
			</CardFooter>
		</Card>
	);
}
