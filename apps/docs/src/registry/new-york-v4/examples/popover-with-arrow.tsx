"use client";

import { Button } from "@/registry/new-york-v4/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover";

export default function PopoverWithArrow() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="tertiary" className="w-fit" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent align="start" withArrow>
        <PopoverHeader>
          <PopoverTitle>With Arrow</PopoverTitle>
          <PopoverDescription>
            This popover has an arrow at its top
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
