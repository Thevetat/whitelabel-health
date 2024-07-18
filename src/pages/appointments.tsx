import { SITE_LINKS } from "@/data/SiteLinks";
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

function AppointmentsPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.appointments.title,
            `${SITE_LINKS.main.appointments.title} | Whitelable Care`,
            SITE_LINKS.main.appointments.metaDescription
        );
    }, [updatePageInfo]);

    return (
        <div>
            Appointments Page Content
        </div>
    );
}

export default AppointmentsPage;
