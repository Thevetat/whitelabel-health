// src/pages/medications.tsx
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import { SITE_LINKS } from "@/data/SiteLinks";
import MedicationsView from '@/models/Medications/views/MedicationsView';

function MedicationsPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.medications.title,
            SITE_LINKS.main.medications.metaDescription
        );
    }, [updatePageInfo]);

    return <MedicationsView />;
}

export default MedicationsPage;
