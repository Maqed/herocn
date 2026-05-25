import { AspectRatio } from "@/registry/new-york-v4/ui/aspect-ratio";

export default function AspectRatioSquare() {
	return (
		<AspectRatio
			ratio={1 / 1}
			className="w-full max-w-[12rem] rounded-lg bg-muted"
		>
			<img
				src="https://avatar.vercel.sh/shadcn1"
				alt="Square aspect ratio"
				className="size-full rounded-lg object-cover"
			/>
		</AspectRatio>
	);
}
