import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

import { installCommand } from "../config";
import { getPackage } from "../registry";
import type { RegistryItem } from "../types";
import { normalizeName } from "../utils/normalize";
import { notFoundComponent, text } from "../utils/text";

function formatComponent(pkg: RegistryItem): string {
  const sections: string[] = [`# ${pkg.name}`, `Type: ${pkg.type}`];

  const deps = pkg.dependencies?.length ? pkg.dependencies.join(", ") : "none";
  sections.push(`Dependencies: ${deps}`);

  const regDeps = pkg.registryDependencies?.length
    ? pkg.registryDependencies.join(", ")
    : "none";
  sections.push(`Registry dependencies: ${regDeps}`);

  sections.push(`Install:\n\n\`\`\`bash\n${installCommand(pkg.name)}\n\`\`\``);

  const files = pkg.files ?? [];
  for (const file of files) {
    sections.push(`## ${file.path}`);
    if (file.content) {
      sections.push(`\`\`\`tsx\n${file.content}\n\`\`\``);
    } else {
      sections.push(`No source content (${file.type}).`);
    }
  }

  const cssVars = pkg.cssVars;
  if (cssVars && Object.keys(cssVars).length > 0) {
    sections.push(
      `## CSS variables\n\n\`\`\`json\n${JSON.stringify(cssVars, null, 2)}\n\`\`\``,
    );
  }

  if (pkg.css) {
    sections.push(`## CSS utilities\n\n\`\`\`css\n${pkg.css}\n\`\`\``);
  }

  return sections.join("\n\n");
}

export function registerGetComponent(server: McpServer): void {
  server.registerTool(
    "get_component",
    {
      description:
        'Fetch the herocn registry package for a component, including source files, dependencies, css variables, and the install command. Provide the component name, e.g. "button".',
      inputSchema: {
        name: z
          .string()
          .describe('Component name, e.g. "button" or "accordion".'),
      },
    },
    async ({ name }) => {
      const normalized = normalizeName(name);
      if (!normalized) return text("Invalid component name.");

      const pkg = await getPackage(normalized);
      if (!pkg) return notFoundComponent(normalized);

      return text(formatComponent(pkg));
    },
  );
}
