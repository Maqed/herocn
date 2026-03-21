import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  variant = "default",
  type,
  ...props
}: React.ComponentProps<"input"> & { variant?: "default" | "secondary" }) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      data-variant={variant}
      className={cn(
        "bg-input data-[variant=secondary]:bg-surface-secondary px-3 py-2 text-base outline-none shadow-xs aria-invalid:invalid-field-ring sm:text-sm rounded-xl transition-colors md:text-sm w-full min-w-0 placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:focus-field-ring focus-visible:ring-primary",
        "hover:not-focus-visible:bg-input/90 hover:not-focus-visible:data-[variant=secondary]:bg-surface-secondary/90",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
