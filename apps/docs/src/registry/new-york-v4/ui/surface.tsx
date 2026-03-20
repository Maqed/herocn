import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const surfaceVariants = cva("relative text-foreground", {
  variants: {
    variant: {
      default: "bg-surface",
      secondary: "bg-surface-secondary",
      tertiary: "bg-surface-tertiary",
      transparent: "bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Surface({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof surfaceVariants>) {
  return (
    <div className={cn(surfaceVariants({ variant }), className)} {...props} />
  );
}

export { Surface };
