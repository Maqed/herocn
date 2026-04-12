import { Button } from "@/registry/new-york-v4/ui/button";

function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-soft">Destructive Soft</Button>
    </div>
  );
}

export default ButtonVariants;
