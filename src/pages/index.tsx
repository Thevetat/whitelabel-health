import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import DashboardView from "@/models/Dashboard/views/DashboardView";

function HomeDashboardPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            "My Health Overview",
            "My Health Overview | Whitelable Health",
            ""
        );
    }, [updatePageInfo]);

    return (
        <DashboardView />
    );
}

export default HomeDashboardPage;
