// Schemas
import { CreateEventInputSchema, CreateEventOutputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const createEventTool = {
  name: 'createEvent',
  config: {
    title: 'Create Event',
    description: 'Create a new event on the teacher\'s calendar',
    inputSchema: CreateEventInputSchema,
    outputSchema: CreateEventOutputSchema,
    handler: async ( args: any ) => {
      const { calendarId, eventDetails } = args

      const event = await calendarService.createEvent( calendarId, eventDetails )

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
}

export default createEventTool