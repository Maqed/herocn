import { ImageResponse } from "@takumi-rs/image-response";
import { generate as DefaultImage } from "fumadocs-ui/og/takumi";
import { notFound } from "next/navigation";
import { Icons } from "@/components/icons";
import { PAGES_METADATA, siteConfig } from "@/lib/config";
import { cssVars } from "@/registry/shared";

export const revalidate = false;

function slugToHref(slug: string[]) {
  const path = slug.slice(0, -1);
  if (path.length === 0) return "/";
  return `/${path.join("/")}`;
}

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/[...slug]">,
) {
  const { slug } = await params;
  const page = PAGES_METADATA.get(slugToHref(slug));

  if (!page) notFound();

  return new ImageResponse(
    <DefaultImage
      title={page.title}
      primaryColor={cssVars.dark["--background"]}
      primaryTextColor={cssVars.dark["--foreground"]}
      description={page.description}
      site={siteConfig.name}
      icon={<Icons.logo tw="size-16" />}
    />,
    {
      width: 1200,
      height: 630,
      format: "webp",
    },
  );
}

export function generateStaticParams() {
  return [...PAGES_METADATA.keys()].map((href) => ({
    slug: [...(href === "/" ? [] : href.slice(1).split("/")), "image.webp"],
  }));
}
