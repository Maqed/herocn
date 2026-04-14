"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverDescription,
	PopoverHeader,
	PopoverTitle,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export default function PopoverForm() {
	return (
		<Popover>
			<PopoverTrigger render={<Button variant="tertiary" />}>
				Open Popover
			</PopoverTrigger>
			<PopoverContent className="w-64">
				<PopoverHeader>
					<PopoverTitle>Dimensions</PopoverTitle>
					<PopoverDescription>
						Set the dimensions for the layer.
					</PopoverDescription>
				</PopoverHeader>
				<FieldGroup className="gap-4">
					<Field orientation="horizontal">
						<FieldLabel htmlFor="popover-form-width" className="w-1/2">
							Width
						</FieldLabel>
						<Input
							variant="secondary"
							id="popover-form-width"
							defaultValue="100%"
						/>
					</Field>
					<Field orientation="horizontal">
						<FieldLabel htmlFor="popover-form-height" className="w-1/2">
							Height
						</FieldLabel>
						<Input
							variant="secondary"
							id="popover-form-height"
							defaultValue="25px"
						/>
					</Field>
				</FieldGroup>
			</PopoverContent>
		</Popover>
	);
}
