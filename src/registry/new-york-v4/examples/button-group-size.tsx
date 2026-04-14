import { PlusIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { ButtonGroup } from "@/registry/new-york-v4/ui/button-group";

export default function ButtonGroupSize() {
	return (
		<div className="flex flex-col items-start gap-8">
			<ButtonGroup>
				<Button variant="tertiary" size="sm">
					Small
				</Button>
				<Button variant="tertiary" size="sm">
					Button
				</Button>
				<Button variant="tertiary" size="sm">
					Group
				</Button>
				<Button variant="tertiary" size="icon-sm">
					<PlusIcon />
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="tertiary">Default</Button>
				<Button variant="tertiary">Button</Button>
				<Button variant="tertiary">Group</Button>
				<Button variant="tertiary" size="icon">
					<PlusIcon />
				</Button>
			</ButtonGroup>
			<ButtonGroup>
				<Button variant="tertiary" size="lg">
					Large
				</Button>
				<Button variant="tertiary" size="lg">
					Button
				</Button>
				<Button variant="tertiary" size="lg">
					Group
				</Button>
				<Button variant="tertiary" size="icon-lg">
					<PlusIcon />
				</Button>
			</ButtonGroup>
		</div>
	);
}
