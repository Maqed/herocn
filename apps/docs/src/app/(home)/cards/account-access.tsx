import { ArrowRightIcon, CircleAlertIcon, LockIcon } from "lucide-react";

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
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from "@/registry/new-york-v4/ui/item";

export function AccountAccess() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Account Access</CardTitle>
				<CardDescription>
					Update your credentials or re-authenticate.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<FieldGroup>
					<Field>
						<FieldLabel htmlFor="email-address">Email Address</FieldLabel>
						<Input
							variant="secondary"
							id="email-address"
							type="email"
							placeholder="artist@studio.inc"
						/>
					</Field>
					<Field>
						<div className="flex items-center justify-between">
							<FieldLabel htmlFor="current-password">
								Current Password
							</FieldLabel>
							<a
								href="#"
								className="font-medium text-muted-foreground text-xs uppercase tracking-wider hover:text-foreground"
							>
								Forgot?
							</a>
						</div>
						<Input
							variant="secondary"
							id="current-password"
							type="password"
							placeholder="••••••••••••••••••••••••"
						/>
					</Field>
				</FieldGroup>
			</CardContent>
			<CardFooter className="flex-col gap-4">
				<Button className="w-full">
					<LockIcon strokeWidth={2} />
					Update Security
				</Button>
				<Item variant="secondary" render={<a href="#" />}>
					<ItemMedia variant="icon">
						<CircleAlertIcon className="text-destructive" strokeWidth={2} />
					</ItemMedia>
					<ItemContent>
						<ItemTitle>Danger Zone</ItemTitle>
						<ItemDescription className="line-clamp-1">
							Archive account and remove catalog
						</ItemDescription>
					</ItemContent>
					<ArrowRightIcon className="size-4" strokeWidth={2} />
				</Item>
			</CardFooter>
		</Card>
	);
}
