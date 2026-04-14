"use client";

import * as React from "react";

import { Label } from "@/registry/new-york-v4/ui/label";
import { Slider } from "@/registry/new-york-v4/ui/slider";

export default function SliderControlled() {
	const [value, setValue] = React.useState([0.3, 0.7]);

	return (
		<div className="mx-auto grid w-full max-w-xs gap-3">
			<div className="flex items-center justify-between gap-2">
				<Label htmlFor="slider-controlled-temperature">Temperature</Label>
				<span className="text-muted-foreground text-sm">
					{value.join(", ")}
				</span>
			</div>
			<Slider
				id="slider-controlled-temperature"
				value={value}
				onValueChange={(val) => setValue(val as number[])}
				min={0}
				max={1}
				step={0.1}
			/>
		</div>
	);
}
