import { PlusIcon } from "lucide-react";
import {
	Avatar,
	AvatarFallback,
	AvatarGroup,
	AvatarGroupCount,
	AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

export default function AvatarGroupCountIconExample() {
	return (
		<AvatarGroup>
			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
				<AvatarFallback>Mqd</AvatarFallback>
			</Avatar>
			<Avatar>
				<AvatarImage
					src="https://github.com/evilrabbit.png"
					alt="@evilrabbit"
				/>
				<AvatarFallback>ER</AvatarFallback>
			</Avatar>
			<AvatarGroupCount>
				<PlusIcon />
			</AvatarGroupCount>
		</AvatarGroup>
	);
}
