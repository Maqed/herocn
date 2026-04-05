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

export default function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="tertiary" className="w-fit" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverContent align="start">
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
