import React, { useEffect, useState } from 'react';
import DashboardAppointmentsCard from "../components/DashboardAppointmentsCard";
import DashboardMedicalReportsCard from "../components/DashboardMedicalReportsCard";
import DashboardCurrentMedicationsCard from "../components/DashboardCurrentMedicationsCard";
import DashboardCoverageInformationCard from "../components/DashboardCoverageInformationCard";
import DashboardAssistanceBanner from "../components/DashboardAssitanceBanner";
import { supabase } from '@/db/config';
import { Appointment, CoverageInfo, MedicalReport, Medication } from '@/types/schemas';


function Dashboard() {
    const [appointmentsData, setAppointmentsData] = useState<Appointment[]>([]);
    const [medicalReportsData, setMedicalReportsData] = useState<MedicalReport[]>([]);
    const [medicationsData, setMedicationsData] = useState<Medication[]>([]);
    const [coverageInfoData, setCoverageInfoData] = useState<CoverageInfo | null>(null);

    useEffect(() => {
        async function fetchData() {
            const { data: appointments } = await supabase
                .from('appointments')
                .select('*');
            setAppointmentsData(appointments || []);

            const { data: medicalReports } = await supabase
                .from('medical_reports')
                .select('*');
            setMedicalReportsData(medicalReports || []);

            const { data: medications } = await supabase
                .from('medications')
                .select('*');
            setMedicationsData(medications || []);

            const { data: coverageInfo } = await supabase
                .from('coverage_info')
                .select('*')
                .limit(1)
                .single();
            setCoverageInfoData(coverageInfo);
        }

        fetchData();
    }, []);

    return (
        <>
            <DashboardAssistanceBanner />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <DashboardAppointmentsCard appointments={appointmentsData} className="col-span-1 lg:col-span-2" />
                {coverageInfoData && <DashboardCoverageInformationCard coverageInfo={coverageInfoData} />}
                <DashboardMedicalReportsCard medicalReports={medicalReportsData} className="col-span-1 lg:col-span-2" />
                <DashboardCurrentMedicationsCard medications={medicationsData} />
            </div>
        </>
    );
}

export default Dashboard;
