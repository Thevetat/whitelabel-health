import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from "../ui/button";
import SidebarButtons from './SidebarButtons';
import { APP_NAME, SITE_LINKS } from '@/data/SiteLinks';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import TooltipButtonLink from '../Misc/TooltipButtonLink';
import { PersonalSiteLink } from '@/types/Router';


interface SidebarMenuProps {
    expanded: boolean;
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarButtons: PersonalSiteLink[];
    bottomButtons: PersonalSiteLink[];
}

function SidebarMenu({ expanded, setExpanded, sidebarButtons, bottomButtons }: SidebarMenuProps) {

    return (
        <aside className={`inset-y fixed left-0 z-20 flex h-full flex-col border-r border-color bg-bg-main transition-all duration-300 ease-in-out ${expanded ? 'w-[184px]' : 'w-[56px]'}`}>
            <div className={`border-b border-color p-2 transition-all duration-300 ease-in-out ${expanded ? '' : ''}`}>
                <TooltipProvider>
                    <TooltipButtonLink
                        expanded={expanded}
                        title={APP_NAME}
                        href={SITE_LINKS.main.home.href}
                        icon={SITE_LINKS.main.home.icon}
                        description={SITE_LINKS.main.home.menuDescription}
                    />
                </TooltipProvider>
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
