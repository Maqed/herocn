"use client";

import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";

function Collapsible({ ...props }: CollapsiblePrimitive.Root.Props) {
	return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({ ...props }: CollapsiblePrimitive.Trigger.Props) {
	return (
		<CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
	);
}

function CollapsibleContent({
	hiddenUntilFound = true,
	...props
}: CollapsiblePrimitive.Panel.Props) {
	return (
		<CollapsiblePrimitive.Panel
			hiddenUntilFound={hiddenUntilFound}
			data-slot="collapsible-content"
			{...props}
		/>
	);
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
