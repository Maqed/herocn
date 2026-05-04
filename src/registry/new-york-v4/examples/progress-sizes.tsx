import {
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/registry/new-york-v4/ui/progress";

export default function ProgressSizes() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Progress value={40} size="sm" className="w-full">
				<ProgressLabel>Small</ProgressLabel>
				<ProgressValue />
			</Progress>
			<Progress value={55} size="default" className="w-full">
				<ProgressLabel>Default</ProgressLabel>
				<ProgressValue />
			</Progress>
			<Progress value={70} size="lg" className="w-full">
				<ProgressLabel>Large</ProgressLabel>
				<ProgressValue />
			</Progress>
		</div>
	);
}
