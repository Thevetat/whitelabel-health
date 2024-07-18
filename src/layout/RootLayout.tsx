import { useState, ReactNode } from 'react';
import Header from "@/components/Layout/Header";
import SidebarMenu from "@/components/Layout/SidebarMenu";
import { SITE_LINKS } from "@/data/SiteLinks";

interface RootLayoutProps {
    children: ReactNode;
}

function RootLayout({ children }: RootLayoutProps) {
    const [expanded, setExpanded] = useState(false);

    const sidebarButtons = SITE_LINKS?.main ? Object.values(SITE_LINKS.main) : [];
    const bottomButtons = SITE_LINKS?.bottom ? Object.values(SITE_LINKS.bottom) : [];

    return (
        <div className={`bg-[#fafafa] grid h-screen w-full transition-all duration-300 ease-in-out ${expanded ? 'pl-[184px]' : 'pl-[56px]'}`}>
            <SidebarMenu
                expanded={expanded}
                setExpanded={setExpanded}
                sidebarButtons={sidebarButtons}
                bottomButtons={bottomButtons}
            />
            <div className="flex flex-col">
                <Header />
                <main className="flex-1 overflow-auto p-4 text-text-main">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default RootLayout;
