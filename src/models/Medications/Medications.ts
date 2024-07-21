import { z } from 'zod';

export const MedicationSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    dosage: z.string(),
    instructions: z.string(),
});

export const MedicationInsertSchema = MedicationSchema.omit({ id: true });

export type Medication = z.infer<typeof MedicationSchema>;
