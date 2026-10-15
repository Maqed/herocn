import {
	CodeBlock,
	CodeBlockContent,
} from "@/registry/new-york-v4/ui/code-block";

const code = `{
  "name": "chat",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}`;

export default function CodeBlockLineNumbers() {
	return (
		<div className="w-full max-w-md">
			<CodeBlock>
				<CodeBlockContent lineNumbers>{code}</CodeBlockContent>
			</CodeBlock>
		</div>
	);
}
