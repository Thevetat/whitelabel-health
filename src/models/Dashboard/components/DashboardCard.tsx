import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Icon } from '@iconify/react';

interface LayoutProps {
    children: React.ReactNode;
    title: string
    icon: string
}

function DashboardCard({ children, title, icon }: LayoutProps) {
    return (
        <Card className="bg-white">
            <CardHeader>
                <div className="flex items-center gap-2 text-[#33285A]">
                    <Icon icon={icon} className="size-6" />
                    <CardTitle className=" font-bold">{title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col">
                    {children}
                </div>
            </CardContent>
        </Card>
    )
}

export default DashboardCard
