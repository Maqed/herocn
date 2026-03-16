import { Inter } from "next/font/google";

import { Provider } from "@/components/provider";

import "./global.css";
import { SiteHeader } from "@/components/site-header";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen [--header-height:calc(var(--spacing)*13)]">
        <Provider>
          <SiteHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
}
