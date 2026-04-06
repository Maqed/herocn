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
        "bg-input dark:bg-input/80 data-[variant=secondary]:bg-default/80 data-[variant=secondary]:shadow-none px-2.5 py-1.5 md:px-3 md:py-2 outline-none shadow-xs rounded-xl transition-colors text-sm w-full min-w-0 placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:not-focus-visible:invalid-field-ring", // unfocused invalid
        "aria-invalid:focus-visible:invalid-field-ring-focus", // focused invalid
        "not-aria-invalid:focus-visible:focus-field-ring not-aria-invalid:focus-visible:ring-ring", // normal focus
        "hover:not-focus-visible:bg-input/40 dark:hover:not-focus-visible:bg-input hover:not-focus-visible:data-[variant=secondary]:bg-default",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
