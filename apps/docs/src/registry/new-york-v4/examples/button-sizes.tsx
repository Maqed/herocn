import { SearchIcon } from "lucide-react";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-xs">
        <SearchIcon />
      </Button>
      <Button size="icon-sm">
        <SearchIcon />
      </Button>
      <Button size="icon">
        <SearchIcon />
      </Button>
      <Button size="icon-lg">
        <SearchIcon />
      </Button>
    </div>
  );
}
