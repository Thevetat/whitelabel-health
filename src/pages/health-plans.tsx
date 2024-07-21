// src/pages/coverage-info.tsx
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import CoverageInfoView from '@/models/CoverageInfo/views/CoverageInfoView';

function HealthPlansPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            'Coverage Information',
            'View your health insurance coverage details'
        );
    }, [updatePageInfo]);

    return <CoverageInfoView />;
}

export default HealthPlansPage();
