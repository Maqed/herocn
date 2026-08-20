import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

export default function AvatarBasic() {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
			<AvatarFallback>Mqd</AvatarFallback>
		</Avatar>
	);
}
