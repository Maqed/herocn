import { Slider } from "@/registry/new-york-v4/ui/slider";

export default function SliderMultiple() {
	return (
		<Slider
			defaultValue={[10, 40, 70]}
			max={100}
			step={10}
			className="mx-auto w-full max-w-xs"
		/>
	);
}
