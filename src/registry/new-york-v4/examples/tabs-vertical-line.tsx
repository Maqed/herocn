import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";

export function TabsVerticalLine() {
	return (
		<Tabs defaultValue="account" orientation="vertical" className="w-[500px]">
			<TabsList variant="line">
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
				<TabsTrigger value="notifications">Notifications</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				<p className="font-medium text-sm">Account Settings</p>
				<p className="mt-1 text-muted-foreground text-sm">
					Manage your account details, profile information, and connected
					services.
				</p>
			</TabsContent>
			<TabsContent value="password">
				<p className="font-medium text-sm">Password & Security</p>
				<p className="mt-1 text-muted-foreground text-sm">
					Update your password and configure two-factor authentication to keep
					your account secure.
				</p>
			</TabsContent>
			<TabsContent value="notifications">
				<p className="font-medium text-sm">Notification Preferences</p>
				<p className="mt-1 text-muted-foreground text-sm">
					Choose how and when you receive email, push, and in-app notifications.
				</p>
			</TabsContent>
		</Tabs>
	);
}
