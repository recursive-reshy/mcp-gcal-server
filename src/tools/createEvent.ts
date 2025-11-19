// Schemas
import type { ToolConfig } from '../types/index.js'
import { CreateEventInputSchema as inputSchema, CreateEventOutputSchema as outputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const createEventTool: ToolConfig = {
  name: 'createEvent',
  config: {
    title: 'Create Event',
    description: 'Create a new event on the teacher\'s calendar',
    inputSchema,
    outputSchema
  },
  handler: async ( args: any ) => {
    const { calendarId, eventDetails } = args

    const event = await calendarService.createEvent( calendarId, eventDetails )

    return {
      content: [
        { type: 'text' as const,
          text: JSON.stringify( event, null, 2 )
        }
      ],
      struturedContent: event
    }
  }
}

export default createEventTool