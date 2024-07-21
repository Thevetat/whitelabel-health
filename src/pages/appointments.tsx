// src/pages/appointments.tsx
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { SITE_LINKS } from "@/data/SiteLinks";
import AppointmentsView from '@/models/Appointments/views/AppointmentsView';

function AppointmentsPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.appointments.title,
            SITE_LINKS.main.appointments.metaDescription
        );
    }, [updatePageInfo]);

    return <AppointmentsView />;
}

export default AppointmentsPage;
