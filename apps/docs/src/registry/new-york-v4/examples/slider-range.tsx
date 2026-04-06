import { Slider } from "@/registry/new-york-v4/ui/slider";

export default function SliderRange() {
  return (
    <Slider
      defaultValue={[25, 75]}
      max={100}
      step={5}
      className="mx-auto w-full max-w-xs"
    />
  );
}
