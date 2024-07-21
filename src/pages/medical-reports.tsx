// src/pages/medical-reports.tsx
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { SITE_LINKS } from "@/data/SiteLinks";
import MedicalReportsView from '@/models/MedicalReports/views/MedicalReportsView';

function MedicalReportsPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.medicalReports.title,
            SITE_LINKS.main.medicalReports.metaDescription
        );
    }, [updatePageInfo]);

    return <MedicalReportsView />;
}

export default MedicalReportsPage;
