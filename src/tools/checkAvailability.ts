// Schemas
import type { ToolConfig } from '../types/index.js'
import { CheckAvailabilityInputSchema as inputSchema, CheckAvailabilityOutputSchema as outputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const checkAvailabilityTool: ToolConfig = {
  name: 'checkAvailability',
  config: {
    title: 'Check Teacher\'s Availability',
    description: 'Get all free 45-minute slots for a teacher within a date range',
    inputSchema,
    outputSchema,
  },
  handler: async ( args: any ) => {
    const { calendarId, scheduledTime } = args

    const availability = await calendarService.checkAvailability( calendarId, scheduledTime )

    return {
      content: [
        { type: 'text' as const,
          text: JSON.stringify( availability, null, 2 )
        }
      ],
      struturedContent: availability
    }
  }
}

export default checkAvailabilityTool