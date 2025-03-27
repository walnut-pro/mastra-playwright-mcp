import { MCPConfiguration } from "@mastra/mcp";

export const mcp = new MCPConfiguration({
    servers: {
      "playwright": {
        "command": "npx",
        "args": [
          "@playwright/mcp@latest"
        ]
      }
    },
  });