import { create } from 'zustand'
import { fetchCachedData, CachedData } from '@/utils/supabaseUtils'
import { Medication } from './Medications';

interface MedicationsStore extends CachedData<Medication> {
    isLoading: boolean;
    error: string | null;
    fetchMedications: () => Promise<void>;
}

export const useMedicationsStore = create<MedicationsStore>((set, get) => ({
    data: [],
    isLoading: false,
    error: null,
    lastFetched: null,
    fetchMedications: async () => {
        await fetchCachedData<Medication>(
            'medications',
            { data: get().data, lastFetched: get().lastFetched },
            (newState) => set(newState)
        );
    }
}));
