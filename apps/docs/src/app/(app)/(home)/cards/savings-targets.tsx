import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemFooter,
	ItemGroup,
} from "@/registry/new-york-v4/ui/item";
import { Progress } from "@/registry/new-york-v4/ui/progress";

export function SavingsTargets() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Savings Targets</CardTitle>
				<CardDescription>
					Active milestones for 2024 across your portfolio. Monitor how close
					you are to each savings goal.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ItemGroup className="gap-3">
					<Item
						role="listitem"
						variant="secondary"
						className="flex-col items-stretch"
					>
						<ItemContent className="gap-3">
							<ItemDescription className="cn-font-heading font-medium text-muted-foreground text-xs uppercase tracking-wider">
								Retirement
							</ItemDescription>
							<span className="font-semibold text-3xl tabular-nums">
								$420,000
							</span>
							<Progress value={65} aria-label="Retirement savings progress" />
						</ItemContent>
						<ItemFooter>
							<span className="text-muted-foreground text-sm">
								65% achieved
							</span>
							<span className="font-medium text-sm tabular-nums">$273,000</span>
						</ItemFooter>
					</Item>
					<Item
						role="listitem"
						variant="secondary"
						className="flex-col items-stretch"
					>
						<ItemContent className="gap-3">
							<ItemDescription className="cn-font-heading font-medium text-muted-foreground text-xs uppercase tracking-wider">
								Real Estate
							</ItemDescription>
							<span className="font-semibold text-3xl tabular-nums">
								$85,000
							</span>
							<Progress value={32} aria-label="Real estate savings progress" />
						</ItemContent>
						<ItemFooter>
							<span className="text-muted-foreground text-sm">
								32% achieved
							</span>
							<span className="font-medium text-sm tabular-nums">$27,200</span>
						</ItemFooter>
					</Item>
				</ItemGroup>
			</CardContent>
			<CardFooter>
				<CardDescription className="text-center">
					You have not met your targets for this year.
				</CardDescription>
			</CardFooter>
		</Card>
	);
}
