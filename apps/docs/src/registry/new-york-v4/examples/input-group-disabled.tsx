import { SearchIcon } from "lucide-react";

import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupTextarea,
} from "@/registry/new-york-v4/ui/input-group";

export default function InputGroupDisabled() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <Field>
        <FieldLabel htmlFor="disabled-input">Search</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="disabled-input"
            disabled
            placeholder="Search disabled..."
          />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </Field>

      <Field>
        <FieldLabel htmlFor="disabled-textarea">Message</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="disabled-textarea"
            disabled
            placeholder="Message disabled..."
            rows={3}
          />
        </InputGroup>
      </Field>
    </div>
  );
}
