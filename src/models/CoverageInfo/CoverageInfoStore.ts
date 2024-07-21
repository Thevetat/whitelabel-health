import { create } from 'zustand'
import { fetchCachedData, CachedData } from '@/utils/supabaseUtils'
import { CoverageInfo } from './CoverageInfo';

interface CoverageInfoStore extends CachedData<CoverageInfo> {
    isLoading: boolean;
    error: string | null;
    fetchCoverageInfo: () => Promise<void>;
}

export const useCoverageInfoStore = create<CoverageInfoStore>((set, get) => ({
    data: [],
    isLoading: false,
    error: null,
    lastFetched: null,
    fetchCoverageInfo: async () => {
        await fetchCachedData<CoverageInfo>(
            'coverage_info',
            { data: get().data, lastFetched: get().lastFetched },
            (newState) => set(newState)
        );
    }
}));
