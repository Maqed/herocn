import { Button } from "@/registry/new-york-v4/ui/button";
import {
	ButtonGroup,
	ButtonGroupSeparator,
} from "@/registry/new-york-v4/ui/button-group";

export default function ButtonGroupSeparatorDemo() {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<ButtonGroup orientation="horizontal">
				<Button variant="secondary" size="sm">
					Copy
				</Button>
				<ButtonGroupSeparator />
				<Button variant="secondary" size="sm">
					Paste
				</Button>
			</ButtonGroup>
			<ButtonGroup orientation="vertical" className="w-fit">
				<Button variant="secondary" size="sm">
					Copy
				</Button>
				<ButtonGroupSeparator orientation="horizontal" />
				<Button variant="secondary" size="sm">
					Paste
				</Button>
			</ButtonGroup>
		</div>
	);
}
