import { cn } from "cn";

function PageHeader({
	className,
	children,
	...props
}: React.ComponentProps<"section">) {
	return (
		<section
			className={cn("border-border/50 dark:border-border", className)}
			{...props}
		>
			<div className="mx-auto flex w-full 3xl:fixed:max-w-[calc(var(--breakpoint-2xl)+2rem)] items-center justify-center">
				<div className="container flex flex-col items-center gap-2 px-6 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
					{children}
				</div>
			</div>
		</section>
	);
}

function PageHeaderHeading({
	className,
	...props
}: React.ComponentProps<"h1">) {
	return (
		<h1
			className={cn(
				"max-w-3xl text-balance font-bold text-[1.7rem] leading-tight tracking-tighter lg:text-5xl",
				className,
			)}
			{...props}
		/>
	);
}

function PageHeaderDescription({
	className,
	...props
}: React.ComponentProps<"p">) {
	return (
		<p
			className={cn(
				"max-w-4xl text-pretty text-base text-foreground sm:text-lg",
				className,
			)}
			{...props}
		/>
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
