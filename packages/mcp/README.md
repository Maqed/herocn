# @herocn/mcp

MCP (Model Context Protocol) server for the herocn docs site. It fetches documentation
and registry data live from [herocn.dev](https://herocn.dev) and exposes them as tools for
any MCP-compatible client.

## Features

- Lists all doc pages (`list_docs`)
- Fetches full page markdown (`get_doc`)
- Keyword search over docs with snippets (`search_docs`)
- Lists registry components (`list_components`)
- Fetches component packages: source, deps, css vars, install command (`get_component`)
- Install command helper (`get_install_command`)

## Run

```bash
bun install
bun run --cwd packages/mcp start
```

### Environment variables

| Variable | Default | Description |
| --- | --- | --- |
| `HEROCN_BASE_URL` | `https://herocn.dev` | Base URL of the docs site. |
| `HEROCN_CACHE_TTL` | `3600` | Cache TTL in seconds for fetched content. |

## Registering in clients

The package is published to npm as `@herocn/mcp`, so any MCP client can consume it
directly with npx (no local checkout or Bun required):

### opencode

```json
{
  "mcp": {
    "herocn": {
      "type": "local",
      "command": ["npx", "-y", "@herocn/mcp@latest"],
      "enabled": true
    }
  }
}
```

### Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "herocn": {
      "command": "npx",
      "args": ["-y", "@herocn/mcp@latest"]
    }
  }
}
```

### Cursor / VS Code

Point the MCP client at `npx -y @herocn/mcp@latest` (stdio).