import { useEffect, useState } from 'react';
import { Appointment, MedicalReport, Medication, CoverageInfo } from '../../../types/schemas';
import DashboardAppointmentsCard from "../components/DashboardAppointmentsCard";
import DashboardMedicalReportsCard from "../components/DashboardMedicalReportsCard";
import DashboardCurrentMedicationsCard from "../components/DashboardCurrentMedicationsCard";
import DashboardCoverageInformationCard from "../components/DashboardCoverageInformationCard";
import DashboardAssistanceBanner from "../components/DashboardAssitanceBanner";
import { supabase } from '@/db/config';
import LoadingSpinner from '@/components/Misc/LoadingSpinner';
import ErrorMessage from '@/components/Misc/ErrorMessage';

function Dashboard() {
    const [appointmentsData, setAppointmentsData] = useState<Appointment[]>([]);
    const [medicalReportsData, setMedicalReportsData] = useState<MedicalReport[]>([]);
    const [medicationsData, setMedicationsData] = useState<Medication[]>([]);
    const [coverageInfoData, setCoverageInfoData] = useState<CoverageInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                setError(null);  // Clear any previous errors

                const [
                    { data: appointments, error: appointmentsError },
                    { data: medicalReports, error: medicalReportsError },
                    { data: medications, error: medicationsError },
                    { data: coverageInfo, error: coverageInfoError }
                ] = await Promise.all([
                    supabase.from('appointments').select('*'),
                    supabase.from('medical_reports').select('*'),
                    supabase.from('medications').select('*'),
                    supabase.from('coverage_info').select('*').limit(1).single()
                ]);

                if (appointmentsError) throw new Error('Failed to fetch appointments');
                if (medicalReportsError) throw new Error('Failed to fetch medical reports');
                if (medicationsError) throw new Error('Failed to fetch medications');
                if (coverageInfoError) throw new Error('Failed to fetch coverage info');

                setAppointmentsData(appointments as Appointment[] || []);
                setMedicalReportsData(medicalReports as MedicalReport[] || []);
                setMedicationsData(medications as Medication[] || []);
                setCoverageInfoData(coverageInfo as CoverageInfo);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('An error occurred while fetching data. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

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
