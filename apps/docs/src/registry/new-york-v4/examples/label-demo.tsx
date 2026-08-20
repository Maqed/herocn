import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";

export default function LabelDemo() {
	return (
		<div className="grid w-full max-w-sm items-center gap-2">
			<Label htmlFor="label-demo-email">Email</Label>
			<Input id="label-demo-email" type="email" placeholder="m@example.com" />
		</div>
	);
}
