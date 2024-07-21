import { useEffect } from 'react';
import { useNavigation } from '@/contexts/NavigationContext';
import DashboardAppointmentsCard from "../components/DashboardAppointmentsCard";
import DashboardMedicalReportsCard from "../components/DashboardMedicalReportsCard";
import DashboardCurrentMedicationsCard from "../components/DashboardCurrentMedicationsCard";
import DashboardCoverageInformationCard from "../components/DashboardCoverageInformationCard";
import DashboardAssistanceBanner from "../components/DashboardAssitanceBanner";
import { SITE_LINKS } from '@/data/SiteLinks';
import LoadingSpinner from '@/components/Misc/LoadingSpinner';
import ErrorMessage from '@/components/Misc/ErrorMessage';
import { useAppointmentsStore } from '@/models/Appointments/AppointmentsStore';
import { useMedicalReportsStore } from '@/models/MedicalReports/MedicalReportsStore';
import { useMedicationsStore } from '@/models/Medications/MedicationsStore';
import { useCoverageInfoStore } from '@/models/CoverageInfo/CoverageInfoStore';

function DashboardView() {
    const { updatePageInfo } = useNavigation();

    const {
        data: appointments,
        isLoading: appointmentsLoading,
        error: appointmentsError,
        fetchAppointments
    } = useAppointmentsStore();

    const {
        data: medicalReports,
        isLoading: reportsLoading,
        error: reportsError,
        fetchMedicalReports
    } = useMedicalReportsStore();

    const {
        data: medications,
        isLoading: medicationsLoading,
        error: medicationsError,
        fetchMedications
    } = useMedicationsStore();

    const {
        data: coverageInfoData,
        isLoading: coverageLoading,
        error: coverageError,
        fetchCoverageInfo
    } = useCoverageInfoStore();

    useEffect(() => {
        updatePageInfo(
            SITE_LINKS.main.home.title,
            SITE_LINKS.main.home.metaDescription
        );

        fetchAppointments();
        fetchMedicalReports();
        fetchMedications();
        fetchCoverageInfo();
    }, [updatePageInfo, fetchAppointments, fetchMedicalReports, fetchMedications, fetchCoverageInfo]);

    const isLoading = appointmentsLoading || reportsLoading || medicationsLoading || coverageLoading;
    const error = appointmentsError || reportsError || medicationsError || coverageError;

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    const coverageInfo = coverageInfoData[0]; // Assuming we only have one coverage info object

    return (
        <>
            <DashboardAssistanceBanner />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                <DashboardAppointmentsCard appointments={appointments} className="col-span-1 lg:col-span-2" />
                {coverageInfo && <DashboardCoverageInformationCard coverageInfo={coverageInfo} />}
                <DashboardMedicalReportsCard medicalReports={medicalReports} className="col-span-1 lg:col-span-2" />
                <DashboardCurrentMedicationsCard medications={medications} />
            </div>
        </>
    );
}

export default DashboardView;
