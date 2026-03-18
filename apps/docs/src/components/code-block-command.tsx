"use client";

import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { CheckIcon, CopyIcon, Terminal } from "lucide-react";
import * as React from "react";
import { copyToClipboard } from "@/components/copy-button";
import { useConfig } from "@/hooks/use-config";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york-v4/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip";

type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

export function CodeBlockCommandWrapper({
  __npm__,
  __yarn__,
  __pnpm__,
  __bun__,
}: React.ComponentProps<"pre"> & {
  __npm__?: string;
  __yarn__?: string;
  __pnpm__?: string;
  __bun__?: string;
}) {
  const [config, setConfig] = useConfig();
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timer = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasCopied]);

  const packageManager: PackageManager = config.packageManager || "pnpm";

  const tabs = React.useMemo(
    () => ({
      pnpm: __pnpm__,
      npm: __npm__,
      yarn: __yarn__,
      bun: __bun__,
    }),
    [__npm__, __pnpm__, __yarn__, __bun__],
  );

  const copyCommand = React.useCallback(() => {
    const command = tabs[packageManager];

    if (!command) {
      return;
    }

    copyToClipboard(command);
    setHasCopied(true);
  }, [packageManager, tabs]);

  return (
    <div className="relative overflow-x-auto">
      <Tabs
        value={packageManager}
        className="gap-0"
        onValueChange={(value) => {
          setConfig({
            ...config,
            packageManager: value as PackageManager,
          });
        }}
      >
        <div className="flex items-center gap-2 border-b border-border/50 px-3 py-1">
          <div className="flex size-4 items-center justify-center rounded-[1px] bg-foreground opacity-70">
            <Terminal className="size-3 text-background" />
          </div>
          <TabsList className="rounded-none bg-transparent p-0">
            {Object.entries(tabs).map(([key]) => {
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="h-7 border border-transparent pt-0.5 shadow-none! data-[state=active]:border-input data-[state=active]:bg-background!"
                >
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        <div className="no-scrollbar overflow-x-auto">
          {Object.entries(tabs).map(([key, value]) => {
            return (
              <TabsContent key={key} value={key} className="mt-0 px-4 py-3.5">
                <CodeBlock className="my-0 rounded-sm px-3">
                  <Pre className="text-sm max-h-96">
                    <code
                      className="relative font-mono leading-none"
                      data-language="bash"
                    >
                      {value}
                    </code>
                  </Pre>
                </CodeBlock>
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              data-slot="copy-button"
              size="icon-sm"
              variant="ghost"
              className="absolute right-2 top-2 z-10 opacity-70 hover:opacity-100 focus-visible:opacity-100"
              onClick={copyCommand}
            >
              <span className="sr-only">Copy</span>
              {hasCopied ? <CheckIcon /> : <CopyIcon />}
            </Button>
          }
        />
        <TooltipContent>Copy</TooltipContent>
      </Tooltip>
    </div>
  );
}

export function CodeBlockCommand({ command }: { command: string }) {
  const commandWithoutNpm = command.split(" ").slice(1).join(" ");
  let output = {
    __pnpm__: `pnpm dlx ${commandWithoutNpm}`,
    __npm__: `npx ${commandWithoutNpm}`,
    __yarn__: `yarn ${commandWithoutNpm}`,
    __bun__: `bunx ${commandWithoutNpm}`,
  };
  if (command.startsWith("npm"))
    output = {
      __pnpm__: `pnpm ${commandWithoutNpm}`,
      __npm__: `npm ${commandWithoutNpm}`,
      __yarn__: `yarn ${commandWithoutNpm}`,
      __bun__: `bun ${commandWithoutNpm}`,
    };
  return <CodeBlockCommandWrapper {...output} />;
}
