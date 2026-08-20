import { AspectRatio } from "@/registry/new-york-v4/ui/aspect-ratio";

export default function AspectRatioDemo() {
	return (
		<AspectRatio ratio={16 / 9} className="w-full max-w-sm rounded-lg bg-muted">
			<img
				src="https://avatar.vercel.sh/shadcn1"
				alt="Aspect ratio demo"
				className="size-full rounded-lg object-cover"
			/>
		</AspectRatio>
	);
}
