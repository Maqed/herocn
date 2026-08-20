import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

export default function AvatarGroupExample() {
	return (
		<AvatarGroup>
			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
				<AvatarFallback>LR</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
				<AvatarFallback>Mqd</AvatarFallback>
			</Avatar>
		</AvatarGroup>
	);
}
