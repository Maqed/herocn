import { Badge } from "@/registry/new-york-v4/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";
import { Item, ItemContent } from "@/registry/new-york-v4/ui/item";
import { Separator } from "@/registry/new-york-v4/ui/separator";

const netRoyalties = 1248.75;
const processingFee = 37.46;
const totalClaimable = netRoyalties - processingFee;

const formatCurrency = (amount: number) =>
	amount.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

export function ClaimableBalance() {
	return (
		<Card>
			<CardHeader>
				<CardDescription>Claimable Balance</CardDescription>
				<CardTitle className="text-4xl tabular-nums">
					${formatCurrency(totalClaimable)}
				</CardTitle>
				<Badge variant="primary" className="w-fit">
					Pending Setup
				</Badge>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col justify-end">
				<Item variant="secondary" className="flex-col items-stretch">
					<ItemContent className="gap-3">
						<div className="flex items-center justify-between">
							<span className="text-muted-foreground text-sm">
								Net Royalties
							</span>
							<span className="font-medium text-sm tabular-nums">
								${formatCurrency(netRoyalties)}
							</span>
						</div>
						<div className="flex items-center justify-between">
							<span className="text-muted-foreground text-sm">
								Processing Fee
							</span>
							<span className="font-medium text-sm tabular-nums">
								-${formatCurrency(processingFee)}
							</span>
						</div>
						<Separator />
						<div className="flex items-center justify-between">
							<span className="text-muted-foreground text-sm">
								Total Ready to Claim
							</span>
							<span className="font-semibold text-sm tabular-nums">
								${formatCurrency(totalClaimable)} USD
							</span>
						</div>
					</ItemContent>
				</Item>
			</CardContent>
			<CardFooter>
				<CardDescription>
					Once your bank is connected, balances over $10.00 are automatically
					eligible for monthly distribution on the 15th of each month.
				</CardDescription>
			</CardFooter>
		</Card>
	);
}
