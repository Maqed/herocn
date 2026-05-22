import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
} from "@/registry/new-york-v4/ui/pagination";

const sizes = ["sm", "default", "lg"] as const;

export default function PaginationSizes() {
	return (
		<div className="flex flex-col gap-6">
			{sizes.map((size) => (
				<div key={size} className="flex flex-col gap-2">
					<span className="font-medium text-sm">size="{size}"</span>
					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationLink href="#" size={size}>
									1
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" size={size} isActive>
									2
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#" size={size}>
									3
								</PaginationLink>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			))}
		</div>
	);
}
