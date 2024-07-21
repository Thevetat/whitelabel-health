import { Button } from "../ui/button";
import { Icon } from '@iconify/react';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../ui/tooltip";
import { useNavigate } from "react-router-dom";

interface TooltipButtonLinkProps {
    title: string
    description: string
    href: string
    icon: string
    expanded: boolean;
}

function TooltipButtonLink({ title, description, href, icon, expanded }: TooltipButtonLinkProps) {
    const navigate = useNavigate();

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size={expanded ? "default" : "icon"}
                    className={`transition-all duration-300 ease-in-out flex items-center ${expanded ? 'w-full px-3 justify-start' : ''}`}
                    aria-label={title}
                    onClick={() => navigate(href)}
                >
                    {icon && <Icon icon={icon} className="size-5 min-w-[20px]" />}
                    {expanded && (
                        <span className="ml-3 overflow-hidden whitespace-nowrap">
                            {title}
                        </span>
                    )}
                </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
                {description}
            </TooltipContent>
        </Tooltip>
    )
}

export default TooltipButtonLink
