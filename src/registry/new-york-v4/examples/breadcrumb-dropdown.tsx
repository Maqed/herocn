import { ChevronDownIcon, DotIcon } from "lucide-react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/registry/new-york-v4/ui/breadcrumb";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu";

export default function BreadcrumbDropdown() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="#">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<DotIcon />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<DropdownMenu>
						<DropdownMenuTrigger
							render={
								<button type="button" className="flex items-center gap-1" />
							}
						>
							Components
							<ChevronDownIcon className="size-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuGroup>
								<DropdownMenuItem>Documentation</DropdownMenuItem>
								<DropdownMenuItem>Themes</DropdownMenuItem>
								<DropdownMenuItem>GitHub</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</BreadcrumbItem>
				<BreadcrumbSeparator>
					<DotIcon />
				</BreadcrumbSeparator>
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	);
}
