import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";

export function TabsLine() {
	return (
		<Tabs defaultValue="overview" className="w-[400px]">
			<TabsList variant="line">
				<TabsTrigger value="overview">Overview</TabsTrigger>
				<TabsTrigger value="analytics">Analytics</TabsTrigger>
				<TabsTrigger value="reports">Reports</TabsTrigger>
			</TabsList>
			<TabsContent value="overview">
				<p className="text-muted-foreground text-sm">
					View your key metrics and recent project activity. You have 12 active
					projects and 3 pending tasks.
				</p>
			</TabsContent>
			<TabsContent value="analytics">
				<p className="text-muted-foreground text-sm">
					Track performance and engagement metrics. Page views are up 25%
					compared to last month.
				</p>
			</TabsContent>
			<TabsContent value="reports">
				<p className="text-muted-foreground text-sm">
					Generate and download detailed reports. You have 5 reports ready and
					available to export.
				</p>
			</TabsContent>
		</Tabs>
	);
}
