import { Button } from "@/components/ui/button";
import DashboardCard from "./DashboardCard";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface Medication {
    name: string;
    dosage: string;
    instructions: string;
}

interface DashboardCurrentMedicationsCardProps {
    medications: Medication[];
}

function MedicationInstructionsDialog({ medication }: { medication: Medication }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="link" size="sm" className="underline">
                    View instructions
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{medication.name}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Dosage:</h4>
                    <p>{medication.dosage}</p>
                    <h4 className="font-semibold mt-4 mb-2">Instructions:</h4>
                    <p>{medication.instructions}</p>
                </div>
            </DialogContent>
        </Dialog>
    );
}

function DashboardCurrentMedicationsCard({ medications }: DashboardCurrentMedicationsCardProps) {
    return (
        <DashboardCard title="Current Medications" icon="ph:pill">
            <ul className="space-y-6">
                {medications.map((medication, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold">{medication.name}</p>
                            <p className="text-sm text-gray-500">{medication.dosage}</p>
                        </div>
                        <MedicationInstructionsDialog medication={medication} />
                    </li>
                ))}
            </ul>
            <div className="flex flex-col mt-8 items-end justify-center">
                <Button>
                    View All
                </Button>
            </div>
        </DashboardCard>
    );
}

export default DashboardCurrentMedicationsCard;
