import type { Metadata } from "next";
import Link from "next/link";
import { PAGES_METADATA } from "@/lib/config";
import { absoluteUrl } from "@/lib/utils";
import { Button } from "@/registry/new-york-v4/ui/button";

export const metadata: Metadata = {
  title: PAGES_METADATA.get("/")?.title,
  description: PAGES_METADATA.get("/")?.description,
  openGraph: {
    title: PAGES_METADATA.get("/")?.title,
    description: PAGES_METADATA.get("/")?.description,
    images: absoluteUrl("/og/image.webp"),
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center py-4">
      <h1 className="text-4xl font-bold mb-4">
        <span>HeroUI's design system.</span>
        <br />
        <span className="text-muted-foreground">shadcn's abstraction.</span>
      </h1>
      <div className="flex justify-center items-center gap-3">
        <Button
          nativeButton={false}
          render={<Link href="/docs/installation">Install</Link>}
        />
        <Button
          nativeButton={false}
          variant="secondary"
          render={<Link href="/docs/components">View components</Link>}
        />
      </div>
    </div>
  );
}
