import { z } from 'zod';

export const appointmentSchema = z.object({
    id: z.string().uuid(),
    type: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Invalid time format"),
});

export const appointmentInsertSchema = appointmentSchema.omit({ id: true });

export const medicalReportSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    date: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    location: z.string(),
});

export const medicalReportInsertSchema = medicalReportSchema.omit({ id: true });

export const medicationSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    dosage: z.string(),
    instructions: z.string(),
});

export const medicationInsertSchema = medicationSchema.omit({ id: true });

export const coverageInfoSchema = z.object({
    id: z.string().uuid(),
    insurance_provider: z.string(),
    dme_coinsurance: z.string(),
    pcp_copay: z.string(),
    remaining_deductible: z.string(),
    specialist_copay: z.string(),
});

export const coverageInfoInsertSchema = coverageInfoSchema.omit({ id: true });

export type Appointment = z.infer<typeof appointmentSchema>;
export type MedicalReport = z.infer<typeof medicalReportSchema>;
export type Medication = z.infer<typeof medicationSchema>;
export type CoverageInfo = z.infer<typeof coverageInfoSchema>;
