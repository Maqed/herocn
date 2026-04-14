import {
	Avatar,
	AvatarBadge,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

export default function AvatarWithBadge() {
	const positions = [
		"bottom-end",
		"bottom-start",
		"top-end",
		"top-start",
	] as const;
	const variants = [
		"default",
		"primary",
		"success",
		"warning",
		"destructive",
	] as const;
	return (
		<div className="flex flex-wrap items-center justify-center gap-2">
			{variants.map((variant, index) => (
				<Avatar key={`avatar-badge-variant-${variant}`}>
					<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
					<AvatarFallback>Mqd</AvatarFallback>
					<AvatarBadge position={positions[index % 4]} variant={variant}>
						{index + 1}
					</AvatarBadge>
				</Avatar>
			))}
		</div>
	);
}
