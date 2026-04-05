import { Surface } from "@/registry/new-york-v4/ui/surface";

export default function SurfaceDemo() {
  return (
    <div className="grid w-full gap-3 md:grid-cols-2">
      <Surface className="rounded-3xl border p-6">
        <h4 className="font-medium">Default Surface</h4>
        <p className="mt-1 text-sm text-muted-foreground">
          Use for cards, panels, and grouped content.
        </p>
      </Surface>
      <Surface variant="secondary" className="rounded-3xl border p-6">
        <h4 className="font-medium">Secondary Surface</h4>
        <p className="mt-1 text-sm text-muted-foreground">
          Great for nested sections and subtle emphasis.
        </p>
      </Surface>
    </div>
  );
}
