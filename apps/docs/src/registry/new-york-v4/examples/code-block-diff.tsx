import {
	CodeBlock,
	CodeBlockActions,
	CodeBlockContent,
	CodeBlockCopyButton,
	CodeBlockHeader,
	CodeBlockLine,
	CodeBlockTitle,
} from "@/registry/new-york-v4/ui/code-block";

const patch = ` export function Greeting({ name }: { name: string }) {
-  return <p>Hello, {name}</p>
+  return <p className="text-sm text-muted-foreground">
+    Hello, {name}!
+  </p>
 }`;

function getVariant(line: string) {
	if (line.startsWith("+")) {
		return "added" as const;
	}

	if (line.startsWith("-")) {
		return "removed" as const;
	}

	return "default" as const;
}

export default function CodeBlockDiff() {
	return (
		<div className="w-full max-w-md">
			<CodeBlock>
				<CodeBlockHeader>
					<CodeBlockTitle>components/greeting.tsx</CodeBlockTitle>
					<CodeBlockActions>
						<CodeBlockCopyButton value={patch} />
					</CodeBlockActions>
				</CodeBlockHeader>
				<CodeBlockContent>
					{patch.split("\n").map((line, index) => (
						<CodeBlockLine key={index} variant={getVariant(line)}>
							{line.slice(1)}
						</CodeBlockLine>
					))}
				</CodeBlockContent>
			</CodeBlock>
		</div>
	);
}
