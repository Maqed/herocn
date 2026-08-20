"use client";

import { ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function CollapsibleDemo() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Collapsible
			open={isOpen}
			onOpenChange={setIsOpen}
			className="flex w-[350px] flex-col gap-2"
		>
			<div className="flex items-center justify-between gap-4 px-4">
				<h4 className="font-semibold text-sm">Order #4189</h4>
				<CollapsibleTrigger
					render={<Button variant="ghost" size="icon" className="size-8" />}
				>
					<ChevronsUpDown />
					<span className="sr-only">Toggle details</span>
				</CollapsibleTrigger>
			</div>
			<Surface className="flex items-center justify-between rounded-2xl p-4 text-sm">
				<span className="text-muted-foreground">Status</span>
				<span className="font-medium">Shipped</span>
			</Surface>
			<CollapsibleContent className="flex flex-col gap-2">
				<Surface className="rounded-2xl p-4 text-sm">
					<p className="font-medium">Shipping address</p>
					<p className="text-muted-foreground">100 Market St, San Francisco</p>
				</Surface>
				<Surface className="rounded-2xl p-4 text-sm">
					<p className="font-medium">Items</p>
					<p className="text-muted-foreground">2x Studio Headphones</p>
				</Surface>
			</CollapsibleContent>
		</Collapsible>
	);
}
