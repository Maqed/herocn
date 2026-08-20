import { Textarea } from "@/registry/new-york-v4/ui/textarea";

export default function TextareaDemo() {
	return (
		<div className="w-full max-w-sm">
			<Textarea placeholder="Type your message here." rows={4} />
		</div>
	);
}
