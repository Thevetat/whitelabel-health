import { useEffect } from 'react';
import { useMedicationsStore } from '@/models/Medications/MedicationsStore';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from '@iconify/react';
import LoadingSpinner from '@/components/Misc/LoadingSpinner';
import ErrorMessage from '@/components/Misc/ErrorMessage';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

function MedicationsView() {
    const { data: medications, isLoading, error, fetchMedications } = useMedicationsStore();

    useEffect(() => {
        if (medications.length === 0) {
            fetchMedications();
        }
    }, [medications.length, fetchMedications]);

    if (isLoading) return <LoadingSpinner />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Your Medications</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {medications.map((medication) => (
                        <Card key={medication.id}>
                            <CardHeader>
                                <CardTitle>{medication.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p><strong>Dosage:</strong> {medication.dosage}</p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="link" className="mt-2">View Instructions</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>{medication.name}</DialogTitle>
                                            <DialogDescription>Medication Instructions</DialogDescription>
                                        </DialogHeader>
                                        <p>{medication.instructions}</p>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-4 flex justify-end">
                    <Button>
                        <Icon icon="ph:plus" className="mr-2 h-4 w-4" />
                        Add New Medication
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default MedicationsView;
