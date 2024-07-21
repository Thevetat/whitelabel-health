import { SITE_LINKS } from "@/data/SiteLinks";
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

function HealthPlansPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.healthPlans.title,
            SITE_LINKS.main.healthPlans.metaDescription
        );
    }, [updatePageInfo]);

    return (
        <div>
            Health Plans Page Content
        </div>
    );
}

export default HealthPlansPage;
