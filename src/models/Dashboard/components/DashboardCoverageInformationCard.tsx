import { Button } from "@/components/ui/button";
import { Icon } from '@iconify/react';
import { Card } from "@/components/ui/card";
import DashboardCoverageListItem from "./DashboardCoverageListItem";
import { CoverageInfo } from "@/models/CoverageInfo/CoverageInfo";


interface DashboardCoverageInformationCardProps {
    coverageInfo: CoverageInfo;
}

function DashboardCoverageInformationCard({ coverageInfo }: DashboardCoverageInformationCardProps) {
    return (
        <Card className="p-4">
            <div className="flex flex-col h-full bg-[#F8F4FB] rounded-md p-4">
                <div className="flex items-center gap-4 bg-[#F8F4FB] rounded-t-md">
                    <div>
                        <Icon icon="ph:shield-check-fill" className="size-12 text-[#BAB5E3]" />
                    </div>

                    <h2 className="text-2xl max-w-15ch">Your Coverage <br />Information</h2>
                </div>
                <div className="mb-4 text-[#3B3939] text-xl mt-6 font-semibold">
                    {coverageInfo.insurance_provider}
                </div>
                <ul className="mb-4 space-y-2">
                    <DashboardCoverageListItem item="DME Coinsurance" value={coverageInfo.dme_coinsurance} />
                    <DashboardCoverageListItem item="PCP Copay" value={coverageInfo.pcp_copay} />
                    <DashboardCoverageListItem item="Remaining Deductible" value={coverageInfo.remaining_deductible} />
                    <DashboardCoverageListItem item="Specialist Copay" value={coverageInfo.specialist_copay} />
                </ul>
                <div className="ml-auto mt-auto">
                    <Button variant="link" className="text-[#887DA4] text-lg">More Details</Button>
                </div>
            </div>
        </Card>
    );
}

export default DashboardCoverageInformationCard;
