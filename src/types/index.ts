import { z } from 'zod'

const CreateEventInputSchema = z.object( {
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  eventDetails: z.object( { 
    summary: z.string().describe( 'Summary of the event' ),
    start: z.string().or( z.date() ).describe( 'Start time of the event' ),
    description: z.string().optional().describe( 'Description of the event' ),
    attendees: z.array( z.string().email() ).optional().describe( 'Attendees of the event' ),
  } )
} )

const CreateEventOutputSchema = z.object( { 
  id: z.string().describe( 'Event ID' ),
  summary: z.string().describe( 'Summary of the event' ),
  start: z.string().describe( 'Start time of the event' ),
  end: z.string().describe( 'End time of the event' ),
  description: z.string().optional().describe( 'Description of the event' ),
} )

const UpdateEventInputSchema = z.object( {
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  eventId: z.string().describe( 'Event ID' ),
  eventDetails: z.object( { 
    summary: z.string().optional().describe( 'Summary of the event' ),
    start: z.string().or( z.date() ).optional().describe( 'Start time of the event' ),
    description: z.string().optional().describe( 'Description of the event' ),
    attendees: z.array( z.string().email() ).optional().describe( 'Attendees of the event' ),
  } )
} )

const UpdateEventOutputSchema = z.object( { 
  id: z.string().describe( 'Event ID' ),
  summary: z.string().describe( 'Summary of the event' ),
  start: z.string().describe( 'Start time of the event' ),
  end: z.string().describe( 'End time of the event' ),
  description: z.string().optional().describe( 'Description of the event' ),
} )

const DeleteEventInputSchema = z.object( {
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  eventId: z.string().describe( 'Event ID' ),
} )

const CheckAvailabilityInputSchema = z.object( { 
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  scheduledTime: z.string().or( z.date() ).describe( 'Scheduled time for lesson' ),
} )

const CheckAvailabilityOutputSchema = z.object( { 
  available: z.boolean().describe( 'Whether the time slot is available' ),
  conflicts: z.array( 
    z.object( { 
        start: z.string().describe( 'Start time of the conflict' ),
        end: z.string().describe( 'End time of the conflict' ),
      } ) 
    ).optional().describe( 'Conflicts with the scheduled time' ),
} )

const FindAvailableSlotsInputSchema = z.object( {
  calendarId: z.string().describe( 'Teacher\'s calendar ID' ),
  date: z.string().or( z.date() ).describe( 'Date to find available slots for' ),
} )

const FindAvailableSlotsOutputSchema = z.array( z.date() ).describe( 'Available slots for the date' )

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