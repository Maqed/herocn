import { Button } from "@/registry/new-york-v4/ui/button";
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
} from "@/registry/new-york-v4/ui/item";

const chartData = [
	{ month: "Dec", amount: 800 },
	{ month: "Jan", amount: 1100 },
	{ month: "Feb", amount: 900 },
	{ month: "Mar", amount: 1300 },
	{ month: "Apr", amount: 750 },
];

export function ContributionHistory() {
	const maxAmount = Math.max(...chartData.map((item) => item.amount));

	return (
		<Card>
			<CardHeader>
				<CardTitle>Contribution History</CardTitle>
				<CardDescription>Last 6 months of activity</CardDescription>
			</CardHeader>
			<CardContent>
				<div
					className="flex h-[200px] w-full items-end gap-3"
					role="img"
					aria-label="Last 6 months of contribution activity"
				>
					{chartData.map((item, index) => (
						<div
							key={item.month}
							className="flex h-full flex-1 flex-col justify-end gap-2"
						>
							<div
								data-index={index}
								className="min-h-2 rounded-lg data-[index=0]:bg-chart-1 data-[index=1]:bg-chart-2 data-[index=2]:bg-chart-3 data-[index=3]:bg-chart-4 data-[index=4]:bg-chart-5 data-[index=5]:bg-chart-6"
								style={{ height: `${(item.amount / maxAmount) * 100}%` }}
							/>
							<span className="text-center text-muted-foreground text-xs">
								{item.month}
							</span>
						</div>
					))}
				</div>
			</CardContent>
			<CardContent>
				<div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-2">
					<Item variant="secondary" className="flex-col items-stretch">
						<ItemContent className="gap-1">
							<ItemDescription className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
								Upcoming
							</ItemDescription>
							<span className="cn-font-heading font-semibold text-base">
								May 2024
							</span>
							<span className="text-muted-foreground text-sm">Scheduled</span>
						</ItemContent>
					</Item>
					<Item
						variant="secondary"
						className="hidden flex-col items-stretch xl:flex"
					>
						<ItemContent className="gap-1">
							<ItemDescription className="font-medium text-muted-foreground text-xs uppercase tracking-wider">
								Savings Plan
							</ItemDescription>
							<span className="cn-font-heading font-semibold text-base">
								Accelerated
							</span>
							<span className="text-muted-foreground text-sm">Recurring</span>
						</ItemContent>
					</Item>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">View Full Report</Button>
			</CardFooter>
		</Card>
	);
}
