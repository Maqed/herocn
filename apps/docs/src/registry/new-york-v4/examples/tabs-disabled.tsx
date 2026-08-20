import { Tabs, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs";

export function TabsDisabled() {
	return (
		<Tabs defaultValue="home">
			<TabsList>
				<TabsTrigger value="home">Home</TabsTrigger>
				<TabsTrigger value="settings" disabled>
					Disabled
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
