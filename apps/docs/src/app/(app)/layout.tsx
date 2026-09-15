import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";

function AppLayout({ children }: { children: ReactNode }) {
	return (
		<>
			<SiteHeader />
			{children}
		</>
	);
}

export default AppLayout;
