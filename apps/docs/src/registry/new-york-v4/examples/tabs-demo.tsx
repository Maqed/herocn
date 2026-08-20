import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";

export function TabsDemo() {
	return (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="analytics">Analytics</TabsTrigger>
				<TabsTrigger value="reports">Reports</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<Card>
					<CardHeader>
						<CardTitle>Overview</CardTitle>
						<CardDescription>
							View your key metrics and recent project activity. Track progress
							across all your active projects.
						</CardDescription>
					</CardHeader>
					<CardContent className="text-muted-foreground text-sm">
						You have 12 active projects and 3 pending tasks.
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="analytics">
				<Card>
					<CardHeader>
						<CardTitle>Analytics</CardTitle>
						<CardDescription>
							Track performance and user engagement metrics. Monitor trends and
							identify growth opportunities.
						</CardDescription>
					</CardHeader>
					<CardContent className="text-muted-foreground text-sm">
						Page views are up 25% compared to last month.
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="reports">
				<Card>
					<CardHeader>
						<CardTitle>Reports</CardTitle>
						<CardDescription>
							Generate and download your detailed reports. Export data in
							multiple formats for analysis.
						</CardDescription>
					</CardHeader>
					<CardContent className="text-muted-foreground text-sm">
						You have 5 reports ready and available to export.
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
