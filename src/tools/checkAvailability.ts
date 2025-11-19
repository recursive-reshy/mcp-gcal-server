// Schemas
import { CheckAvailabilityInputSchema, CheckAvailabilityOutputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const checkAvailabilityTool = {
  name: 'checkAvailability',
  config: {
    title: 'Check Teacher\'s Availability',
    description: 'Get all free 45-minute slots for a teacher within a date range',
    inputSchema: CheckAvailabilityInputSchema,
    outputSchema: CheckAvailabilityOutputSchema,
    handler: async ( args: any ) => {
      const { calendarId, scheduledTime } = args

      const availability = await calendarService.checkAvailability( calendarId, scheduledTime )

      return {
        content: [
          { type: 'text' as const,
            test: JSON.stringify( availability, null, 2 )
          }
        ],
        struturedContent: availability
      }
    }
  }
}

export default checkAvailabilityTool