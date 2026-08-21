import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { getRegistryItems } from "../registry";
import type { RegistryItem } from "../types";
import { normalizeType } from "../utils/normalize";
import { text } from "../utils/text";

function summarizeItem(item: RegistryItem): string {
  const type = item.type.replace(/^registry:/, "");
  const deps = item.dependencies?.length
    ? ` deps: ${item.dependencies.join(", ")}`
    : "";
  const regDeps = item.registryDependencies?.length
    ? ` reg-deps: ${item.registryDependencies.join(", ")}`
    : "";
  const files = item.files?.length
    ? ` files: ${item.files.map((f) => f.path).join(", ")}`
    : "";
  return `${item.name} [${type}]${deps}${regDeps}${files}`;
}

export function registerListComponents(server: McpServer): void {
  server.registerTool(
    "list_components",
    {
      description:
        "List herocn registry components. Optionally filter by type: ui, hook, style, or example.",
      inputSchema: {
        type: z
          .enum(["ui", "hook", "style", "example"])
          .optional()
          .describe("Filter by component type."),
      },
    },
    async ({ type }) => {
      const items = await getRegistryItems();
      const normalized = normalizeType(type);

      const filtered = normalized
        ? items.filter((item) => item.type === normalized)
        : items;

      const lines = filtered.map(summarizeItem);

      return text(lines.join("\n") || "No components found.");
    },
  );
}
