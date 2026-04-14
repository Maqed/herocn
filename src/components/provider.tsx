"use client";
import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import { Toaster } from "@/registry/new-york-v4/ui/sonner";
import { TooltipProvider } from "@/registry/new-york-v4/ui/tooltip";

export function Provider({ children }: { children: ReactNode }) {
	return (
		<RootProvider search={{ enabled: false }}>
			<Toaster />
			<TooltipProvider>{children}</TooltipProvider>
		</RootProvider>
	);
}
