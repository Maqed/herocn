import { Button } from "@/registry/new-york-v4/ui/button";
import { Kbd } from "@/registry/new-york-v4/ui/kbd";

export default function KbdButton() {
	return (
		<Button variant="outline">
			Accept{" "}
			<Kbd data-icon="inline-end" className="translate-x-0.5">
				⏎
			</Kbd>
		</Button>
	);
}
