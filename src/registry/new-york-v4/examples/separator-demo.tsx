import { Separator } from "@/registry/new-york-v4/ui/separator";

export default function SeparatorDemo() {
	return (
		<div className="flex max-w-sm flex-col gap-4 text-sm">
			<div className="flex flex-col gap-1.5">
				<div className="font-medium leading-none">herocn</div>
				<div className="text-muted-foreground">
					HeroUI design system, shadcn/ui abstraction
				</div>
			</div>
			<Separator />
			<div>Beautifully designed components for your next application.</div>
		</div>
	);
}
