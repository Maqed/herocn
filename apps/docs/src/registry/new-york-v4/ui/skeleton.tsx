import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const skeletonAnimationTypes = cva(
	"skeleton pointer-events-none relative overflow-hidden rounded-sm bg-surface-tertiary/70",
	{
		variants: {
			animationType: {
				shimmer: "skeleton--shimmer",
				pulse: "animate-pulse",
				none: "",
			},
		},
		defaultVariants: {
			animationType: "shimmer",
		},
	},
);

function Skeleton({
	className,
	animationType,
	...props
}: React.ComponentProps<"div"> & VariantProps<typeof skeletonAnimationTypes>) {
	return (
		<div
			data-slot="skeleton"
			className={cn(skeletonAnimationTypes({ animationType, className }))}
			{...props}
		/>
	);
}

export { Skeleton, skeletonAnimationTypes };
