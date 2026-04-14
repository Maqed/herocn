import {
	ButtonGroup,
	ButtonGroupText,
} from "@/registry/new-york-v4/ui/button-group";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Label } from "@/registry/new-york-v4/ui/label";

export default function ButtonGroupTextDemo() {
	return (
		<ButtonGroup className="max-w-sm">
			<ButtonGroupText
				render={<Label htmlFor="button-group-text-name">Text</Label>}
			/>
			<Input
				id="button-group-text-name"
				variant="secondary"
				placeholder="Type something here..."
			/>
		</ButtonGroup>
	);
}
