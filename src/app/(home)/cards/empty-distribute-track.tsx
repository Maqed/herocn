import { PlusIcon } from "lucide-react";

import { Button } from "@/registry/new-york-v4/ui/button";
import { Card, CardContent } from "@/registry/new-york-v4/ui/card";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyMedia,
	EmptyTitle,
} from "@/registry/new-york-v4/ui/empty";

export function EmptyDistributeTrack() {
	return (
		<Card>
			<CardContent>
				<Empty className="p-4">
					<EmptyMedia variant="icon">
						<PlusIcon strokeWidth={2} />
					</EmptyMedia>
					<EmptyHeader>
						<EmptyTitle>Distribute Track</EmptyTitle>
						<EmptyDescription>
							Upload your first master to start reaching listeners on Spotify,
							Apple Music, and more.
						</EmptyDescription>
					</EmptyHeader>
					<EmptyContent>
						<Button>Create Release</Button>
					</EmptyContent>
				</Empty>
			</CardContent>
		</Card>
	);
}
