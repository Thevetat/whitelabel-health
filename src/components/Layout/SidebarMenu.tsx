import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from "../ui/button";
import SidebarButtons from './SidebarButtons';
import { useNavigate } from 'react-router-dom';
import { APP_NAME, SITE_LINKS } from '@/data/SiteLinks';

interface PersonalSiteLink {
    title: string;
    href: string;
    icon?: string;
    menuDescription?: string;
}

interface SidebarMenuProps {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarButtons: PersonalSiteLink[];
    bottomButtons: PersonalSiteLink[];
}

function SidebarMenu({ expanded, setExpanded, sidebarButtons, bottomButtons }: SidebarMenuProps) {
    const navigate = useNavigate();

    return (
        <aside className={`inset-y fixed left-0 z-20 flex h-full flex-col border-r border-color bg-bg-main transition-all duration-300 ease-in-out ${expanded ? 'w-[184px]' : 'w-[56px]'}`}>
            <div className={`border-b border-color p-2 transition-all duration-300 ease-in-out ${expanded ? '' : ''}`}>
                <Button
                    variant="ghost"
                    size={expanded ? "default" : "icon"}
                    aria-label="Home"
                    onClick={() => navigate(SITE_LINKS.main.home.href)}
                    className={`transition-all duration-300 ease-in-out flex items-center ${expanded ? 'w-full px-3 justify-start' : ''}`}
                >
                    <div className="flex items-center gap-2">
                        <Icon icon={SITE_LINKS.main.home.icon ?? ''} className="size-5 text-text-main" />
                        {expanded && <span className="text-sm font-semibold">{APP_NAME}</span>}
                    </div>
                </Button>
            </div>
            <nav className="grid gap-1 p-2">
                <SidebarButtons buttons={sidebarButtons} expanded={expanded} />
            </nav>
            <nav className="mt-auto grid gap-1 p-2 border-t border-color">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    onClick={() => setExpanded(!expanded)}
                >
                    <Icon icon="ph:arrows-out-line-horizontal" className="text-text-main" />
                </Button>
                <SidebarButtons buttons={bottomButtons} expanded={expanded} />
            </nav>
        </aside>
    );
}

export default SidebarMenu;
