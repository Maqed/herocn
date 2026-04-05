import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function SurfaceVariants() {
  return (
    <div className="grid w-full gap-3 md:grid-cols-2">
      <Surface variant="default" className="rounded-3xl border p-6">
        Default
      </Surface>
      <Surface variant="secondary" className="rounded-3xl border p-6">
        Secondary
      </Surface>
      <Surface variant="tertiary" className="rounded-3xl border p-6">
        Tertiary
      </Surface>
      <Surface variant="transparent" className="rounded-3xl border p-6">
        Transparent
      </Surface>
    </div>
  );
}
