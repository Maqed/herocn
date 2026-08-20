import { cn } from "@/lib/utils";

function PageHeader({
	className,
	children,
	...props
}: React.ComponentProps<"section">) {
	return (
		<section
			className={cn(
				"flex flex-col items-center justify-center gap-2 px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4",
				className,
			)}
			{...props}
		>
			{children}
		</section>
	);
}

function PageHeaderHeading({
	className,
	...props
}: React.ComponentProps<"h1">) {
	return (
		<h1
			className={cn("font-bold text-4xl md:text-5xl", className)}
			{...props}
		/>
	);
}

function PageHeaderDescription({
	className,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p className={cn("max-w-4xl text-base sm:text-lg", className)} {...props} />
	);
}

function PageActions({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none",
				className,
			)}
			{...props}
		/>
	);
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
