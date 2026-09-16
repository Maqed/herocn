"use client";
import { Label } from "@/registry/new-york-v4/ui/label";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarInput,
} from "@/registry/new-york-v4/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
	return (
		<form {...props}>
			<SidebarGroup className="py-0">
				<SidebarGroupContent className="relative">
					<Label htmlFor="search" className="sr-only">
						Search
					</Label>
					<SidebarInput
						id="search"
						placeholder="Search the docs..."
						className="pl-8"
					/>
				</SidebarGroupContent>
			</SidebarGroup>
		</form>
	);
}
