import { Label } from "@/registry/new-york-v4/ui/label";
import {
	RadioGroup,
	RadioGroupItem,
} from "@/registry/new-york-v4/ui/radio-group";

export default function RadioGroupDemo() {
	return (
		<RadioGroup defaultValue="comfortable" className="w-fit">
			<div className="flex items-center gap-3">
				<RadioGroupItem value="default" id="radio-demo-r1" />
				<Label htmlFor="radio-demo-r1">Default</Label>
			</div>
			<div className="flex items-center gap-3">
				<RadioGroupItem value="comfortable" id="radio-demo-r2" />
				<Label htmlFor="radio-demo-r2">Comfortable</Label>
			</div>
			<div className="flex items-center gap-3">
				<RadioGroupItem value="compact" id="radio-demo-r3" />
				<Label htmlFor="radio-demo-r3">Compact</Label>
			</div>
		</RadioGroup>
	);
}
