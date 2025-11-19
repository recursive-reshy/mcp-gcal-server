import { z } from 'zod'

interface ToolConfig {
  name: string
  config: {
    title: string
    description: string
    inputSchema: Record< string, any >
    outputSchema: Record< string, any > | undefined
  }
  handler: ( args: any ) => Promise< {
    content: { type: 'text', text: string }[]
    struturedContent: any
  } >
}

const CreateEventInputSchema = {
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  eventDetails: z.object( { 
    summary: z.string().describe( 'Summary of the event' ),
    start: z.string().or( z.date() ).describe( 'Start time of the event' ),
    description: z.string().optional().describe( 'Description of the event' ),
    attendees: z.array( z.string().email() ).optional().describe( 'Attendees of the event' ),
  } )
}

const CreateEventOutputSchema = { 
  id: z.string().describe( 'Event ID' ),
  summary: z.string().describe( 'Summary of the event' ),
  start: z.string().describe( 'Start time of the event' ),
  end: z.string().describe( 'End time of the event' ),
  description: z.string().optional().describe( 'Description of the event' ),
}

const UpdateEventInputSchema = {
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  eventId: z.string().describe( 'Event ID' ),
  eventDetails: z.object( { 
    summary: z.string().optional().describe( 'Summary of the event' ),
    start: z.string().or( z.date() ).optional().describe( 'Start time of the event' ),
    description: z.string().optional().describe( 'Description of the event' ),
    attendees: z.array( z.string().email() ).optional().describe( 'Attendees of the event' ),
  } )
}

const UpdateEventOutputSchema = { 
  id: z.string().describe( 'Event ID' ),
  summary: z.string().describe( 'Summary of the event' ),
  start: z.string().describe( 'Start time of the event' ),
  end: z.string().describe( 'End time of the event' ),
  description: z.string().optional().describe( 'Description of the event' ),
}

const DeleteEventInputSchema = {
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  eventId: z.string().describe( 'Event ID' ),
}

const CheckAvailabilityInputSchema = { 
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  scheduledTime: z.string().or( z.date() ).describe( 'Scheduled time for lesson' ),
}

const CheckAvailabilityOutputSchema = { 
  available: z.boolean().describe( 'Whether the time slot is available' ),
  conflicts: z.array( 
    z.object( { 
        start: z.string().describe( 'Start time of the conflict' ),
        end: z.string().describe( 'End time of the conflict' ),
      } ) 
    ).optional().describe( 'Conflicts with the scheduled time' ),
}

const FindAvailableSlotsInputSchema = {
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  date: z.string().or( z.date() ).describe( 'Date to find available slots for' ),
}

const FindAvailableSlotsOutputSchema = {
  availableSlots: z.array( z.date() ).describe( 'Available slots for the date' ),
}

export { 
  CheckAvailabilityInputSchema,
  CheckAvailabilityOutputSchema,
  CreateEventInputSchema,
  CreateEventOutputSchema,
  UpdateEventInputSchema,
  UpdateEventOutputSchema,
  DeleteEventInputSchema,
  FindAvailableSlotsInputSchema,
  FindAvailableSlotsOutputSchema
}

export type { ToolConfig }