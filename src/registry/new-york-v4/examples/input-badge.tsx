import { Badge } from "@/registry/new-york-v4/ui/badge";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";

export default function InputBadge() {
	return (
		<div className="w-full max-w-sm">
			<Field>
				<FieldLabel
					htmlFor="input-badge"
					className="flex w-full items-center gap-2"
				>
					Webhook URL
					<Badge variant="default" className="ml-auto">
						Beta
					</Badge>
				</FieldLabel>
				<Input
					id="input-badge"
					type="url"
					placeholder="https://api.example.com/webhook"
				/>
			</Field>
		</div>
	);
}
