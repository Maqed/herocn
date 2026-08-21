import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { installCommand } from "../config";
import { getRegistryItem } from "../registry";
import { normalizeName } from "../utils/normalize";
import { notFoundComponent, text } from "../utils/text";

export function registerGetInstallCommand(server: McpServer): void {
  server.registerTool(
    "get_install_command",
    {
      description:
        "Get the shadcn CLI install command for a herocn registry component.",
      inputSchema: {
        name: z.string().describe('Component name, e.g. "button".'),
      },
    },
    async ({ name }) => {
      const normalized = normalizeName(name);
      if (!normalized) return text("Invalid component name.");

      const exists = await getRegistryItem(normalized);
      if (!exists) return notFoundComponent(normalized);

      return text(`\`\`\`bash\n${installCommand(normalized)}\n\`\`\``);
    },
  );
}
