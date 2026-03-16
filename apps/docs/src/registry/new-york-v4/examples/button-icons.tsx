import {
  ArrowRightIcon,
  DownloadIcon,
  SearchIcon,
  Trash2Icon,
} from "lucide-react";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function ButtonIcons() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <SearchIcon className="mr-2 h-4 w-4" />
        Search
      </Button>
      <Button variant="secondary">
        <DownloadIcon className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="outline">
        Next
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="destructive">
        Delete <Trash2Icon />
      </Button>
    </div>
  );
}
