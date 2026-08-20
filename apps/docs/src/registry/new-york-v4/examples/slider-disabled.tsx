import { Slider } from "@/registry/new-york-v4/ui/slider";

export default function SliderDisabled() {
	return (
		<Slider
			defaultValue={[50]}
			max={100}
			step={1}
			disabled
			className="mx-auto w-full max-w-xs"
		/>
	);
}
