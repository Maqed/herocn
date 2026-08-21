import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { registerGetComponent } from "./tools/get-component";
import { registerGetDoc } from "./tools/get-doc";
import { registerGetInstallCommand } from "./tools/get-install-command";
import { registerListComponents } from "./tools/list-components";
import { registerListDocs } from "./tools/list-docs";
import { registerSearchDocs } from "./tools/search-docs";
import { version } from "./version";

export function createServer(): McpServer {
  const server = new McpServer({
    name: "@herocn/mcp",
    version,
  });

  registerListDocs(server);
  registerGetDoc(server);
  registerSearchDocs(server);
  registerListComponents(server);
  registerGetComponent(server);
  registerGetInstallCommand(server);

  return server;
}
