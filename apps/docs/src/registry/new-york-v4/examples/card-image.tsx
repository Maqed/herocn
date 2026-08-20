import { Badge } from "@/registry/new-york-v4/ui/badge";
import { Button } from "@/registry/new-york-v4/ui/button";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/registry/new-york-v4/ui/card";

export default function CardImage() {
	return (
		<Card className="relative w-full max-w-sm">
			<img
				src="https://avatar.vercel.sh/shadcn1"
				alt="Event cover"
				className="relative z-20 aspect-video w-full object-cover"
			/>
			<CardHeader>
				<CardAction>
					<Badge>Featured</Badge>
				</CardAction>
				<CardTitle>Design systems meetup</CardTitle>
				<CardDescription>
					A practical talk on component APIs, accessibility, and shipping
					faster.
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button className="w-full">View Event</Button>
			</CardFooter>
		</Card>
	);
}
