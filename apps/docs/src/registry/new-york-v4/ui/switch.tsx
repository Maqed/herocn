"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg";
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-colors outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:focus-ring aria-invalid:not-focus-visible:invalid-field-ring aria-invalid:focus-visible:invalid-field-ring-focus data-checked:bg-primary data-unchecked:bg-surface-secondary data-disabled:cursor-not-allowed data-disabled:opacity-50",
        "data-[size=sm]:h-4 data-[size=sm]:w-8",
        "data-[size=default]:h-5 data-[size=default]:w-10",
        "data-[size=lg]:h-6 data-[size=lg]:w-12",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none ms-0.5 block rounded-full bg-white ring-0 shadow-sm transition-[margin] dark:data-checked:bg-primary-foreground dark:data-unchecked:bg-foreground data-disabled:bg-default-foreground/20",
          "group-data-[size=sm]/switch:h-3 group-data-[size=sm]/switch:w-[1.03125rem] group-data-[size=sm]/switch:data-checked:ms-[calc(100%-1.15625rem)]",
          "group-data-[size=default]/switch:h-4 group-data-[size=default]/switch:w-[1.375rem] group-data-[size=default]/switch:data-checked:ms-[calc(100%-1.5rem)]",
          "group-data-[size=lg]/switch:h-5 group-data-[size=lg]/switch:w-[1.71875rem] group-data-[size=lg]/switch:data-checked:ms-[calc(100%-1.84375rem)]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
