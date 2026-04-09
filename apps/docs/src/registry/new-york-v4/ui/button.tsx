"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button pressible relative isolate inline-flex w-fit origin-center items-center cursor-pointer justify-center gap-2 rounded-3xl px-4 text-sm font-medium whitespace-nowrap outline-none select-none no-highlight focus-visible:focus-ring disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:cursor-not-allowed aria-disabled:opacity-70 [&_svg:not([class*='size-'])]:size-4 shrink-0 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 active:bg-primary/80",
        outline:
          "border-border border hover:bg-muted hover:text-foreground active:bg-muted active:text-foreground dark:hover:bg-muted/50 dark:active:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-default text-primary hover:bg-default/80 active:bg-default/80",
        tertiary:
          "bg-default text-default-foreground hover:bg-default/80 active:bg-default/80",
        ghost:
          "hover:bg-muted hover:text-foreground active:bg-muted active:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 focus-visible:ring-destructive",
        "destructive-soft":
          "bg-destructive/10 hover:bg-destructive/20 active:bg-destructive/20 text-destructive focus-visible:ring-destructive dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:active:bg-destructive/30",
      },
      size: {
        default:
          "h-9 w-fit has-data-[icon=inline-end]:pe-3 has-data-[icon=inline-start]:ps-3 ",
        sm: "h-8 px-3 gap-1 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 gap-1.5 text-base has-data-[icon=inline-end]:pe-3 has-data-[icon=inline-start]:ps-3 [&_svg:not([class*='size-'])]:size-4",
        icon: "size-9 [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-4",
        "icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-5.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
