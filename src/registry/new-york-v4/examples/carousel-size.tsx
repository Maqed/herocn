import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/registry/new-york-v4/ui/carousel";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function CarouselSize() {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full max-w-[12rem] sm:max-w-xs md:max-w-sm"
		>
			<CarouselContent>
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
						<div className="p-1">
							<Surface className="flex aspect-square items-center justify-center rounded-3xl p-6">
								<span className="font-semibold text-3xl">{index + 1}</span>
							</Surface>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
