import { Icon } from '@iconify/react';
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableCell } from "@/components/ui/table";
import DashboardCard from "./DashboardCard";
import { Appointment } from '@/models/Appointments/Appointments';


interface DashboardAppointmentsCardProps {
    appointments: Appointment[];
    className?: string;
}

function DashboardAppointmentsCard({ appointments, className }: DashboardAppointmentsCardProps) {
    return (
        <div className={className}>
            <DashboardCard title="Upcoming Appointments" icon="ph:calendar-check" >
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHeader>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-bold">{appointment.type}</TableCell>
                                <TableCell>{appointment.date}</TableCell>
                                <TableCell className="font-semibold">{appointment.time}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="sm"><Icon icon="ph:calendar" className='size-6'></Icon></Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
                <div className="mt-4 ml-auto">
                    <Button>View All</Button>
                </div>
            </DashboardCard>
        </div>
    );
}

export default DashboardAppointmentsCard;
