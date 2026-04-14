import { ImageResponse } from "@takumi-rs/image-response";
import { generate as DefaultImage } from "fumadocs-ui/og/takumi";
import { notFound } from "next/navigation";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { getPageImage, source } from "@/lib/source";
import { cssVars } from "@/registry/shared";

export const revalidate = false;

export async function GET(
	_req: Request,
	{ params }: RouteContext<"/og/docs/[...slug]">,
) {
	const { slug } = await params;
	const page = source.getPage(slug?.slice(0, -1));
	if (!page) notFound();

	return new ImageResponse(
		<DefaultImage
			title={page.data.title}
			primaryColor={cssVars.dark["--background"]}
			primaryTextColor={cssVars.dark["--foreground"]}
			description={page.data.description}
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
	return source.getPages().map((page) => ({
		slug: getPageImage(page).segments,
	}));
}
