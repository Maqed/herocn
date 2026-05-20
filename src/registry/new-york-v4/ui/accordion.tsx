import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionVariant = "default" | "surface";

function Accordion({
	className,
	variant = "default",
	...props
}: AccordionPrimitive.Root.Props & { variant?: AccordionVariant }) {
	return (
		<AccordionPrimitive.Root
			data-slot="accordion"
			data-variant={variant}
			className={cn(
				"group/accordion w-full",
				"[contain:layout_style]",
				variant === "surface" && "rounded-3xl bg-surface",
				className,
			)}
			{...props}
		/>
	);
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn(
				"relative border-none",
				"after:absolute after:start-0 after:bottom-0 after:h-px after:w-full after:rounded-xs after:bg-border",
				"last:after:content-none",
				"data-[hide-separator=true]:after:hidden",
				"group-data-[variant=surface]/accordion:after:start-[3%] group-data-[variant=surface]/accordion:after:w-[94%]",
				"group-data-[variant=surface]/accordion:first-of-type:[&_[data-slot=accordion-trigger]]:rounded-t-3xl",
				"group-data-[variant=surface]/accordion:last-of-type:not-has-[[data-slot=accordion-trigger][aria-expanded=true]]:[&_[data-slot=accordion-trigger]]:rounded-b-3xl",
				className,
			)}
			{...props}
		/>
	);
}

function AccordionTrigger({
	className,
	children,
	...props
}: AccordionPrimitive.Trigger.Props) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cn(
					"group/accordion-trigger no-highlight",
					"flex flex-1 items-center justify-between px-4 py-4 text-start font-medium text-sm",
					"cursor-pointer select-none",
					"group-data-[variant=secondary]:first:rounded-t-3xltransition-none",
					"hover:bg-foreground/3 aria-expanded:hover:bg-transparent",
					"focus-visible:focus-ring",
					"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
					"aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-70",
					"group-data-[variant=surface]/accordion:hover:bg-default group-data-[variant=surface]/accordion:aria-expanded:hover:bg-transparent",
					className,
				)}
				{...props}
			>
				{children}
				<ChevronDownIcon
					data-slot="accordion-trigger-icon"
					className={cn(
						"ms-auto size-4 shrink-0 text-muted-foreground",
						"transition-transform duration-250 motion-reduce:transition-none",
						"group-aria-expanded/accordion-trigger:-rotate-180",
					)}
				/>
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	);
}

function AccordionContent({
	className,
	children,
	...props
}: AccordionPrimitive.Panel.Props) {
	return (
		<AccordionPrimitive.Panel
			data-slot="accordion-content"
			className="h-(--accordion-panel-height) overflow-clip opacity-0 transition-all duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 data-open:opacity-100 motion-reduce:transition-none"
			{...props}
		>
			<div
				data-slot="accordion-content-inner"
				className={cn(
					"px-4 pt-0 pb-4 text-muted-foreground text-sm",
					"[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
					className,
				)}
			>
				{children}
			</div>
		</AccordionPrimitive.Panel>
	);
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
