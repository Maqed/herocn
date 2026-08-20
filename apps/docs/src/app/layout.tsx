import { Inter, Noto_Sans_Arabic, Noto_Sans_Hebrew } from "next/font/google";

import { Provider } from "@/components/provider";

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
