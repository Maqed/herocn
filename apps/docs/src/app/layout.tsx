import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic, Noto_Sans_Hebrew } from "next/font/google";

import { Provider } from "@/components/provider";

import { siteConfig } from "@/lib/config";

import "./global.css";
import { DarkModeScript } from "@/components/mode-switcher";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
});

const notoSansArabic = Noto_Sans_Arabic({
	subsets: ["arabic"],
	variable: "--font-ar",
});
const notoSansHebrew = Noto_Sans_Hebrew({
	subsets: ["hebrew"],
	variable: "--font-he",
});

export const metadata: Metadata = {
	metadataBase: new URL(siteConfig.url),
	title: {
		default: siteConfig.name,
		template: `%s — ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"shadcn",
		"heroui",
		"herocn",
		"ui components",
		"react",
		"next.js",
		"tailwind",
	],
	authors: [{ name: "Maqed", url: siteConfig.links.github }],
	creator: "Maqed",
	applicationName: siteConfig.name,
	openGraph: {
		type: "website",
		siteName: siteConfig.name,
		locale: "en_US",
		url: siteConfig.url,
	},
	twitter: {
		card: "summary_large_image",
		site: "@0xMaqed",
		creator: "@0xMaqed",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function Layout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${inter.variable} ${notoSansArabic.variable} ${notoSansHebrew.variable}`}
			suppressHydrationWarning
		>
			<head>
				<DarkModeScript />
			</head>
			<body className="flex min-h-screen flex-col [--header-height:calc(var(--spacing)*13)]">
				<Provider>
					<SiteHeader />
					{children}
				</Provider>
			</body>
		</html>
	);
}
