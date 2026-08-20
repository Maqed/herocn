import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";

export default function CardVariants() {
	return (
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
			<Card variant="transparent">
				<CardHeader>
					<CardTitle>Transparent</CardTitle>
					<CardDescription>
						Minimal prominence with transparent background
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Use for less important content or nested cards</p>
				</CardContent>
			</Card>

			<Card variant="default">
				<CardHeader>
					<CardTitle>Default</CardTitle>
					<CardDescription>
						Standard card appearance (bg-surface)
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>The default card variant for most use cases</p>
				</CardContent>
			</Card>

			<Card variant="secondary">
				<CardHeader>
					<CardTitle>Secondary</CardTitle>
					<CardDescription>
						Medium prominence (bg-surface-secondary)
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Use to draw moderate attention</p>
				</CardContent>
			</Card>

			<Card variant="tertiary">
				<CardHeader>
					<CardTitle>Tertiary</CardTitle>
					<CardDescription>
						Higher prominence (bg-surface-tertiary)
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Use for primary or featured content</p>
				</CardContent>
			</Card>
		</div>
	);
}
