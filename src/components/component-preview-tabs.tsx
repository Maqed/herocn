"use client";
import { AlertCircleIcon } from "lucide-react";
import * as React from "react";
import {
	LanguageProvider,
	LanguageSelector,
	type Translations,
	useLanguageContext,
	useTranslation,
} from "@/components/language-selector";
import { cn } from "@/lib/utils";
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
	sourcePreview,
	...props
}: React.ComponentProps<"div"> & {
	previewClassName?: string;
	align?: "center" | "start" | "end";
	direction?: "ltr" | "rtl";
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
