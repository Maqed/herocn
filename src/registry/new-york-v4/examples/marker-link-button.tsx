"use client";

import { GitBranchIcon, RotateCcwIcon } from "lucide-react";
import { toast } from "sonner";

import {
	Marker,
	MarkerContent,
	MarkerIcon,
} from "@/registry/new-york-v4/ui/marker";

export default function MarkerLinkButton() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-8 py-12">
			<Marker render={<a href="#" />}>
				<MarkerIcon>
					<GitBranchIcon />
				</MarkerIcon>
				<MarkerContent>View the pull request</MarkerContent>
			</Marker>
			<Marker
				render={
					<button
						type="button"
						className="transition-colors hover:text-foreground"
						onClick={() => toast("You clicked the revert button")}
					/>
				}
			>
				<MarkerIcon>
					<RotateCcwIcon />
				</MarkerIcon>
				<MarkerContent>Revert this change</MarkerContent>
			</Marker>
		</div>
	);
}
