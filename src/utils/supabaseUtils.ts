import { supabase } from '@/db/config'

const CACHE_TIME = 10 * 60 * 1000;

export interface CachedData<T> {
    data: T[];
    lastFetched: number | null;
}

export async function fetchCachedData<T>(
    tableName: string,
    cachedData: CachedData<T>,
    setStore: (data: Partial<CachedData<T> & { isLoading: boolean; error: string | null }>) => void
): Promise<void> {
    const now = Date.now();

    if (cachedData.data.length > 0 && cachedData.lastFetched && (now - cachedData.lastFetched < CACHE_TIME)) {
        return;
    }

    setStore({ isLoading: true, error: null });

    try {
        const { data, error } = await supabase.from(tableName).select('*');
        if (error) throw error;

        setStore({
            data: data as T[],
            isLoading: false,
            lastFetched: Date.now(),
            error: null
        });
    } catch (error) {
        setStore({
            isLoading: false,
            error: (error as Error).message
        });
    }
}
