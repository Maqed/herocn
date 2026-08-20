import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

export default function AvatarSizeExample() {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<Avatar size="sm">
				<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
				<AvatarFallback>Mqd</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
				<AvatarFallback>Mqd</AvatarFallback>
			</Avatar>
			<Avatar size="lg">
				<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
				<AvatarFallback>Mqd</AvatarFallback>
			</Avatar>
		</div>
	);
}
