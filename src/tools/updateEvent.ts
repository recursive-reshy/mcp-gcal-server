// Schemas
import type { ToolConfig } from '../types/index.js'
import { UpdateEventInputSchema as inputSchema, UpdateEventOutputSchema as outputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const updateEventTool: ToolConfig = {
  name: 'updateEvent',
  config: {
    title: 'Update Event',
    description: 'Update an existing event on the teacher\'s calendar',
    inputSchema,
    outputSchema
  },
  handler: async ( args: any ) => {
    const { calendarId, eventId, eventDetails } = args

    const event = await calendarService.updateEvent( calendarId, eventId, eventDetails )

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

export default updateEventTool