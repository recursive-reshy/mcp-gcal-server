import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { tools } from '../tools/index.js'

const server = new McpServer( { 
  name: 'mcp-gcal-server',
  version: '0.1.0'
} )

tools.forEach( ( { name, config, handler } ) => {
  server.registerTool(
    name,
    config as unknown as Parameters< typeof server.registerTool >[ 1 ],
    handler
  )
} )

export default server