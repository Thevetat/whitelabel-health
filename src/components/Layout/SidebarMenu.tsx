import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from "../ui/button";
import SidebarButtons from './SidebarButtons';
import { useNavigate } from 'react-router-dom';

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
        <aside className={`inset-y fixed left-0 z-20 flex h-full flex-col border-r border-color bg-[#fafafa] transition-all duration-300 ease-in-out ${expanded ? 'w-[184px]' : 'w-[56px]'}`}>
            <div className={`border-b border-color p-2 transition-all duration-300 ease-in-out ${expanded ? '' : ''}`}>
                <Button
                    variant="ghost"
                    size={expanded ? "default" : "icon"}
                    aria-label="Home"
                    onClick={() => navigate('/')}
                    className={`w-full ${expanded ? 'justify-start' : 'justify-center'}`}
                >
                    <div className="flex items-center gap-2">
                        <Icon icon="ph:heartbeat" className="size-6 text-text-main" />
                        {expanded && <span className="text-sm font-semibold">Whitelabel Care</span>}
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
