import { AppWindowIcon, CodeIcon } from "lucide-react";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";

export function TabsIcons() {
	return (
		<Tabs defaultValue="preview" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="preview">
					<AppWindowIcon />
					Preview
				</TabsTrigger>
				<TabsTrigger value="code">
					<CodeIcon />
					Code
				</TabsTrigger>
			</TabsList>
			<TabsContent value="preview">
				<p className="text-muted-foreground text-sm">
					See a live preview of your component as it will appear in the browser.
				</p>
			</TabsContent>
			<TabsContent value="code">
				<p className="text-muted-foreground text-sm">
					View and copy the source code for this component to use in your
					project.
				</p>
			</TabsContent>
		</Tabs>
	);
}
