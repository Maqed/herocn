"use client";

import {
	Bubble,
	BubbleContent,
	BubbleGroup,
} from "@/registry/new-york-v4/ui/bubble";
import { toast } from "@/registry/new-york-v4/ui/toast";

export default function BubbleLinkButtonDemo() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-8 py-12">
			<Bubble variant="muted">
				<BubbleContent>How can I help you today?</BubbleContent>
			</Bubble>
			<BubbleGroup>
				<Bubble variant="soft" align="end">
					<BubbleContent
						render={
							<button
								type="button"
								onClick={() =>
									toast.add({ title: "You clicked forgot password" })
								}
							/>
						}
					>
						I forgot my password
					</BubbleContent>
				</Bubble>
				<Bubble variant="soft" align="end">
					<BubbleContent
						render={
							<button
								type="button"
								onClick={() =>
									toast.add({ title: "You clicked help with subscription" })
								}
							/>
						}
					>
						I need help with my subscription
					</BubbleContent>
				</Bubble>
				<Bubble variant="soft" align="end">
					<BubbleContent
						render={
							<button
								type="button"
								onClick={() =>
									toast.add({
										title: "You clicked something else. Talk to a human.",
									})
								}
							/>
						}
					>
						Something else. Talk to a human.
					</BubbleContent>
				</Bubble>
			</BubbleGroup>
		</div>
	);
}
