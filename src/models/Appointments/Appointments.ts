import { z } from 'zod';

export const AppointmentSchema = z.object({
    id: z.string().uuid(),
    type: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Invalid time format"),
});

export const AppointmentInsertSchema = AppointmentSchema.omit({ id: true });

export type Appointment = z.infer<typeof AppointmentSchema>

