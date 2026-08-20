"use client";

import * as React from "react";

import {
	Card,
	CardAction,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/registry/new-york-v4/ui/card";
import {
	Questionnaire,
	QuestionnaireActions,
	QuestionnaireChoice,
	QuestionnaireChoices,
	QuestionnaireDescription,
	QuestionnaireError,
	QuestionnaireItem,
	QuestionnaireNext,
	QuestionnairePrevious,
	QuestionnaireProgress,
	QuestionnaireSubmit,
	QuestionnaireTitle,
} from "@/registry/new-york-v4/ui/questionnaire";
import { toast } from "@/registry/new-york-v4/ui/toast";

const items = [
	{ name: "detail", required: true },
	{ name: "audience", required: true },
] as const;

type ItemName = (typeof items)[number]["name"];
type QuestionnaireErrors = Partial<Record<ItemName, string>>;

function validate(formData: FormData) {
	const errors: QuestionnaireErrors = {};

	const detail = formData.get("detail");
	const audience = formData.get("audience");

	if (!detail) {
		errors.detail = "Choose how much detail the answer should include.";
	}

	if (!audience) {
		errors.audience = "Choose who will read the answer.";
	} else if (audience === "public" && detail === "summary") {
		errors.detail =
			"Public answers need enough context. Choose a complete answer.";
	}

	return errors;
}

function ValidationProgress() {
	return (
		<QuestionnaireProgress
			className="min-w-0"
			render={(props, state) => (
				<div {...props}>
					{state.current} / {state.total}
				</div>
			)}
		/>
	);
}

export default function QuestionnaireValidation() {
	const [item, setItem] = React.useState("detail");
	const [errors, setErrors] = React.useState<QuestionnaireErrors>({});

	function clearError(name: ItemName) {
		setErrors((currentErrors) => {
			if (!currentErrors[name]) {
				return currentErrors;
			}

			const nextErrors = { ...currentErrors };
			delete nextErrors[name];
			return nextErrors;
		});
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const nextErrors = validate(new FormData(event.currentTarget));

		setErrors(nextErrors);

		const firstInvalidItem = Object.keys(nextErrors)[0] as ItemName | undefined;

		if (firstInvalidItem) {
			setItem(firstInvalidItem);
			return;
		}

		const formData = new FormData(event.currentTarget);

		toast.add({
			title: "Agent response configured",
			description: `Detail: ${formData.get("detail") ?? "None"} · Audience: ${formData.get("audience") ?? "None"}`,
		});
	}

	return (
		<Questionnaire
			className="mx-auto max-w-md"
			item={item}
			items={items}
			onItemChange={setItem}
			onSubmit={handleSubmit}
		>
			<Card className="w-full">
				<QuestionnaireItem
					invalid={Boolean(errors.detail)}
					name="detail"
					required
				>
					<CardHeader>
						<QuestionnaireTitle>
							How much detail should the answer include?
						</QuestionnaireTitle>
						<QuestionnaireDescription>
							Choose the response depth.
						</QuestionnaireDescription>
						<CardAction>
							<ValidationProgress />
						</CardAction>
					</CardHeader>
					<CardContent>
						<QuestionnaireChoices>
							<QuestionnaireChoice
								variant="secondary"
								value="summary"
								onChange={() => clearError("detail")}
							>
								Concise summary
							</QuestionnaireChoice>
							<QuestionnaireChoice
								variant="secondary"
								value="complete"
								onChange={() => clearError("detail")}
							>
								Complete answer
							</QuestionnaireChoice>
						</QuestionnaireChoices>
						<QuestionnaireError>{errors.detail}</QuestionnaireError>
					</CardContent>
				</QuestionnaireItem>

				<QuestionnaireItem
					invalid={Boolean(errors.audience)}
					name="audience"
					required
				>
					<CardHeader>
						<QuestionnaireTitle>Who will read the answer?</QuestionnaireTitle>
						<QuestionnaireDescription>
							Public answers require complete context.
						</QuestionnaireDescription>
						<CardAction>
							<ValidationProgress />
						</CardAction>
					</CardHeader>
					<CardContent>
						<QuestionnaireChoices>
							<QuestionnaireChoice
								variant="secondary"
								value="team"
								onChange={() => clearError("audience")}
							>
								My team
							</QuestionnaireChoice>
							<QuestionnaireChoice
								variant="secondary"
								value="public"
								onChange={() => clearError("audience")}
							>
								Public audience
							</QuestionnaireChoice>
						</QuestionnaireChoices>
						<QuestionnaireError>{errors.audience}</QuestionnaireError>
					</CardContent>
				</QuestionnaireItem>

				<CardFooter>
					<QuestionnaireActions>
						<QuestionnairePrevious />
						<QuestionnaireNext>Next</QuestionnaireNext>
						<QuestionnaireSubmit>Validate answers</QuestionnaireSubmit>
					</QuestionnaireActions>
				</CardFooter>
			</Card>
		</Questionnaire>
	);
}
