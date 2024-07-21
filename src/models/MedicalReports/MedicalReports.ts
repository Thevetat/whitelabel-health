import { z } from 'zod';

export const MedicalReportSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    location: z.string(),
});

export const MedicalReportInsertSchema = MedicalReportSchema.omit({ id: true });

export type MedicalReport = z.infer<typeof MedicalReportSchema>;
