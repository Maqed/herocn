import { Field, FieldLabel } from "@/registry/new-york-v4/ui/field";
import { Switch } from "@/registry/new-york-v4/ui/switch";

export default function FieldSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  );
}
