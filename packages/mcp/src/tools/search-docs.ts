import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { searchDocs } from "../docs/search";
import { text } from "../utils/text";

export function registerSearchDocs(server: McpServer): void {
  server.registerTool(
    "search_docs",
    {
      description:
        "Search herocn documentation by keyword(s). Returns ranked results with snippets.",
      inputSchema: {
        query: z.string().describe('Search query, e.g. "rtl dialog".'),
        limit: z
          .number()
          .int()
          .min(1)
          .max(50)
          .optional()
          .describe("Max results (default 10)."),
        includeContent: z
          .boolean()
          .optional()
          .describe("Whether to search full page contents (default true)."),
      },
    },
    async ({ query, limit, includeContent }) => {
      const results = await searchDocs(
        query,
        limit ?? 10,
        includeContent ?? true,
      );

      if (results.length === 0) {
        return text(`No results for "${query}".`);
      }

      const lines = results.map((result) => {
        const snippet = result.snippet ? `\n  > ${result.snippet}` : "";
        return `- [${result.title}](${result.url}) (score ${result.score})${snippet}`;
      });

      return text(lines.join("\n"));
    },
  );
}
