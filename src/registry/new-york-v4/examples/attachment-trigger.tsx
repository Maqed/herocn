import { CopyIcon, FileSearchIcon, XIcon } from "lucide-react";

import {
	Attachment,
	AttachmentAction,
	AttachmentActions,
	AttachmentContent,
	AttachmentDescription,
	AttachmentMedia,
	AttachmentTitle,
	AttachmentTrigger,
} from "@/registry/new-york-v4/ui/attachment";

export default function AttachmentTriggerDemo() {
	return (
		<div className="mx-auto w-full max-w-sm py-12">
			<Attachment className="w-full">
				<AttachmentMedia>
					<FileSearchIcon />
				</AttachmentMedia>
				<AttachmentContent>
					<AttachmentTitle>research-summary.pdf</AttachmentTitle>
					<AttachmentDescription>Open in new tab</AttachmentDescription>
				</AttachmentContent>
				<AttachmentActions>
					<AttachmentAction aria-label="Copy link">
						<CopyIcon />
					</AttachmentAction>
					<AttachmentAction aria-label="Remove research-summary.pdf">
						<XIcon />
					</AttachmentAction>
				</AttachmentActions>
				<AttachmentTrigger
					render={
						<a
							href="#"
							target="_blank"
							rel="noreferrer"
							aria-label="Open research-summary.pdf"
						/>
					}
				/>
			</Attachment>
		</div>
	);
}
