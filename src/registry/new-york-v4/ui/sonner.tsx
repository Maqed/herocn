"use client";

import {
	CircleCheckIcon,
	InfoIcon,
	Loader2Icon,
	OctagonXIcon,
	TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = "system" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			className="toaster group"
			icons={{
				success: <CircleCheckIcon className="size-4" />,
				info: <InfoIcon className="size-4" />,
				warning: <TriangleAlertIcon className="size-4" />,
				error: <OctagonXIcon className="size-4" />,
				loading: (
					<Loader2Icon className="size-4 animate-duration-750 animate-spin" />
				),
			}}
			position="bottom-center"
			style={
				{
					"--normal-bg": "var(--popover)",
					"--normal-text": "var(--popover-foreground)",
					"--normal-border": "var(--border)",
					"--border-radius": "var(--radius)",
					"--info-bg": "var(--surface)",
					"--success-bg": "var(--surface)",
					"--success-text": "var(--success)",
					"--warning-bg": "var(--surface)",
					"--warning-text": "var(--warning)",
					"--error-bg": "var(--surface)",
					"--error-text": "var(--destructive)",
				} as React.CSSProperties
			}
			richColors
			closeButton
			toastOptions={{
				classNames: {
					toast:
						"group/toast border-none! rounded-3xl! bg-surface! px-4! py-3! shadow-xl! gap-1.5! sm:w-auto sm:min-w-112",
					title: "text-sm! leading-5! font-medium!",
					description: "text-sm! text-muted-foreground!",
					closeButton:
						"top-2.5! end-0.5! transition-none text-muted-foreground! left-[unset]! translate-x-0! translate-y-0! size-5! border-border! bg-default! sm:bg-surface! text-default transition-all duration-500 sm:opacity-0! sm:pointer-events-none! sm:-top-1! sm:-end-1! group-hover:opacity-100! group-hover:pointer-events-auto!",
					actionButton:
						"rounded-3xl! bg-default! text-default-foreground! hover:bg-default/80! active:bg-default/80! pressible h-8! px-3! text-xs! mt-2! sm:mt-0!",
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
