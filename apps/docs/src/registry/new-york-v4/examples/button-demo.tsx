import { ArrowUpIcon } from "lucide-react";
import { Button } from "@/registry/new-york-v4/ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex gap-3">
      <Button>Button</Button>
      <Button size="icon">
        <ArrowUpIcon />
      </Button>
    </div>
  );
}
