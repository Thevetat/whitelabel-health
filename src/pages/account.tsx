import { SITE_LINKS } from "@/data/SiteLinks";
import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';

function AccountPage() {
    const { updatePageInfo } = useNavigation();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.bottom.account.title,
            `${SITE_LINKS.bottom.account.title} | Whitelable Care`,
            SITE_LINKS.bottom.account.metaDescription
        );
    }, [updatePageInfo]);

    return (
        <div>
            Account Page Content
        </div>
    );
}

export default AccountPage;
