import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import DashboardCard from "./DashboardCard";
import { Icon } from '@iconify/react';
import { MedicalReport } from "@/models/MedicalReports/MedicalReports";

interface DashboardMedicalReportsCardProps {
    medicalReports: MedicalReport[];
    className?: string
}

function DashboardMedicalReportsCard({ medicalReports, className }: DashboardMedicalReportsCardProps) {
    return (
        <div className={className}>
            <DashboardCard title="Medical Reports" icon="ph:clipboard-text">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Date Added</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHeader>
                    <tbody>
                        {medicalReports.map((report, index) => (
                            <TableRow key={index}>
                                <TableCell>{report.title}</TableCell>
                                <TableCell>{report.date}</TableCell>
                                <TableCell>{report.location}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button variant="ghost" size="icon">
                                            <Icon icon="ph:eye" className="size-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Icon icon="ph:download-simple" className="size-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon">
                                            <Icon icon="ph:printer" className="size-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
                <div className="mt-4 ml-auto">
                    <Button >View All</Button>
                </div>
            </DashboardCard>
        </div>
    );
}

export default DashboardMedicalReportsCard;
