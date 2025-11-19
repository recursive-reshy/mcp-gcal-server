import express from 'express'
import type { Request, Response } from 'express'
import dayjs from 'dayjs'
// MCP
import mcpServer from './transports/https.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'

const app = express()

// Middleware
app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) )

app.get( '/health', ( _: Request, res: Response ) => {
  res
    .status( 200 )
    .json( { 
      status: 'healthy',  
      timestamp: dayjs().toISOString(),
    } )
} )

app.post( '/mcp', async ( req: Request, res: Response ) => {
  const transport = new StreamableHTTPServerTransport( { 
    sessionIdGenerator: undefined,
    enableJsonResponse: true
  } )

  res.on( 'close', () => {
    transport.close()
  } )

  await mcpServer.connect( transport )

  await transport.handleRequest( req, res, req.body )
} )

export default app