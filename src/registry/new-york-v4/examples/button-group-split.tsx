import { PlusIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
	ButtonGroup,
	ButtonGroupSeparator,
} from "@/registry/new-york-v4/ui/button-group";

export default function ButtonGroupSplit() {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<ButtonGroup orientation="horizontal">
				<Button variant="secondary">Button</Button>
				<ButtonGroupSeparator />
				<Button size="icon" variant="secondary">
					<PlusIcon />
				</Button>
			</ButtonGroup>
			<ButtonGroup orientation="vertical" className="h-fit">
				<Button variant="secondary">Button</Button>
				<ButtonGroupSeparator orientation="horizontal" />
				<Button size="icon" variant="secondary">
					<PlusIcon />
				</Button>
			</ButtonGroup>
		</div>
	);
}
