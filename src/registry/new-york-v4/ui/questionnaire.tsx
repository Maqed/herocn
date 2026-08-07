"use client";

import { Questionnaire as QuestionnairePrimitive } from "@shadcn/react/questionnaire";
import { CheckIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { type Button, buttonVariants } from "@/registry/new-york-v4/ui/button";

function Questionnaire({
	className,
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Root>) {
	return (
		<QuestionnairePrimitive.Root
			data-slot="questionnaire"
			className={cn("flex w-full min-w-0 flex-col gap-6", className)}
			{...props}
		/>
	);
}

function QuestionnaireProgress({
	className,
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Progress>) {
	return (
		<QuestionnairePrimitive.Progress
			data-slot="questionnaire-progress"
			className={cn(
				"w-fit min-w-[14ch] font-medium text-muted-foreground text-xs tabular-nums group-has-data-[slot=card-action]/card:leading-6",
				className,
			)}
			{...props}
		/>
	);
}

function QuestionnaireItem({
	className,
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Item>) {
	return (
		<QuestionnairePrimitive.Item
			data-slot="questionnaire-item"
			className={cn(
				"flex min-w-0 flex-col gap-5 border-0 p-0 outline-none",
				className,
			)}
			{...props}
		/>
	);
}

function QuestionnaireTitle({
	className,
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Title>) {
	return (
		<QuestionnairePrimitive.Title
			data-slot="questionnaire-title"
			className={cn(
				"text-pretty font-semibold text-base [&:not(:has(~[data-slot=questionnaire-description]))]:mb-5",
				className,
			)}
			{...props}
		/>
	);
}

function QuestionnaireDescription({
	className,
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Description>) {
	return (
		<QuestionnairePrimitive.Description
			data-slot="questionnaire-description"
			className={cn("text-pretty text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

function QuestionnaireChoices({
	className,
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choices>) {
	return (
		<QuestionnairePrimitive.Choices
			data-slot="questionnaire-choices"
			className={cn(
				"group/questionnaire-choices grid min-w-0 gap-3",
				className,
			)}
			{...props}
		/>
	);
}

function QuestionnaireChoice({
	children,
	className,
	variant = "default",
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Choice> & {
	variant?: "default" | "secondary";
}) {
	return (
		<QuestionnairePrimitive.Choice
			data-slot="questionnaire-choice"
			data-variant={variant}
			className={cn(
				"group/questionnaire-choice relative flex min-h-11 cursor-pointer select-none items-start gap-3.5 rounded-xl border border-input bg-input px-4 py-3.5 text-start text-sm shadow-xs outline-none dark:brightness-100",
				"data-[variant=secondary]:bg-default data-[variant=secondary]:shadow-none not-dark:data-[variant=secondary]:brightness-100",
				"hover:not-focus-visible:brightness-97 hover:not-focus-visible:data-[variant=secondary]:bg-default not-dark:hover:not-focus-visible:data-[variant=secondary]:brightness-96 dark:hover:not-focus-visible:brightness-110",
				"has-[>input:not([aria-invalid=true]):focus-visible]:focus-field-ring has-[>input:not([aria-invalid=true]):focus-visible]:ring-ring",
				"has-[>input[aria-invalid=true]:not(:focus-visible)]:invalid-field-ring has-[>input[aria-invalid=true]:focus-visible]:invalid-field-ring-focus",
				"data-checked:border-primary data-checked:bg-primary-soft",
				"data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-disabled:opacity-50",
				className,
			)}
			{...props}
		>
			<QuestionnairePrimitive.ChoiceInput
				data-slot="questionnaire-choice-input"
				className="absolute inset-0 z-10 size-full cursor-pointer opacity-0"
			/>
			<span
				aria-hidden="true"
				data-slot="questionnaire-choice-indicator"
				className="pointer-events-none relative flex size-4 shrink-0 items-center justify-center rounded-xl border border-input bg-default group-data-[variant=secondary]/questionnaire-choice:group-data-unchecked/questionnaire-choice:bg-card group-data-[type=radio]/questionnaire-choice:rounded-full group-data-checked/questionnaire-choice:border-primary group-data-checked/questionnaire-choice:bg-primary group-data-checked/questionnaire-choice:text-primary-foreground dark:group-data-checked/questionnaire-choice:bg-primary"
			>
				<span
					data-slot="questionnaire-choice-indicator-dot"
					className="hidden size-2 rounded-full bg-primary-foreground group-data-checked/questionnaire-choice:block group-data-[type=checkbox]/questionnaire-choice:hidden"
				/>
				<CheckIcon
					data-slot="questionnaire-choice-indicator-check"
					className="hidden size-3.5 group-data-checked/questionnaire-choice:block group-data-[type=radio]/questionnaire-choice:hidden"
				/>
			</span>
			<QuestionnairePrimitive.ChoiceLabel
				data-slot="questionnaire-choice-label"
				className="flex min-w-0 flex-1 flex-col gap-1 leading-snug"
			>
				{children}
			</QuestionnairePrimitive.ChoiceLabel>
			<QuestionnairePrimitive.ChoiceShortcut
				data-slot="questionnaire-choice-shortcut"
				className="pointer-events-none ms-auto mt-0.5 hidden size-5 shrink-0 items-center justify-center rounded-full border border-input bg-background/80 font-medium font-mono text-[0.625rem] text-muted-foreground leading-none group-data-shortcut/questionnaire-choice:inline-flex"
			/>
		</QuestionnairePrimitive.Choice>
	);
}

function QuestionnaireInput({
	className,
	variant = "default",
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Input> & {
	variant?: "default" | "secondary";
}) {
	return (
		<QuestionnairePrimitive.Input
			data-slot="questionnaire-input"
			data-variant={variant}
			className={cn(
				"w-full min-w-0 rounded-xl bg-input px-2.5 py-1.5 text-sm shadow-xs outline-none transition-all placeholder:text-muted-foreground md:px-3 md:py-2 dark:brightness-100",
				"data-[variant=secondary]:bg-default data-[variant=secondary]:shadow-none not-dark:data-[variant=secondary]:brightness-100",
				"hover:not-focus-visible:brightness-97 hover:not-focus-visible:data-[variant=secondary]:bg-default not-dark:hover:not-focus-visible:data-[variant=secondary]:brightness-96 dark:hover:not-focus-visible:brightness-110",
				"not-aria-invalid:focus-visible:focus-field-ring not-aria-invalid:focus-visible:ring-ring",
				"aria-invalid:not-focus-visible:invalid-field-ring aria-invalid:focus-visible:invalid-field-ring-focus",
				"disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
				"selection:bg-primary selection:text-primary-foreground",
				className,
			)}
			{...props}
		/>
	);
}

function QuestionnaireError({
	className,
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Error>) {
	return (
		<QuestionnairePrimitive.Error
			data-slot="questionnaire-error"
			className={cn("font-normal text-destructive text-sm", className)}
			{...props}
		/>
	);
}

function QuestionnaireActions({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="questionnaire-actions"
			className={cn(
				"flex min-h-11 w-full flex-wrap items-center justify-end gap-2 sm:min-h-9",
				className,
			)}
			{...props}
		/>
	);
}

function QuestionnairePrevious({
	children,
	className,
	size = "default",
	variant = "outline",
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Previous> &
	Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
	return (
		<QuestionnairePrimitive.Previous
			data-slot="questionnaire-previous"
			data-size={size}
			data-variant={variant}
			className={cn(
				buttonVariants({ size, variant }),
				"me-auto min-h-11 sm:min-h-0",
				className,
			)}
			{...props}
		>
			{children ?? "Previous"}
		</QuestionnairePrimitive.Previous>
	);
}

function QuestionnaireSkip({
	children,
	className,
	size = "default",
	variant = "outline",
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Skip> &
	Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
	return (
		<QuestionnairePrimitive.Skip
			data-slot="questionnaire-skip"
			data-size={size}
			data-variant={variant}
			className={cn(
				buttonVariants({ size, variant }),
				"min-h-11 sm:min-h-0",
				className,
			)}
			{...props}
		>
			{children ?? "Skip"}
		</QuestionnairePrimitive.Skip>
	);
}

function QuestionnaireNext({
	children,
	className,
	size = "default",
	variant = "default",
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Next> &
	Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
	return (
		<QuestionnairePrimitive.Next
			data-slot="questionnaire-next"
			data-size={size}
			data-variant={variant}
			className={cn(
				buttonVariants({ size, variant }),
				"min-h-11 sm:min-h-0",
				className,
			)}
			{...props}
		>
			{children ?? "Next"}
		</QuestionnairePrimitive.Next>
	);
}

function QuestionnaireSubmit({
	children,
	className,
	size = "default",
	variant = "default",
	...props
}: React.ComponentProps<typeof QuestionnairePrimitive.Submit> &
	Pick<React.ComponentProps<typeof Button>, "size" | "variant">) {
	return (
		<QuestionnairePrimitive.Submit
			data-slot="questionnaire-submit"
			data-size={size}
			data-variant={variant}
			className={cn(
				buttonVariants({ size, variant }),
				"min-h-11 sm:min-h-0",
				className,
			)}
			{...props}
		>
			{children ?? "Submit"}
		</QuestionnairePrimitive.Submit>
	);
}

export {
	Questionnaire,
	QuestionnaireActions,
	QuestionnaireChoice,
	QuestionnaireChoices,
	QuestionnaireDescription,
	QuestionnaireError,
	QuestionnaireInput,
	QuestionnaireItem,
	QuestionnaireNext,
	QuestionnairePrevious,
	QuestionnaireProgress,
	QuestionnaireSkip,
	QuestionnaireSubmit,
	QuestionnaireTitle,
};
