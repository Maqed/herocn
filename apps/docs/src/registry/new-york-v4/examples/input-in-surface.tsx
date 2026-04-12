import { Button } from "@/registry/new-york-v4/ui/button";
import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Input } from "@/registry/new-york-v4/ui/input";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function InputInSurface() {
  return (
    <Surface className="flex flex-col gap-3 p-6 rounded-3xl w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="input-in-surface-message">
          What's your name?
        </FieldLabel>
        <Input id="input-in-surface-message" variant="secondary" />
      </Field>
      <Button>Submit</Button>
    </Surface>
  );
}
