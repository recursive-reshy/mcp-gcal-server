// Schemas
import type { ToolConfig } from '../types/index.js'
import { DeleteEventInputSchema as inputSchema, DeleteEventOutputSchema as outputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const deleteEventTool: ToolConfig = {
  name: 'deleteEvent',
  config: {
    title: 'Delete Event',
    description: 'Delete an existing event on the teacher\'s calendar',
    inputSchema,
    outputSchema
  },
  handler: async ( args: any ) => {
    const { calendarId, eventId } = args

    await calendarService.deleteEvent( calendarId, eventId )

    return {
      content: [
        { type: 'text' as const,
          text: `Event deleted: ${ eventId }`
        }
      ],
      struturedContent: outputSchema.parse( null )
    }
  }
}

export default deleteEventTool