import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/registry/new-york-v4/ui/carousel";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function CarouselOrientation() {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			orientation="vertical"
			className="w-full max-w-xs"
		>
			<CarouselContent className="-mt-1 h-[270px]">
				{Array.from({ length: 5 }).map((_, index) => (
					<CarouselItem key={index} className="basis-1/2 pt-1">
						<div className="p-1">
							<Surface className="flex items-center justify-center rounded-3xl p-6">
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
