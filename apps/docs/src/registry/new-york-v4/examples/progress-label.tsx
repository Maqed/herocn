import {
	Progress,
	ProgressLabel,
	ProgressValue,
} from "@/registry/new-york-v4/ui/progress";

export default function ProgressLabelExample() {
	return (
		<Progress value={56} className="w-full max-w-sm">
			<ProgressLabel>Upload progress</ProgressLabel>
			<ProgressValue />
		</Progress>
	);
}
