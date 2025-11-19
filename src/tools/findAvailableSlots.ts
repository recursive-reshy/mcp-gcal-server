// Schemas
import type { ToolConfig } from '../types/index.js'
import { FindAvailableSlotsInputSchema as inputSchema, FindAvailableSlotsOutputSchema as outputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const findAvailableSlotsTool: ToolConfig = {
  name: 'findAvailableSlots',
  config: {
    title: 'Find Available Slots',
    description: 'Find all available 45-minute slots for a teacher on a given date',
    inputSchema,
    outputSchema,
  },
  handler: async ( args: any ) => {
    const { calendarId, date } = args

    const availableSlots = await calendarService.findAvailableSlots( calendarId, date )

    return {
      content: [
        { type: 'text' as const,
          text: JSON.stringify( availableSlots, null, 2 )
        }
      ],
      struturedContent: availableSlots
    }
  }
}

export default findAvailableSlotsTool