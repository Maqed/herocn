"use client";
import { cn } from "cn";
import { AlertCircleIcon } from "lucide-react";
import type * as React from "react";
import {
	LanguageProvider,
	LanguageSelector,
	type Translations,
	useLanguageContext,
	useTranslation,
} from "@/components/language-selector";
import { Button } from "@/registry/new-york-v4/ui/button";
import { DirectionProvider } from "@/registry/new-york-v4/ui/direction";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";
import { Separator } from "@/registry/new-york-v4/ui/separator";

export function ComponentPreviewTabs({
	className,
	previewClassName,
	align = "center",
	direction = "ltr",
	hideCode = false,
	component,
	source,
	...props
}: React.ComponentProps<"div"> & {
	previewClassName?: string;
	align?: "center" | "start" | "end";
	direction?: "ltr" | "rtl";
	hideCode?: boolean;
	component: React.ReactNode;
	source: React.ReactNode;
}) {
	return (
		<div
			data-slot="component-preview"
			className={cn(
				"group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-3xl border",
				className,
			)}
			{...props}
		>
			{direction === "rtl" ? (
				<LanguageProvider defaultLanguage="ar">
					<div className="flex h-16 items-center justify-between border-b px-4">
						<RtlLanguageSelector />
						<Popover>
							<PopoverTrigger
								render={
									<Button variant="ghost" size="icon-sm">
										<AlertCircleIcon />
										<span className="sr-only">Toggle</span>
									</Button>
								}
							/>
							<PopoverContent
								side="bottom"
								align="end"
								className="w-56 text-xs"
							>
								<div>
									I used AI to translate the text for demonstration purposes.
									It&apos;s not perfect and may contain errors.
								</div>
								<Separator className="-mx-2.5 w-auto!" />
								<div data-lang="ar">
									لقد استخدمت الذكاء الاصطناعي لترجمة النص للأغراض التجريبية
									فقط. قد لا تكون الترجمة دقيقة وقد تحتوي على أخطاء.
								</div>
								<Separator className="-mx-2.5 w-auto!" />
								<div data-lang="he">
									השתמשתי בבינה מלאכותית כדי לתרגם את הטקסט למטרות הדגמה. זה לא
									מושלם ויכול להכיל שגיאות.
								</div>
							</PopoverContent>
						</Popover>
					</div>
					<PreviewWrapper align={align} previewClassName={previewClassName}>
						<DirectionProviderWrapper dir="rtl">
							{component}
						</DirectionProviderWrapper>
					</PreviewWrapper>
				</LanguageProvider>
			) : (
				<DirectionProviderWrapper dir="ltr">
					<PreviewWrapper align={align} previewClassName={previewClassName}>
						{component}
					</PreviewWrapper>
				</DirectionProviderWrapper>
			)}
			{!hideCode && (
				<div
					data-slot="code"
					className="relative border-t [&_[data-slot=code-block]]:rounded-none [&_[data-slot=code-block]]:border-0"
				>
					{source}
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
					"preview not-prose relative flex min-h-72 w-full justify-center p-10 px-0.5 data-[chromeless=true]:h-auto data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center data-[chromeless=true]:p-0 sm:px-4 md:px-10",
					previewClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

const directionTranslations: Translations<Record<string, never>> = {
	en: {
		dir: "ltr",
		values: {},
	},
	ar: {
		dir: "rtl",
		values: {},
	},
	he: {
		dir: "rtl",
		values: {},
	},
};

function RtlLanguageSelector({ className }: { className?: string }) {
	const context = useLanguageContext();
	if (!context) {
		return null;
	}
	return (
		<LanguageSelector
			value={context.language}
			onValueChange={context.setLanguage}
			className={className}
		/>
	);
}

function DirectionProviderWrapper({
	dir: explicitDir,
	children,
}: {
	dir?: "ltr" | "rtl";
	children: React.ReactNode;
}) {
	// useTranslation handles the case when there's no LanguageProvider context.
	// It will fall back to local state with defaultLanguage.
	const translation = useTranslation(directionTranslations, "ar");
	const dir = explicitDir ?? translation.dir;

	return <DirectionProvider direction={dir}>{children}</DirectionProvider>;
}
