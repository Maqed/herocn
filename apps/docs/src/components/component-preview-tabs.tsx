"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";

export function ComponentPreviewTabs({
  className,
  previewClassName,
  align = "center",
  hideCode = false,
  component,
  source,
  sourcePreview,
  ...props
}: React.ComponentProps<"div"> & {
  previewClassName?: string;
  align?: "center" | "start" | "end";
  hideCode?: boolean;
  component: React.ReactNode;
  source: React.ReactNode;
  sourcePreview?: React.ReactNode;
}) {
  const [isMobileCodeVisible, setIsMobileCodeVisible] = React.useState(false);

  return (
    <div
      data-slot="component-preview"
      className={cn(
        "group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-xl border",
        className,
      )}
      {...props}
    >
      <PreviewWrapper align={align} previewClassName={previewClassName}>
        {component}
      </PreviewWrapper>
      {!hideCode && (
        <div
          data-slot="code"
          data-mobile-code-visible={isMobileCodeVisible}
          className="relative"
        >
          {isMobileCodeVisible ? (
            source
          ) : (
            <div className="relative h-32 overflow-hidden">
              {sourcePreview}
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
                  onClick={() => {
                    setIsMobileCodeVisible(true);
                  }}
                >
                  View Code
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PreviewWrapper({
  align,
  previewClassName,
  children,
}: {
  align: "center" | "start" | "end";
  previewClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div data-slot="preview">
      <div
        data-align={align}
        className={cn(
          "preview relative not-prose flex h-72 w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start data-[chromeless=true]:h-auto data-[chromeless=true]:p-0",
          previewClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
