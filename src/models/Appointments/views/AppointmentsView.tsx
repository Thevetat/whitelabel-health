import { useEffect } from 'react';
import { useAppointmentsStore } from '@/models/Appointments/AppointmentsStore';
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from '@iconify/react';
import LoadingSpinner from '@/components/Misc/LoadingSpinner';
import ErrorMessage from '@/components/Misc/ErrorMessage';

function AppointmentsView() {
    const { data: appointments, isLoading, error, fetchAppointments } = useAppointmentsStore();

    useEffect(() => {
        if (appointments.length === 0) {
            fetchAppointments();
        }
    }, [appointments.length, fetchAppointments]);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Your Appointments</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Time</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow key={appointment.id}>
                                <TableCell className="font-medium">{appointment.type}</TableCell>
                                <TableCell>{appointment.date}</TableCell>
                                <TableCell>{appointment.time}</TableCell>
                                <TableCell>
                                    <Button variant="outline" size="sm" className="ml-2">
                                        <Icon icon="ph:trash" className="mr-2 h-4 w-4" />
                                        Cancel
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="mt-4 flex justify-end">
                    <Button>
                        <Icon icon="ph:plus" className="mr-2 h-4 w-4" />
                        Schedule New Appointment
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default AppointmentsView;
