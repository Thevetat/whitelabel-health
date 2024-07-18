import DashboardAppointmentsCard from "../components/DashboardAppointmentsCard";
import DashboardMedicalReportsCard from "../components/DashboardMedicalReportsCard";
import DashboardCurrentMedicationsCard from "../components/DashboardCurrentMedicationsCard";
import DashboardCoverageInformationCard from "../components/DashboardCoverageInformationCard";
import DashboardAssistanceBanner from "../components/DashboardAssitanceBanner";

const appointments = [
    { type: "PCP Follow-up", date: "02/08/2023", time: "11:54am" },
    { type: "PCP Follow-up", date: "02/08/2023", time: "11:54am" },
    { type: "PCP Follow-up", date: "02/08/2023", time: "11:54am" },
    { type: "PCP Follow-up", date: "02/08/2023", time: "11:54am" },
];

const medicalReports = [
    { title: "IRIS Wet AMD", date: "02/08/2023", location: "St. Lukes" },
    { title: "Personality Screening Report", date: "02/08/2023", location: "St. Alphonsus" },
    { title: "Xpress Test", date: "02/08/2023", location: "St. Lukes" },
    { title: "Fall Risk Screening", date: "12/14/2022", location: "St. Lukes" },
    { title: "Blood Test", date: "12/14/2022", location: "St. Lukes" },
];

const medications = [
    { name: "Humulin R U-100", dosage: "100mg | Oral" },
    { name: "Pramlintide (SymlinPen)", dosage: "250mg | Oral" },
    { name: "Alogliptin (Nesina)", dosage: "100mg | Oral" },
    { name: "Alogliptin (Nesina)", dosage: "1000mg | Oral" },
];

const coverageInfo = {
    insuranceProvider: "UnitedHealthcare",
    dmeCoinsurance: "20%",
    pcpCopay: "$20.00",
    remainingDeductible: "$900.00",
    specialistCopay: "$50.00",
};

function Dashboard() {
    return (
        <>
            <DashboardAssistanceBanner />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <DashboardAppointmentsCard appointments={appointments} className="col-span-1 lg:col-span-2" />
                <DashboardCoverageInformationCard coverageInfo={coverageInfo} />
                <DashboardMedicalReportsCard medicalReports={medicalReports} className="col-span-1 lg:col-span-2" />
                <DashboardCurrentMedicationsCard medications={medications} />
            </div>
        </>
    );
}

export default Dashboard;
``
