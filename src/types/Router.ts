import { z } from 'zod'

export const PersonalSiteLinkSchema = z.object({
    title: z.string(),
    href: z.string(),
    menuDescription: z.string().describe('A short description used for menu subheadings'),
    metaDescription: z.string().describe('A meta description for SEO'),
    icon: z.string(),
})

export const PersonalSiteLinksSchema = z.object({
    main: z.object({
        home: PersonalSiteLinkSchema,
        appointments: PersonalSiteLinkSchema,
        healthPlans: PersonalSiteLinkSchema,
        medications: PersonalSiteLinkSchema,
        medicalReports: PersonalSiteLinkSchema,
        benefits: PersonalSiteLinkSchema,
    }),
    bottom: z.object({
        account: PersonalSiteLinkSchema
    })
})

export type PersonalSiteLink = z.infer<typeof PersonalSiteLinkSchema>
export type PersonalSiteLinks = z.infer<typeof PersonalSiteLinksSchema>
