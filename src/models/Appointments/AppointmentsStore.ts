import { create } from 'zustand'
import { fetchCachedData, CachedData } from '@/utils/supabaseUtils'
import { Appointment } from './Appointments';

interface AppointmentsStore extends CachedData<Appointment> {
    isLoading: boolean;
    error: string | null;
    fetchAppointments: () => Promise<void>;
}

export const useAppointmentsStore = create<AppointmentsStore>((set, get) => ({
    data: [],
    isLoading: false,
    error: null,
    lastFetched: null,
    fetchAppointments: async () => {
        await fetchCachedData<Appointment>(
            'appointments',
            { data: get().data, lastFetched: get().lastFetched },
            (newState) => set(newState)
        );
    }
}));
