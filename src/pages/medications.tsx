import { SITE_LINKS } from "@/data/SiteLinks";
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

function MedicationsPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.medications.title,
            `${SITE_LINKS.main.medications.title} | Whitelabel Care`,
            SITE_LINKS.main.medications.metaDescription
        );
    }, [updatePageInfo]);

    return (
        <div>
            Medications Page Content
        </div>
    );
}

export default MedicationsPage;
