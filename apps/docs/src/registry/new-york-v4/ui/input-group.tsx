"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Textarea } from "@/registry/new-york-v4/ui/textarea";

function InputGroup({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "secondary" }) {
  return (
    <div
      data-slot="input-group"
      role="group"
      data-variant={variant}
      className={cn(
        "group/input-group relative flex h-9 w-full min-w-0 items-center rounded-4xl bg-input dark:bg-input/80 data-[variant=secondary]:bg-default/80 dark:data-[variant=secondary]:bg-default/80 transition-all outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-data-[align=block-end]:rounded-2xl has-data-[align=block-start]:rounded-2xl has-[[data-slot=input-group-control]:not([aria-invalid=true]):focus-visible]:focus-field-ring has-[[data-slot][aria-invalid=true]:not(:focus-visible)]:invalid-field-ring has-[[data-slot][aria-invalid=true]:focus-visible]:invalid-field-ring-focus has-[textarea]:rounded-xl has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pe-1.5 has-[>[data-align=inline-start]]:[&>input]:ps-1.5",
        "has-[>[data-slot=input-group-control]:disabled]:cursor-not-allowed has-[>[data-slot=input-group-control]:disabled]:opacity-50",
        "hover:not-focus-visible:bg-input/40 dark:hover:not-focus-visible:bg-input hover:not-focus-visible:data-[variant=secondary]:bg-default dark:hover:not-focus-visible:data-[variant=secondary]:bg-default",
        className,
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 py-2 text-sm font-medium text-muted-foreground select-none peer-disabled:cursor-not-allowed group-data-[disabled=true]/input-group:opacity-50 **:data-[slot=kbd]:rounded-4xl **:data-[slot=spinner]:size-4 **:data-[slot=kbd]:bg-muted-foreground/10 **:data-[slot=kbd]:px-1.5 [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start":
          "order-first ps-3 has-[>button]:-ms-3 has-[>kbd]:ms-[-0.15rem]",
        "inline-end":
          "order-last pe-3 has-[>button]:-me-3 has-[>kbd]:me-[-0.15rem]",
        "block-start":
          "order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-3 [.border-b]:pb-3",
        "block-end":
          "order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-3 [.border-t]:pt-3",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
);

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva(
  "flex items-center gap-2 rounded-3xl text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "gap-1 px-2.5 [&>svg:not([class*='size-'])]:size-3",
        sm: "",
        "icon-xs": "size-7 gap-1 p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  },
);

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size" | "type"> &
  VariantProps<typeof inputGroupButtonVariants> & {
    type?: "button" | "submit" | "reset";
  }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "peer flex-1 rounded-none bg-transparent shadow-none aria-invalid:not-focus-visible:outline-0 focus-visible:ring-0! aria-invalid:outline-none dark:bg-transparent",
        "hover:not-focus-visible:bg-transparent dark:hover:not-focus-visible:bg-transparent hover:not-focus-visible:data-[variant=secondary]:bg-transparent dark:hover:not-focus-visible:data-[variant=secondary]:bg-transparent",
        "disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "peer flex-1 resize-none rounded-none bg-transparent py-2 shadow-none aria-invalid:not-focus-visible:outline-0 focus-visible:ring-0! aria-invalid:outline-none dark:bg-transparent",
        "hover:not-focus-visible:bg-transparent dark:hover:not-focus-visible:bg-transparent hover:not-focus-visible:data-[variant=secondary]:bg-transparent dark:hover:not-focus-visible:data-[variant=secondary]:bg-transparent",
        "disabled:pointer-events-auto disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
