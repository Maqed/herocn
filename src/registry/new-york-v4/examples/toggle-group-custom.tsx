"use client";

import * as React from "react";

import {
	Field,
	FieldDescription,
	FieldLabel,
} from "@/registry/new-york-v4/ui/field";
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group";

export default function ToggleGroupCustom() {
	const [fontWeight, setFontWeight] = React.useState("normal");

	return (
		<Field>
			<FieldLabel>Font Weight</FieldLabel>
			<ToggleGroup
				value={[fontWeight]}
				onValueChange={(value) => setFontWeight(value[0])}
				spacing={2}
				size="lg"
			>
				<ToggleGroupItem
					value="light"
					aria-label="Light"
					className="flex size-16 flex-col items-center justify-center rounded-xl"
				>
					<span className="font-light text-2xl leading-none">Aa</span>
					<span className="text-muted-foreground text-xs">Light</span>
				</ToggleGroupItem>
				<ToggleGroupItem
					value="normal"
					aria-label="Normal"
					className="flex size-16 flex-col items-center justify-center rounded-xl"
				>
					<span className="font-normal text-2xl leading-none">Aa</span>
					<span className="text-muted-foreground text-xs">Normal</span>
				</ToggleGroupItem>
				<ToggleGroupItem
					value="medium"
					aria-label="Medium"
					className="flex size-16 flex-col items-center justify-center rounded-xl"
				>
					<span className="font-medium text-2xl leading-none">Aa</span>
					<span className="text-muted-foreground text-xs">Medium</span>
				</ToggleGroupItem>
				<ToggleGroupItem
					value="bold"
					aria-label="Bold"
					className="flex size-16 flex-col items-center justify-center rounded-xl"
				>
					<span className="font-bold text-2xl leading-none">Aa</span>
					<span className="text-muted-foreground text-xs">Bold</span>
				</ToggleGroupItem>
			</ToggleGroup>
			<FieldDescription>
				Use{" "}
				<code className="rounded-md bg-muted px-1 py-0.5 font-mono">
					font-{fontWeight}
				</code>{" "}
				to set the font weight.
			</FieldDescription>
		</Field>
	);
}
