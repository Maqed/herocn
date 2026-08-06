"use client";

import * as React from "react";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/registry/new-york-v4/ui/dialog";
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
	{ name: "scope", required: true },
	{ name: "tests", required: true },
] as const;

export default function QuestionnaireDialog() {
	const [open, setOpen] = React.useState(false);

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);

		setOpen(false);
		toast.add({
			title: "Clarification sent",
			description: `Scope: ${formData.get("scope") ?? "None"} · Verification: ${formData.get("tests") ?? "None"}`,
		});
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger render={<Button variant="outline" />}>
				Open clarification
			</DialogTrigger>
			<DialogContent>
				<Questionnaire
					defaultItem="scope"
					items={items}
					onSubmit={handleSubmit}
				>
					<QuestionnaireItem name="scope" required>
						<DialogHeader>
							<QuestionnaireProgress />
							<QuestionnaireTitle render={<DialogTitle />}>
								Which files are in scope?
							</QuestionnaireTitle>
							<QuestionnaireDescription render={<DialogDescription />}>
								Choose how broadly the agent can update the workspace.
							</QuestionnaireDescription>
						</DialogHeader>
						<QuestionnaireChoices>
							<QuestionnaireChoice variant="secondary" value="component">
								Component only
							</QuestionnaireChoice>
							<QuestionnaireChoice variant="secondary" value="feature">
								Complete feature directory
							</QuestionnaireChoice>
							<QuestionnaireChoice variant="secondary" value="workspace">
								Any related workspace file
							</QuestionnaireChoice>
						</QuestionnaireChoices>
						<QuestionnaireError />
					</QuestionnaireItem>

					<QuestionnaireItem name="tests" required>
						<DialogHeader>
							<QuestionnaireProgress />
							<QuestionnaireTitle render={<DialogTitle />}>
								How much verification is needed?
							</QuestionnaireTitle>
							<QuestionnaireDescription render={<DialogDescription />}>
								Choose the checks the agent should run before handoff.
							</QuestionnaireDescription>
						</DialogHeader>
						<QuestionnaireChoices>
							<QuestionnaireChoice variant="secondary" value="targeted">
								Targeted tests
							</QuestionnaireChoice>
							<QuestionnaireChoice variant="secondary" value="package">
								Package tests
							</QuestionnaireChoice>
							<QuestionnaireChoice variant="secondary" value="full">
								Full workspace verification
							</QuestionnaireChoice>
						</QuestionnaireChoices>
						<QuestionnaireError />
					</QuestionnaireItem>

					<DialogFooter>
						<DialogClose render={<Button type="button" variant="outline" />}>
							Cancel
						</DialogClose>
						<QuestionnaireActions>
							<QuestionnairePrevious />
							<QuestionnaireNext>Next</QuestionnaireNext>
							<QuestionnaireSubmit>Send answer</QuestionnaireSubmit>
						</QuestionnaireActions>
					</DialogFooter>
				</Questionnaire>
			</DialogContent>
		</Dialog>
	);
}
