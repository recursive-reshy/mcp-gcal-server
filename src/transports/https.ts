import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer( { 
  name: 'mcp-gcal-server',
  version: '0.1.0'
} )

export default server