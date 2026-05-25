import { AspectRatio } from "@/registry/new-york-v4/ui/aspect-ratio";

export default function AspectRatioPortrait() {
	return (
		<AspectRatio
			ratio={9 / 16}
			className="w-full max-w-[10rem] rounded-lg bg-muted"
		>
			<img
				src="https://avatar.vercel.sh/shadcn1"
				alt="Portrait aspect ratio"
				className="size-full rounded-lg object-cover"
			/>
		</AspectRatio>
	);
}
