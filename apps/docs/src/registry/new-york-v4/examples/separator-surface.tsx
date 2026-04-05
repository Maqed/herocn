import { Separator } from "@/registry/new-york-v4/ui/separator";
import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function SeparatorSurface() {
  return (
    <div className="grid w-full gap-3 md:grid-cols-2">
      <Surface variant="default" className="rounded-3xl p-6">
        <div className="flex flex-col gap-3">
          <div className="font-medium text-base">Default</div>
          <Separator />
          <div className="text-muted-foreground text-sm">
            Separator on the default surface background.
          </div>
        </div>
      </Surface>
      <Surface variant="secondary" className="rounded-3xl p-6">
        <div className="flex flex-col gap-3">
          <div className="font-medium text-base">Secondary</div>
          <Separator />
          <div className="text-muted-foreground text-sm">
            Separator on the secondary surface background.
          </div>
        </div>
      </Surface>
      <Surface variant="tertiary" className="rounded-3xl p-6">
        <div className="flex flex-col gap-3">
          <div className="font-medium text-base">Tertiary</div>
          <Separator />
          <div className="text-muted-foreground text-sm">
            Separator on the tertiary surface background.
          </div>
        </div>
      </Surface>
      <Surface variant="transparent" className="rounded-3xl p-6">
        <div className="flex flex-col gap-3">
          <div className="font-medium text-base">Transparent</div>
          <Separator />
          <div className="text-muted-foreground text-sm">
            Separator on a transparent surface (inherits parent).
          </div>
        </div>
      </Surface>
    </div>
  );
}
