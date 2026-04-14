"use client";
import { ChevronDown } from "lucide-react";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/registry/new-york-v4/ui/table";

interface ApiProp {
	name: string;
	type: string;
	required?: boolean;
	description?: string;
	defaultValue?: string;
}

interface ApiRefTableProps {
	props: ApiProp[];
	className?: string;
}

function ApiRefRow({ prop }: { prop: ApiProp }) {
	const [open, setOpen] = React.useState(false);
	const hasDetails = !!prop.description;
	const cells = (
		<>
			<TableCell>
				<span>
					<span className="font-medium font-mono text-xs">{prop.name}</span>
					{prop.required && <span className="text-destructive text-xs">*</span>}
				</span>
			</TableCell>
			<TableCell>
				<code className="font-mono text-xs">{prop.type}</code>
			</TableCell>
			<TableCell>
				<div className="flex items-center justify-between">
					{prop.defaultValue ? (
						<code className="font-mono text-xs">{prop.defaultValue}</code>
					) : (
						<span className="text-muted-foreground text-xs">—</span>
					)}
					{hasDetails && (
						<ChevronDown
							className={cn(
								"h-3 w-3 shrink-0 text-muted-foreground transition-transform",
								open && "rotate-180",
							)}
						/>
					)}
				</div>
			</TableCell>
		</>
	);

	if (hasDetails) {
		return (
			<Collapsible
				open={open}
				onOpenChange={setOpen}
				render={({ children }) => <>{children}</>}
			>
				<CollapsibleTrigger
					nativeButton={false}
					render={(props) => (
						<TableRow
							{...props}
							className="cursor-pointer focus-visible:bg-muted/70 focus-visible:outline-none"
						/>
					)}
				>
					{cells}
				</CollapsibleTrigger>
				<CollapsibleContent render={(props) => <TableRow {...props} />}>
					<TableCell colSpan={3} className="text-muted-foreground text-xs">
						{prop.description}
					</TableCell>
				</CollapsibleContent>
			</Collapsible>
		);
	}

	return <TableRow className="hover:bg-inherit">{cells}</TableRow>;
}

export function ApiRefTable({ props, className }: ApiRefTableProps) {
	return (
		<Table className={cn("not-prose", className)}>
			<TableHeader>
				<TableRow>
					<TableHead>Prop</TableHead>
					<TableHead>Type</TableHead>
					<TableHead>Default</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{props.map((prop) => (
					<ApiRefRow key={prop.name} prop={prop} />
				))}
			</TableBody>
		</Table>
	);
}
