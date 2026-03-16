import { SearchIcon } from "lucide-react";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon-sm" aria-label="Search small icon button">
        <SearchIcon className="h-3 w-3" />
      </Button>
      <Button size="icon" aria-label="Search default icon button">
        <SearchIcon className="h-4 w-4" />
      </Button>
      <Button size="icon-lg" aria-label="Search large icon button">
        <SearchIcon className="h-5 w-5" />
      </Button>
    </div>
  );
}
