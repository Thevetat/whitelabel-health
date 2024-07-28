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
                    size="icon"
                    className={`rounded-lg transition-all duration-300 ease-in-out overflow-hidden ${expanded ? 'w-[160px] justify-start' : 'w-[40px] justify-center'}`}
                    aria-label={title}
                    onClick={() => navigate(href)}
                >
                    <div className="flex items-center gap-2 w-full">
                        {icon && <Icon icon={icon} className="ml-2 size-5 flex-shrink-0" />}
                        <span className={`transition-all duration-300 ease-in-out whitespace-nowrap ${expanded ? 'opacity-100 max-w-[120px]' : 'opacity-0 max-w-0'}`}>
                            {title}
                        </span>
                    </div>
                </Button>
            </TooltipTrigger>
            <TooltipContent side="right" sideOffset={5}>
                {description}
            </TooltipContent>
        </Tooltip>
    )
}

export default TooltipButtonLink
