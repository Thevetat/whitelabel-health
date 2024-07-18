import { Button } from "@/components/ui/button";
import DashboardCard from "./DashboardCard";

interface Medication {
    name: string;
    dosage: string;
}

interface DashboardCurrentMedicationsCardProps {
    medications: Medication[];
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
                        <Button variant="link" size="sm" className="underline">
                            View instructions
                        </Button>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col mt-8 items-end justify-center">
                <Button >
                    View All
                </Button>
            </div>
        </DashboardCard>
    );
}

export default DashboardCurrentMedicationsCard;
