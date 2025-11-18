import app from './app.js'

app.listen( process.env.PORT || 3000, () => {
  console.log( `Calendar MCP Server running on http://localhost:${ process.env.PORT || 3000 }/mcp` )
} )