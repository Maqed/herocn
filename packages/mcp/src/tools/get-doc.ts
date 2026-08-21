import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { fetchPageContent } from "../docs/content";
import { normalizeSlug } from "../utils/normalize";
import { text } from "../utils/text";

export function registerGetDoc(server: McpServer): void {
  server.registerTool(
    "get_doc",
    {
      description:
        'Fetch the full markdown content of a herocn documentation page. Provide the slug, e.g. "components/button" or "installation".',
      inputSchema: {
        slug: z
          .string()
          .describe('Page slug, e.g. "components/button" or "installation".'),
      },
    },
    async ({ slug }) => {
      const normalized = normalizeSlug(slug);
      if (!normalized) return text("Invalid slug.");

      return text(await fetchPageContent(normalized));
    },
  );
}
