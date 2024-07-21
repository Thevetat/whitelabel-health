import { useEffect } from 'react';
import { useMedicalReportsStore } from '@/models/MedicalReports/MedicalReportsStore';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from '@iconify/react';
import LoadingSpinner from '@/components/Misc/LoadingSpinner';
import ErrorMessage from '@/components/Misc/ErrorMessage';

function MedicalReportsView() {
    const { data: medicalReports, isLoading, error, fetchMedicalReports } = useMedicalReportsStore();

    useEffect(() => {
        if (medicalReports.length === 0) {
            fetchMedicalReports();
        }
    }, [medicalReports.length, fetchMedicalReports]);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Your Medical Reports</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {medicalReports.map((report) => (
                            <TableRow key={report.id}>
                                <TableCell className="font-medium">{report.title}</TableCell>
                                <TableCell>{report.date}</TableCell>
                                <TableCell>{report.location}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="sm">
                                        <Icon icon="ph:eye" className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Icon icon="ph:download-simple" className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Icon icon="ph:printer" className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="mt-4 flex justify-end">
                    <Button>
                        <Icon icon="ph:plus" className="mr-2 h-4 w-4" />
                        Upload New Report
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default MedicalReportsView;
