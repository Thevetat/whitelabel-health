import { SITE_LINKS } from "@/data/SiteLinks";
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

function MedicalReportsPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.medicalReports.title,
            `${SITE_LINKS.main.medicalReports.title} | Whitelabel Care`,
            SITE_LINKS.main.medicalReports.metaDescription
        );
    }, [updatePageInfo]);

    return (
        <div>
            Medical Reports Page Content
        </div>
    );
}

export default MedicalReportsPage;
