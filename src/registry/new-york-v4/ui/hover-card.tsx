"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
	return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
	return (
		<PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
	);
}

function HoverCardContent({
	className,
	side = "bottom",
	sideOffset = 8,
	align = "center",
	alignOffset = 8,
	withArrow = false,
	children,
	...props
}: PreviewCardPrimitive.Popup.Props &
	Pick<
		PreviewCardPrimitive.Positioner.Props,
		"align" | "alignOffset" | "side" | "sideOffset"
	> & { withArrow?: boolean }) {
	return (
		<PreviewCardPrimitive.Portal data-slot="hover-card-portal">
			<PreviewCardPrimitive.Positioner
				align={align}
				alignOffset={alignOffset}
				side={side}
				sideOffset={sideOffset}
				className="isolate z-50"
			>
				<PreviewCardPrimitive.Popup
					data-slot="hover-card-content"
					className={cn(
						"data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=inline-start]:slide-in-from-end-2 data-[side=inline-end]:slide-in-from-start-2 z-50 flex min-w-40 origin-(--transform-origin) flex-col gap-2.5 rounded-3xl bg-popover p-4 text-popover-foreground text-sm outline-none outline-hidden drop-shadow-2xl duration-100 data-closed:animate-out data-open:animate-in",
						className,
					)}
					{...props}
				>
					{withArrow && (
						<PreviewCardPrimitive.Arrow className="text-popover data-[side=inline-end]:-inset-s-4.5 data-[side=inline-start]:-inset-e-4.5 data-[side=bottom]:-top-4.5 data-[side=left]:-right-4.5 data-[side=top]:-bottom-4.5 data-[side=right]:-left-4.5 data-[side=inline-end]:rotate-90 data-[side=inline-start]:rotate-270 data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180">
							<ChevronUp className="size-8 fill-popover" aria-hidden />
						</PreviewCardPrimitive.Arrow>
					)}
					{children}
				</PreviewCardPrimitive.Popup>
			</PreviewCardPrimitive.Positioner>
		</PreviewCardPrimitive.Portal>
	);
}

export { HoverCard, HoverCardContent, HoverCardTrigger };
