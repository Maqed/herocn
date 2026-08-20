import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

export default function AvatarGroupCountExample() {
	return (
		<AvatarGroup>
			<Avatar>
				<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
				<AvatarFallback>Mqd</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
				<AvatarFallback>LR</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://github.com/evilrabbit.png"
					alt="@evilrabbit"
				/>
				<AvatarFallback>ER</AvatarFallback>
			</Avatar>
			<AvatarGroupCount>+3</AvatarGroupCount>
		</AvatarGroup>
	);
}
