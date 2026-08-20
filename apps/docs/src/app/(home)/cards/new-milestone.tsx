import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";

export function NewMilestone() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Set a new milestone</CardTitle>
				<CardDescription>
					Define your financial target and we&apos;ll help you pace your
					savings.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="goal-name">Goal Name</FieldLabel>
						<Input
							variant="secondary"
							id="goal-name"
							placeholder="e.g. New Car, Home Downpayment"
						/>
					</Field>
					<div className="grid grid-cols-2 gap-3">
						<Field>
							<FieldLabel htmlFor="target-amount">Target Amount</FieldLabel>
							<Input
								variant="secondary"
								id="target-amount"
								defaultValue="$15,000"
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="target-date">Target Date</FieldLabel>
							<Input
								variant="secondary"
								id="target-date"
								defaultValue="Dec 2025"
							/>
						</Field>
					</div>
				</FieldGroup>
			</CardContent>
			<CardFooter className="flex-col gap-2">
				<Button className="w-full">Create Goal</Button>
				<Button variant="outline" className="w-full">
					Cancel
				</Button>
			</CardFooter>
		</Card>
	);
}
