import { useEffect } from 'react';
import { useCoverageInfoStore } from '@/models/CoverageInfo/CoverageInfoStore';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from '@iconify/react';
import LoadingSpinner from '@/components/Misc/LoadingSpinner';
import ErrorMessage from '@/components/Misc/ErrorMessage';

function CoverageInfoView() {
    const { data: coverageInfoData, isLoading, error, fetchCoverageInfo } = useCoverageInfoStore();

    useEffect(() => {
        if (coverageInfoData.length === 0) {
            fetchCoverageInfo();
        }
    }, [coverageInfoData.length, fetchCoverageInfo]);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    const coverageInfo = coverageInfoData[0];
    if (!coverageInfo) return <ErrorMessage message="No coverage information found" />;

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Your Coverage Information</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Icon icon="ph:shield-check-fill" className="text-primary h-6 w-6" />
                        <h2 className="text-xl font-semibold">{coverageInfo.insurance_provider}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>DME Coinsurance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">{coverageInfo.dme_coinsurance}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>PCP Copay</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">{coverageInfo.pcp_copay}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Remaining Deductible</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">{coverageInfo.remaining_deductible}</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Specialist Copay</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold">{coverageInfo.specialist_copay}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export default CoverageInfoView;
