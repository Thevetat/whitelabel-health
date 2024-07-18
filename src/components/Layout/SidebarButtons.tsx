import { Button } from "../ui/button";
import { Icon } from '@iconify/react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";
import { useNavigate } from "react-router-dom";
import { SITE_LINKS } from "@/data/SiteLinks";

interface PersonalSiteLink {
    title: string;
    href: string;
    icon?: string;
    menuDescription?: string;
}

interface SidebarButtonsProps {
    buttons: PersonalSiteLink[];
    expanded: boolean;
}

function SidebarButtons({ buttons, expanded }: SidebarButtonsProps) {
    const navigate = useNavigate();

    return (
        <>
            {buttons.map((button, index) => (
                <TooltipProvider key={index}>
                    {button.title !== SITE_LINKS.main.home.title && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={`rounded-lg transition-all duration-300 ease-in-out flex items-center ${expanded ? 'w-full px-3 justify-start' : ''
                                        }`}
                                    aria-label={button.title}
                                    onClick={() => navigate(button.href)}
                                >
                                    {button.icon && <Icon icon={button.icon} className="size-5 min-w-[20px] text-[#33285A]" />}
                                    {expanded && (
                                        <span className="ml-3 overflow-hidden whitespace-nowrap text-[#33285A]">
                                            {button.title}
                                        </span>
                                    )}
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                {button.menuDescription}
                            </TooltipContent>
                        </Tooltip>
                    )}
                </TooltipProvider>
            ))}
        </>
    );
}

export default SidebarButtons;
