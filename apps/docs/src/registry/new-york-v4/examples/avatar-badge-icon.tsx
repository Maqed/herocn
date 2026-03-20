import { PlusIcon } from "lucide-react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar";

export default function AvatarBadgeIconExample() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/Maqed.png" alt="@0xMaqed" />
      <AvatarFallback>Mqd</AvatarFallback>
      <AvatarBadge variant="primary">
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  );
}
