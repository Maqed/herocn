import {
	CodeBlock,
	CodeBlockContent,
	CodeBlockLine,
} from "@/registry/new-york-v4/ui/code-block";

const code = `export {
  experimental: {
    reactCompiler: true,
    viewTransition: true,
  },
  images: {
    remotePatterns: [{ hostname: "avatars.githubusercontent.com" }],
  },
}`;

const highlighted = [2, 3];

export default function CodeBlockHighlighted() {
	return (
		<div className="w-full max-w-md">
			<CodeBlock>
				<CodeBlockContent lineNumbers>
					{code.split("\n").map((line, index) => (
						<CodeBlockLine
							key={index}
							variant={highlighted.includes(index) ? "highlighted" : "default"}
						>
							{line}
						</CodeBlockLine>
					))}
				</CodeBlockContent>
			</CodeBlock>
		</div>
	);
}
