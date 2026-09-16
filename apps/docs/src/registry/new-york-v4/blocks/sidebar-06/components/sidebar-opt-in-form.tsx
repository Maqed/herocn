import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";
import { SidebarInput } from "@/registry/new-york-v4/ui/sidebar";

export function SidebarOptInForm() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Subscribe to our newsletter</CardTitle>
				<CardDescription>
					Opt-in to receive updates and news about the sidebar.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form>
					<div className="grid gap-2.5">
						<SidebarInput type="email" placeholder="Email" />
						<Button>Subscribe</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
