import { PersonalSiteLinks } from "@/types/Router";

export const APP_NAME = 'Whitelabel Care'

export const SITE_LINKS: PersonalSiteLinks = {
    main: {
        home: {
            title: 'My Health Overview',
            href: '/',
            menuDescription: 'Your Health Overview',
            metaDescription: 'View your health dashboard and manage your healthcare information',
            icon: 'ph:heartbeat',
        },
        appointments: {
            title: 'Appointments',
            href: '/appointments/',
            menuDescription: 'Manage your medical appointments',
            metaDescription: 'Schedule, view, and manage your upcoming medical appointments',
            icon: 'ph:calendar',
        },
        healthPlans: {
            title: 'Health Plans',
            href: '/health-plans/',
            menuDescription: 'View your health insurance plans',
            metaDescription: 'Access and review your current health insurance plans and coverage details',
            icon: 'ph:shield-check',
        },
        medications: {
            title: 'Medications',
            href: '/medications/',
            menuDescription: 'Manage your prescriptions',
            metaDescription: 'View and manage your current medications and prescriptions',
            icon: 'ph:pill',
        },
        medicalReports: {
            title: 'Medical Reports',
            href: '/medical-reports/',
            menuDescription: 'Access your medical records',
            metaDescription: 'View and download your medical reports and test results',
            icon: 'ph:clipboard-text',
        },
        benefits: {
            title: 'My Benefits',
            href: '/benefits/',
            menuDescription: 'Review your healthcare benefits',
            metaDescription: 'Explore and understand your current healthcare benefits and coverage',
            icon: 'ph:star',
        },
    },
    bottom: {
        account: {
            title: 'Account',
            href: '/account/',
            menuDescription: 'Manage your account settings',
            metaDescription: 'Access and modify your account preferences and personal information',
            icon: 'ph:user-circle',
        },
    },
}
