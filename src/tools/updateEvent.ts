// Schemas
import { UpdateEventInputSchema, UpdateEventOutputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const updateEventTool = {
  name: 'updateEvent',
  config: {
    title: 'Update Event',
    description: 'Update an existing event on the teacher\'s calendar',
    inputSchema: UpdateEventInputSchema,
    outputSchema: UpdateEventOutputSchema,
  },
  handler: async ( args: any ) => {
    const { calendarId, eventId, eventDetails } = args

    const event = await calendarService.updateEvent( calendarId, eventId, eventDetails )

    return {
      content: [
        { type: 'text' as const,
          test: JSON.stringify( event, null, 2 )
        }
      ],
      struturedContent: event
    }
  }
}

export default updateEventTool