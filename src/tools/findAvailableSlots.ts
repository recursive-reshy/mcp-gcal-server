// Schemas
import { FindAvailableSlotsInputSchema, FindAvailableSlotsOutputSchema } from '../types/index.js'
// Services
import calendarService from '../services/calendar.service.js'

const findAvailableSlotsTool = {
  name: 'findAvailableSlots',
  config: {
    title: 'Find Available Slots',
    description: 'Find all available 45-minute slots for a teacher on a given date',
    inputSchema: FindAvailableSlotsInputSchema,
    outputSchema: FindAvailableSlotsOutputSchema,
    handler: async ( args: any ) => {
      const { calendarId, date } = args

      const availableSlots = await calendarService.findAvailableSlots( calendarId, date )

      return {
        content: [
          { type: 'text' as const,
            test: JSON.stringify( availableSlots, null, 2 )
          }
        ],
        struturedContent: availableSlots
      }
    }
  }
}

export default findAvailableSlotsTool