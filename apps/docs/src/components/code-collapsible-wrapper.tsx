"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";
import { Separator } from "@/registry/new-york-v4/ui/separator";

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <div
      className={cn(
        "group relative md:-mx-1 [&>figure]:mt-0 [&>figure]:md:mx-0!",
        className,
      )}
      {...props}
    >
      <div className="absolute top-0.75 right-7 z-10 flex items-center">
        <Button
          variant="ghost"
          size="sm"
          className="h-7 rounded-md px-2 text-muted-foreground"
          onClick={() => setIsOpened((prev) => !prev)}
        >
          {isOpened ? "Collapse" : "Expand"}
        </Button>
        <Separator orientation="vertical" className="mx-1.5 h-4!" />
      </div>
      <div className="relative mt-6">
        {isOpened ? (
          children
        ) : (
          <div className="relative h-32 overflow-hidden">
            {children}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-background), color-mix(in oklab, var(--color-background) 60%, transparent), transparent)",
                }}
              />
              <Button
                type="button"
                size="sm"
                className="pointer-events-auto relative z-10"
                onClick={() => setIsOpened(true)}
              >
                Expand
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
