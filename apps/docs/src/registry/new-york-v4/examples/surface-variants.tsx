import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function SurfaceVariants() {
  return (
    <div className="grid w-full gap-3 md:grid-cols-2">
      <Surface variant="default" className="rounded-lg border p-4">
        Default
      </Surface>
      <Surface variant="secondary" className="rounded-lg border p-4">
        Secondary
      </Surface>
      <Surface variant="tertiary" className="rounded-lg border p-4">
        Tertiary
      </Surface>
      <Surface variant="transparent" className="rounded-lg border p-4">
        Transparent
      </Surface>
    </div>
  );
}
