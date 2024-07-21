import { z } from 'zod';

export const CoverageInfoSchema = z.object({
    id: z.string().uuid(),
    insurance_provider: z.string(),
    dme_coinsurance: z.string(),
    pcp_copay: z.string(),
    remaining_deductible: z.string(),
    specialist_copay: z.string(),
});

export const CoverageInfoInsertSchema = CoverageInfoSchema.omit({ id: true });

export type CoverageInfo = z.infer<typeof CoverageInfoSchema>;
