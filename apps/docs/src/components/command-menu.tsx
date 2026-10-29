"use client";

import { SearchIcon } from "lucide-react";
import * as React from "react";
import type { source } from "@/lib/source";
import { Button } from "@/registry/new-york-v4/ui/button";

type CommandMenuDialogProps = React.ComponentProps<
	typeof import("@/components/command-menu-dialog").CommandMenuDialog
>;

function loadCommandMenuDialog() {
	return import("@/components/command-menu-dialog").then(
		(mod) => mod.CommandMenuDialog,
	);
}

export function CommandMenu({
	tree,
	navItems,
	...props
}: {
	tree: typeof source.pageTree;
	navItems?: { href: string; label: string; isExternal?: boolean }[];
} & Omit<
	CommandMenuDialogProps,
	"open" | "onOpenChange" | "tree" | "navItems"
>) {
	const [open, setOpen] = React.useState(false);
	const [Dialog, setDialog] =
		React.useState<React.ComponentType<CommandMenuDialogProps> | null>(null);
	const dialogLoadGenerationRef = React.useRef(0);

	React.useEffect(() => {
		if (!open) {
			return;
		}

		dialogLoadGenerationRef.current += 1;
		const loadId = dialogLoadGenerationRef.current;
		void loadCommandMenuDialog().then((Component) => {
			if (loadId !== dialogLoadGenerationRef.current) {
				return;
			}
			setDialog(() => Component);
		});
	}, [open]);

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
				if (
					(e.target instanceof HTMLElement && e.target.isContentEditable) ||
					e.target instanceof HTMLInputElement ||
					e.target instanceof HTMLTextAreaElement ||
					e.target instanceof HTMLSelectElement
				) {
					return;
				}

				e.preventDefault();
				setOpen((open) => !open);
			}
		};

		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	return (
		<>
			<Button
				variant="outline"
				className="max-md:size-8 max-md:border-none md:pe-10 max-md:[&_svg:not([class*='size-'])]:size-4.5"
				onClick={() => setOpen(true)}
			>
				<span className="hidden xl:inline-flex">Search documentation...</span>
				<span className="hidden md:inline-flex xl:hidden">Search...</span>
				<span>
					<SearchIcon className="md:hidden" />
				</span>
			</Button>
			{Dialog ? (
				<Dialog
					open={open}
					onOpenChange={setOpen}
					tree={tree}
					navItems={navItems}
					{...props}
				/>
			) : null}
		</>
	);
}
