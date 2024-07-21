import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import DashboardView from "@/models/Dashboard/views/DashboardView";
import { SITE_LINKS } from '@/data/SiteLinks';

function HomeDashboardPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.home.title,
            SITE_LINKS.main.home.metaDescription
        );
    }, [updatePageInfo]);

    return (
        <DashboardView />
    );
}

export default HomeDashboardPage;
