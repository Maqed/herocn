import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { getDocsIndex } from "../docs";
import { text } from "../utils/text";

async function formatDocsIndex(): Promise<string> {
  const entries = await getDocsIndex();

  if (entries.length === 0) return "No documentation pages found.";

  const lines = entries.map((entry) => {
    const description = entry.description ? ` — ${entry.description}` : "";
    return `- [${entry.title}](${entry.url})${description}`;
  });

  return `# herocn docs\n\n${lines.join("\n")}`;
}

export function registerListDocs(server: McpServer): void {
  server.registerTool(
    "list_docs",
    {
      description:
        "List all herocn documentation pages (slug, title, description, url).",
    },
    async () => text(await formatDocsIndex()),
  );
}
