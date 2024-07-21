import { SITE_LINKS } from "@/data/SiteLinks";
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

function BenefitsPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.benefits.title,
            SITE_LINKS.main.benefits.metaDescription
        );
    }, [updatePageInfo]);

    return (
        <div>
            Benefits Page Content
        </div>
    );
}

export default BenefitsPage;
