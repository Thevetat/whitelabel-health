import { PersonalSiteLink } from "@/types/Router";
import TooltipButtonLink from "../Misc/TooltipButtonLink";
import {
    TooltipProvider,
} from "../ui/tooltip";
import { SITE_LINKS } from "@/data/SiteLinks";

interface SidebarButtonsProps {
    buttons: PersonalSiteLink[];
    expanded: boolean;
}

function SidebarButtons({ buttons, expanded }: SidebarButtonsProps) {

    return (
        <>
            {buttons.map((button, index) => (
                <TooltipProvider key={index}>
                    {button.title !== SITE_LINKS.main.home.title && (
                        <TooltipButtonLink
                            expanded={expanded}
                            title={button.title}
                            href={button.href}
                            icon={button.icon}
                            description={button.menuDescription}
                        />
                    )}
                </TooltipProvider>
            ))}
        </>
    );
}

export default SidebarButtons;
