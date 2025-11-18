import express from 'express'
import type { Request, Response } from 'express'
import dayjs from 'dayjs'

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

export default app