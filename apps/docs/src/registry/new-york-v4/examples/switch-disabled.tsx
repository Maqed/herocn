import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Switch } from "@/registry/new-york-v4/ui/switch";

export default function SwitchDisabled() {
  return (
    <Field orientation="horizontal" data-disabled className="w-fit">
      <Switch id="switch-disabled-unchecked" disabled />
      <FieldLabel htmlFor="switch-disabled-unchecked">Disabled</FieldLabel>
    </Field>
  );
}
