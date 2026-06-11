"use client";

import * as React from "react";
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/registry/new-york-v4/ui/carousel";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function CarouselApiExample() {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="mx-auto max-w-96 sm:max-w-xs">
			<Carousel setApi={setApi} className="w-full max-w-xs">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<Surface className="flex aspect-square items-center justify-center rounded-3xl p-6">
								<span className="font-semibold text-4xl">{index + 1}</span>
							</Surface>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className="py-2 text-center text-muted-foreground text-sm">
				Slide {current} of {count}
			</div>
		</div>
	);
}
