import { create } from 'zustand'
import { fetchCachedData, CachedData } from '@/utils/supabaseUtils'
import { MedicalReport } from './MedicalReports';

interface MedicalReportsStore extends CachedData<MedicalReport> {
    isLoading: boolean;
    error: string | null;
    fetchMedicalReports: () => Promise<void>;
}

export const useMedicalReportsStore = create<MedicalReportsStore>((set, get) => ({
    data: [],
    isLoading: false,
    error: null,
    lastFetched: null,
    fetchMedicalReports: async () => {
        await fetchCachedData<MedicalReport>(
            'medical_reports',
            { data: get().data, lastFetched: get().lastFetched },
            (newState) => set(newState)
        );
    }
}));
