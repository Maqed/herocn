import { Kbd, KbdGroup } from "@/registry/new-york-v4/ui/kbd";

export default function KbdDemo() {
	return (
		<div className="flex flex-col items-center gap-4">
			<KbdGroup>
				<Kbd>⌘</Kbd>
				<Kbd>⇧</Kbd>
				<Kbd>⌥</Kbd>
				<Kbd>⌃</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<span className="text-muted-foreground text-sm">+</span>
				<Kbd>B</Kbd>
			</KbdGroup>
		</div>
	);
}
